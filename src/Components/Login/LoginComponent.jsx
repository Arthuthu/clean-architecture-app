import React from 'react';
import './login.css';
import LoginService from '../../Services/LoginService'
import { Form, redirect } from 'react-router-dom'

export async function action({ request }) {
    try {
        const formData = await request.formData();
        const user = {email: formData.get("email"), password: formData.get("password")}
    
        const loginResponse = await LoginService(user);
        localStorage.setItem('token', loginResponse.data.token);
        localStorage.setItem('expiration', loginResponse.data.expiration);
        return redirect('/')
    }
    catch {
        console.log('Error');
    }

    return null;
}

export default function Login() {
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
        </>
    )
}