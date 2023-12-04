import { createAsyncThunk } from "@reduxjs/toolkit"
import BlogsApi from '../../api/blogs/blogs'
import  BlogSingleApi from '../../api/blog/blog'

export const fetchBlogsThunk=createAsyncThunk(
'blogs/fetchBlogs',
async ()=>{
const response = await BlogsApi.fetchAll()
return response
}
)

export const fetchBlogThunk=createAsyncThunk(
    'blog/fetchBlog',
    async (id:string|undefined)=>{
    const response = await  BlogSingleApi.fetchOne(id)
    return response
    }
    )