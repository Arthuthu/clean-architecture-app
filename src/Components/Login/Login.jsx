import React from 'react';
import './login.css';
import LoginService from '../../Services/LoginService'
import { Form, redirect, useActionData, useNavigation, useParams } from 'react-router-dom'

export async function action({ request }) {
    const formData = await request.formData();
    const user = {username: formData.get("username"), password: formData.get("password")}
    
    const loginResponse = await LoginService(user);
    if(loginResponse.status === 404)
    {
        return `${loginResponse.message}`;
    }

    localStorage.setItem('token', loginResponse.data.token);
    localStorage.setItem('expiration', loginResponse.data.expiration);
    localStorage.setItem('id', loginResponse.data.id);
    localStorage.setItem('reload', 'yes');

    const pathname = new URL(request.url).searchParams.get("redirect") || "/";
    return redirect(pathname);
}

export function loader() {
    const reload = localStorage.getItem('reload');
    if(reload != null)
    {
        localStorage.removeItem('reload');
        window.location.reload();
    }

    const token = localStorage.getItem('token');
    if(token != null)
    {
        return redirect('/');
    }

    return null;
}

export default function Login() {
    const error = useActionData();
    const navigation = useNavigation();

    return(
        <>
            <Form className='form' method='post'>
                <div className='form-label'>Login</div>
                <input className='form-input' type='username' name="username" placeholder="Usuario" />
                <input className='form-input' type="password" name="password" placeholder="Senha" />
                <div className='form-button-div'>
                    <button className="create-user-button" disabled={navigation.state === 'submitting'}>
                        {navigation.state === 'submitting' ? 'Entrando...' : 'Entrar'}
                    </button>
                </div>
            </Form> 
            {error && <h3 className="login-error-message">{error}</h3>}
        </>
    )
}