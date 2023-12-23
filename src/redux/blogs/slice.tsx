import { createSlice } from "@reduxjs/toolkit";
import { PostsResponse } from "../../api/blogs/types";
import { fetchBlogThunk, fetchPostsThunk } from "./thunks";
import { Blog } from "../../api/blog/types";

interface PostState {
  status?: "loading" | "ok" | "error";
  postsList: PostsResponse;
  error?: unknown;
  blog: Blog[];
}

const initialState: PostState = {
  postsList: {
    count: 0,
    next: "",
    previous: 0,
    results: [],
  },
  blog: [],
};

export const postsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(fetchPostsThunk.pending.match, (state) => {
      state.status = "loading";
    });
    builder.addMatcher(fetchPostsThunk.fulfilled.match, (state, action) => {
      state.status = "ok";
      state.postsList = action.payload;
    });
    builder.addMatcher(fetchPostsThunk.rejected.match, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
    builder.addMatcher(fetchBlogThunk.pending.match, (state) => {
      state.status = "loading";
    });
    builder.addMatcher(fetchBlogThunk.fulfilled.match, (state, action) => {
      state.status = "ok";
      state.blog = action.payload;
    });
    builder.addMatcher(fetchBlogThunk.rejected.match, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});
