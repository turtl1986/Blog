import postStyle from './post.module.css'
import heart from '../../assets/heart.png'
import {  useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/useRedux'
import { useEffect } from 'react'
import { fetchBlogThunk } from '../../redux/blogs/thunks'

export const Post=()=>{

    const { id } = useParams()
    console.log(typeof id)
    const dispatch=useAppDispatch()
    const {blog} = useAppSelector(state=>state.blogs)
   useEffect(()=>{
   dispatch(fetchBlogThunk(id))
   },[dispatch])

    return(
        <div className={postStyle.post}>
       <div className={postStyle.post__info}>
       <p className={postStyle.post__title}>{blog.title}</p>
       <img src={heart} alt="" />
        </div>     

<img className={postStyle.post__img} src={blog.image} alt={blog.image_alt} />
<article className={postStyle.post__text}>{blog.description} 
</article>
 </div>
    )
}

