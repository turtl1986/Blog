import { createAsyncThunk } from "@reduxjs/toolkit";
import postsApi from "../../api/blogs/blogs";
import postApi from "../../api/blog/blog";

export const fetchPostsThunk = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ limit, offset, searchParam = ''}: { limit: number; offset: number, searchParam: string }) => {
    const response = await postsApi.fetchAll(limit, offset, searchParam);
    console.log(response);
    return response;
  }
);

export const fetchBlogThunk = createAsyncThunk(
  "blog/fetchBlog",
  async (id: string | undefined) => {
    const response = await postApi.fetchOne(id);
    return response;
  }
);
