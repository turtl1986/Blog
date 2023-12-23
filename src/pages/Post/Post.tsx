import postStyle from "./post.module.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import { useEffect } from "react";
import { fetchBlogThunk } from "../../redux/blogs/thunks";

export const Post = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { blog } = useAppSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogThunk(id));
  }, [dispatch]);

  return (
    <div className={postStyle.post}>
      <span className={postStyle.post__block_img}>
      <img className={postStyle.post__img} src={blog.image_url} alt="" />
      </span>
      <p className={postStyle.post__title}>{blog.title}</p>
      <div className={postStyle.post__info}>
      <p className={postStyle.post__site}>{blog.news_site}:</p>
      <a className={postStyle.post__url} href={blog.url}>{blog.url}</a>
      </div>    
      <p className={postStyle.post__time}>Дата публикации: {blog.published_at}</p>
      <p className={postStyle.post__time}>Дата обновления публикации:{blog.updated_at}</p>
      <span className={postStyle.post__text}> {blog.summary} </span>
      
    </div>
  );
};
