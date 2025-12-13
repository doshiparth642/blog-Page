import { createSlice } from "@reduxjs/toolkit";
import { articleComments } from "../../constants/index";

const initialState = {
  commentsByArticle: articleComments.reduce((acc, current) => {
    acc[current.articleId] = current.comments;
    return acc;
  }, {}),
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { articleId, newComment } = action.payload;
      if (state.commentsByArticle[articleId]) {
        state.commentsByArticle[articleId].push(newComment);
      } else {
        state.commentsByArticle[articleId] = [newComment];
      }
    },
  },
});

export const { addComment } = commentsSlice.actions;

export const selectCommentsByArticleId = (state, articleId) =>
  state.comments.commentsByArticle[articleId] || [];

export default commentsSlice.reducer;
