import './shared.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');

    return(
    <>
        <header>
            <div>
                <NavLink to="/" className={({isActive}) => isActive ? "my-link" : "logo"}>Início</NavLink>
            </div>
            <div>
                {
                    (token == null) &&  (expiration == null) &&
                    <NavLink to="/login" className={({isActive}) => isActive ? "my-link" : "not-selected"}>Entrar</NavLink>
                }
                {
                    (token != null) &&  (expiration != null) &&
                    <NavLink to="/logout" className={({isActive}) => isActive ? "my-link" : "not-selected"}>Sair</NavLink>
                }
                <NavLink to="/users" className={({isActive}) => isActive ? "my-link" : "not-selected"}>Usuários</NavLink>
            </div>
        </header>
    </>
    )
}
