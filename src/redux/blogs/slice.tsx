import { createSlice } from '@reduxjs/toolkit'
import { BlogAll } from '../../api/blogs/types'
import { fetchBlogThunk, fetchBlogsThunk } from './thunks'
import { BlogSingle } from '../../api/blog/types'


interface BlogState{
    isLoading: boolean
    blogs:BlogAll[]
    blog:BlogSingle[]
    error:unknown
}

const initialState:BlogState ={
    isLoading: false,
    blogs:[],
    blog:[],
    error: ''
}

export const blogSlice=createSlice({
    name:'blogs',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addMatcher(fetchBlogsThunk.pending.match, (state)=>{
            state.isLoading = true
        })
        builder.addMatcher(fetchBlogsThunk.fulfilled.match, (state,action)=>{
            state.isLoading = false
            state.blogs = action.payload
        })
        builder.addMatcher(fetchBlogsThunk.rejected.match, (state,action)=>{
            state.isLoading = false
            state.error=action.payload
        })
        builder.addMatcher(fetchBlogThunk.pending.match, (state)=>{
            state.isLoading = true
        })
        builder.addMatcher(fetchBlogThunk.fulfilled.match, (state,action)=>{
            state.isLoading = false
            state.blog= action.payload
        })
        builder.addMatcher(fetchBlogThunk.rejected.match, (state,action)=>{
            state.isLoading = false
            state.error=action.payload
        })
    }
})

