import errorStyle from './error.module.css'
import error from '../../assets/404.png'
import { useNavigate } from 'react-router-dom'

export const Error=()=>{
    const navigate=useNavigate()
    return(
<div className={errorStyle.container}>
    <img src={error} alt="" />
    <button type="button" onClick={()=>navigate(-1)}>Вернуться назад</button>
</div>
    )
}