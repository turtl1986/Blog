import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import { Post } from "../Post/Post";
import postsListStyle from "./postsList.module.css";
import { fetchPostsThunk } from "../../redux/blogs/thunks";
import { Articles } from "../../api/blogs/types";
import { NavList } from "../NavList";
import { AppPagination } from "../Pagination";

export const PostsList = () => {

  const countPosts = useAppSelector((state) => state.blogs.postsList.count)

	const dispatch = useAppDispatch()
	const [offset, setOffset] = useState(0)
	const [limit, setLimit] = useState(10)
	const [pageNumber, setPageNumber] = useState(1)
  const [searchParam, setSearchParam] = useState('')

  useEffect(() => {
    dispatch(fetchPostsThunk({ limit, offset, searchParam }));
  }, [dispatch, offset, limit, searchParam]);

  const {status, postsList} = useAppSelector((state) => state.blogs)

	useEffect(() => {
		
		setOffset((pageNumber - 1) * limit)
	},[pageNumber, limit])

  return (
    <div className={postsListStyle.container}>
      <NavList 
        onChange={(value) => setSearchParam(value)}
      />
   
      
        {
          status==='loading' && <div className={postsListStyle.loader}></div>
        }
        {
         status==='ok' && <div className={postsListStyle.postsList}>
        { postsList.results.map((blogs: Articles) => <Post key={blogs.id} {...blogs} />)}
         </div>
        }
      

      <div className={postsListStyle.postsList__pagination}>
{
  countPosts>=10 ?
  <div >
  <AppPagination
					count={countPosts}
					page={limit}
					currentPage={pageNumber}
					setPage={setPageNumber}
				/>
  </div>:<>
  </>
}
      </div>
      
    </div>
  );
};
