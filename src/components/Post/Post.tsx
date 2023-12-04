import postStyle from './post.module.css'
import { useNavigate } from 'react-router-dom'
export const Post=({...item})=>{
    const navigate=useNavigate()
    return(
<article className={postStyle.post}>
<img className={postStyle.post__img} src={item.image} alt={item.title} />
<div className={postStyle.post__information}>
<p className={postStyle.post__title} onClick={()=>{navigate(`/post/${item.id}`)}}>{item.title}</p>
<p className={postStyle.post__author}>{item.name_author}</p>
<span className={postStyle.post__description}>{item.description}</span>
</div>
        </article>
    )
}