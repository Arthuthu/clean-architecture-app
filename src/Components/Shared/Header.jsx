import '../../site.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
    <>
        <header>
            <NavLink to="/" className={({isActive}) => isActive ? "my-link" : "logo"}>Início</NavLink>
            <NavLink to="/users" className={({isActive}) => isActive ? "my-link" : ""}>Usuários</NavLink>
        </header>
    </>
    )
}
