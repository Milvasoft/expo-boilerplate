/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsReducer } from "./INewsReducer";
import { INewsArticle, NewsCategory } from "../types/INewsArticle";

const initialState: INewsReducer = {
  articles: [],
  selectedArticle: null,
  selectedCategory: "all",
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<INewsArticle[]>) => {
      state.articles = action.payload;
      state.error = null;
    },
    setSelectedArticle: (state, action: PayloadAction<INewsArticle | null>) => {
      state.selectedArticle = action.payload;
    },
    setSelectedCategory: (
      state,
      action: PayloadAction<NewsCategory | "all">
    ) => {
      state.selectedCategory = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearNews: (state) => {
      state.articles = [];
      state.selectedArticle = null;
      state.error = null;
    },
  },
});

export const {
  setArticles,
  setSelectedArticle,
  setSelectedCategory,
  setLoading,
  setError,
  clearNews,
} = newsSlice.actions;

export default newsSlice.reducer;
