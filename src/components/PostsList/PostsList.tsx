import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/useRedux'
import { Post } from '../Post/Post'
import postsListStyle from './postsList.module.css'
import { fetchBlogsThunk } from '../../redux/blogs/thunks'
import { BlogAll } from '../../api/blogs/types'

export const PostsList=()=>{
    const dispatch=useAppDispatch()
    const {blogs}=useAppSelector(state=>state.blogs)

   useEffect(()=>{
   dispatch(fetchBlogsThunk())
   },[dispatch])
return(
    <div className={postsListStyle.postsList}>
{ blogs.map((blogs:BlogAll) =><Post key={blogs.id} {...blogs} />)}
    </div>
)
}

