import navListStyle from './navList.module.css'

export const NavList=()=>{


return(
<aside className={navListStyle.navList}>
    <input placeholder='Search...' className={navListStyle.navList__search} type="search" name="search" id="search" />
<ul className={navListStyle.navList__list}>
<li className={navListStyle.navList__item}>басня</li>
<li className={navListStyle.navList__item}>миф</li>
<li className={navListStyle.navList__item}>роман</li>
<li className={navListStyle.navList__item}>комедия</li>
<li className={navListStyle.navList__item}>ода</li>
</ul>

</aside>
)
}