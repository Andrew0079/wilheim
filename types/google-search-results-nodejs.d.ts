declare module "google-search-results-nodejs" {
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

  class GoogleSearch {
    constructor(apiKey: string);
    json(params: SearchParams, callback: (data: SearchResults) => void): void;
  }
}
