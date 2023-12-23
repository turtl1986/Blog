export interface PostsResponse {
  count: number;
  next: string;
  previous: number;
  results: Articles[];
}

export interface Articles {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
}
