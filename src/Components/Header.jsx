import '../site.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return(
    <>
        <header>
            <NavLink to="/" className={({isActive}) => isActive ? "my-link" : "logo"}>Home</NavLink>
            <NavLink to="/users" className={({isActive}) => isActive ? "my-link" : ""}>Users</NavLink>
        </header>
    </>
    )
}
