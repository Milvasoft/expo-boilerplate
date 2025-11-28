/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import { INewsArticle, NewsCategory } from "../types/INewsArticle";

export interface INewsReducer {
  articles: INewsArticle[];
  selectedArticle: INewsArticle | null;
  selectedCategory: NewsCategory | "all";
  isLoading: boolean;
  error: string | null;
}
