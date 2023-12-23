import postStyle from './post.module.css'
import { useNavigate } from 'react-router-dom'
export const Post=({...item})=>{
    const navigate=useNavigate()
    return(
<article className={postStyle.post}>
<p className={postStyle.post__title} onClick={()=>{navigate(`/post/${item.id}`)}}>{item.title}</p>
<p className={postStyle.post__text}>{item.url}</p>
<p className={postStyle.post__text}>{item.published_at}</p>

        </article>
    )
}