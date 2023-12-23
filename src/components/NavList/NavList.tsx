import navListStyle from './navList.module.css'
import _ from 'lodash'

interface SearchControlProps {
	onChange: (value: string) => void
}

export const NavList=({ onChange }: SearchControlProps)=>{

    const debounce = _.debounce((event: React.ChangeEvent<HTMLInputElement>) => onChange( event?.target?.value), 300)

return(
    <input placeholder='Search...' onChange={(event) => debounce(event)} className={navListStyle.navList__search} type="search" name="search" id="search" />
)
}