/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

export interface INewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: NewsCategory;
  source: string;
  url: string;
}

export type NewsCategory =
  | "technology"
  | "sports"
  | "business"
  | "entertainment"
  | "health"
  | "science";

export interface INewsResponse {
  articles: INewsArticle[];
  totalResults: number;
}
