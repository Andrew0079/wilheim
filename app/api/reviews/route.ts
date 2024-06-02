import { GoogleSearch } from "google-search-results-nodejs";
import { NextResponse, NextRequest } from "next/server";
import NodeCache from "node-cache"; // Import node-cache

const apiKey = process.env.NEXT_PUBLIC_SERPAPI_API_KEY as string;
const search = new GoogleSearch(apiKey);
const dataId = "0x476d07e53b871151:0x1d831e66aa788c98";
const cache = new NodeCache();

const CACHE_KEY = `reviews_${dataId}`;
const CACHE_INTERVAL = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds

const params: SearchParams = {
  engine: "google_maps_reviews",
  hl: "en",
  data_id: dataId,
};

interface SearchParams {
  engine: string;
  hl: string;
  data_id: string;
  next_page_token?: string;
}

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  extracted_snippet?: {
    original: string;
  };
}

interface PlaceInfo {
  place_id: string;
  name: string;
  address: string;
}

interface SearchResults {
  place_info?: PlaceInfo;
  reviews?: Review[];
  serpapi_pagination?: {
    next_page_token?: string;
  };
}

interface AllReviews {
  placeInfo?: PlaceInfo;
  reviews: Review[];
  lastUpdated: number; // Timestamp of the last update
}

const getJson = (params: SearchParams): Promise<SearchResults> => {
  return new Promise((resolve, reject) => {
    search.json(params, (data: any) => {
      if (data) {
        resolve(data);
      } else {
        reject("Failed to fetch data");
      }
    });
  });
};

export async function GET(_: NextRequest) {
  try {
    const cachedData = cache.get<AllReviews>(CACHE_KEY);

    if (cachedData) {
      const now = Date.now();
      const cacheAge = now - cachedData.lastUpdated;
      if (cacheAge < CACHE_INTERVAL) {
        return NextResponse.json(cachedData);
      }
    }

    const allReviews: AllReviews = {
      reviews: [],
      lastUpdated: Date.now(),
    };

    let hasNextPage = true;
    let nextPageToken: string | undefined = undefined;

    while (hasNextPage) {
      const searchParams: SearchParams = {
        ...params,
        next_page_token: nextPageToken,
      };

      const json: SearchResults = await getJson(searchParams);

      if (json.place_info && !allReviews.placeInfo) {
        allReviews.placeInfo = json.place_info;
      }

      if (json.reviews) {
        const filteredReviews = json.reviews.filter(
          (review) => review.extracted_snippet
        );
        allReviews.reviews.push(...filteredReviews);
      }

      if (json.serpapi_pagination?.next_page_token) {
        nextPageToken = json.serpapi_pagination.next_page_token;
      } else {
        hasNextPage = false;
      }
    }

    cache.set(CACHE_KEY, allReviews);

    return NextResponse.json(allReviews);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" });
  }
}
