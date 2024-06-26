import { GoogleSearch } from "google-search-results-nodejs";
import { NextResponse, NextRequest } from "next/server";
import NodeCache from "node-cache"; // Import node-cache

const apiKey = process.env.NEXT_PUBLIC_SERPAPI_API_KEY as string;
const search = new GoogleSearch(apiKey);
const dataId = "0x476d07e53b871151:0x1d831e66aa788c98";
const cache = new NodeCache({ stdTTL: 1296000 }); // 15 days TTL in seconds

const CACHE_KEY = `reviews_${dataId}`;

interface SearchParams {
  engine: string;
  hl: string;
  data_id: string;
  next_page_token?: string;
  num?: number;
}

const getJson = (params: SearchParams): Promise<any> => {
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

export async function POST(req: NextRequest) {
  try {
    const { next_page_token: nextPageToken }: any = await req.json();

    const cacheKeyWithToken = `${CACHE_KEY}_${nextPageToken}`;
    let cacheData = cache.get<any>(cacheKeyWithToken);

    if (!cacheData) {
      // If cacheData is not found, fetch new data from the API
      const searchParams: SearchParams = {
        engine: "google_maps_reviews",
        hl: "en",
        data_id: dataId,
        next_page_token: nextPageToken,
        ...(nextPageToken ? { num: 20 } : {}),
      };

      const apiResult = await getJson(searchParams);

      // Update the cache with new data
      const updatedCacheData = {
        placeInfo: apiResult.place_info ?? {},
        reviews: apiResult.reviews || [],
        nextPageToken: apiResult.serpapi_pagination?.next_page_token,
      };
      cache.set(cacheKeyWithToken, updatedCacheData);
      cacheData = updatedCacheData;
    }

    return NextResponse.json(cacheData);
  } catch (error) {
    console.error("Error fetching reviews: ", error);
    return NextResponse.json({ error: "Failed to fetch reviews" });
  }
}
