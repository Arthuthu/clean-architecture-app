import React from 'react';
import './login.css';
import LoginService from '../../Services/LoginService'
import { Form, redirect, useLoaderData } from 'react-router-dom'

export async function action({ request }) {
    const formData = await request.formData();
    const user = {email: formData.get("email"), password: formData.get("password")}

    const loginResponse = await LoginService(user);
    if (loginResponse.status === 404)
    {
        return redirect(`/login?message=${loginResponse.message}`);
    }

    localStorage.setItem('token', loginResponse.data.token);
    localStorage.setItem('expiration', loginResponse.data.expiration);
    localStorage.setItem('reload', 'yes');
    return redirect('/');
}

export function loader({ request }) {
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

    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const message = useLoaderData()

    return(
        <>
            <Form className='form' method='post'>
                <div className='form-label'>Login</div>
                <input className='form-input' type="email" name="email" placeholder="Email" />
                <input className='form-input' type="password" name="password" placeholder="Senha" />
                <div className='form-button-div'>
                    <button className="create-user-button">Entrar</button>
                </div>
            </Form> 
            {message && <h3 className="login-error-message">{message}</h3>}
        </>
    )
}