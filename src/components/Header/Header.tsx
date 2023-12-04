import { Link } from 'react-router-dom'
import headerStyle from './header.module.css'
import logo from '../../assets/logo.png'
import sun from '../../assets/icons8-солнце.svg'
import { useTheme } from '../../context/theme.context'
import moon from '../../assets/icons8-луна-48.png'

export const Header=()=>{
    const {theme,changeTheme}=useTheme()

    const handleclick=()=>
    {
      changeTheme()
    }
    return(
        <>
<header className={headerStyle.header}>
    <div className={headerStyle.container}>
        <Link to='/' className={headerStyle.header__link_logo}>
            <img src={logo} alt="" className={headerStyle.header__logo} />
              </Link>
        <div className={headerStyle.header__information}>

        <img onClick={handleclick} src={theme==='light' ? sun : moon} alt="" />
      
            <button className={headerStyle.header__button} type="button">Войти</button>
        </div>
    </div>
</header>
        </>
    )
}