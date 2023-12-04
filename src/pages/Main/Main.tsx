import { NavList } from '../../components/NavList'
import { PostsList } from '../../components/PostsList'
import mainStyle from './main.module.css'

export const Main=()=>{
return(
    <div className={mainStyle.container}>
<NavList/>
<PostsList/>
    </div>
)
}