import './shared.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
    <>
        <header>
            <div>
                <NavLink to="/" className={({isActive}) => isActive ? "my-link" : "logo"}>Início</NavLink>
            </div>
            <div>
                <NavLink to="/login" className={({isActive}) => isActive ? "my-link" : "not-selected"}>Login</NavLink>
                <NavLink to="/users" className={({isActive}) => isActive ? "my-link" : "not-selected"}>Usuários</NavLink>
            </div>
        </header>
    </>
    )
}
