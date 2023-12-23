import { Link } from 'react-router-dom'
import headerStyle from './header.module.css'
import logo from '../../assets/logo.png'

export const Header=()=>{

   
    return(
        <>
<header className={headerStyle.header}>
    <div className={headerStyle.container}>
        <Link to='/' className={headerStyle.header__link_logo}>
            <img src={logo} alt="" className={headerStyle.header__logo} />
              </Link>
        <div className={headerStyle.header__information}>
        <div className={headerStyle.header__theme}>     
    </div>
        </div>
    </div>
</header>
        </>
    )
}