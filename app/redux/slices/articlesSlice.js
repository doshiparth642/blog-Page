import { createSlice } from "@reduxjs/toolkit";
import { article } from "../../constants/index";

const initialState = {
  articles: article,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
});

export const selectArticles = (state) => state.articles.articles;

export default articlesSlice.reducer;
