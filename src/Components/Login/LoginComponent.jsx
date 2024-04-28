import React from 'react';
import './login.css';
import LoginService from '../../Services/LoginService'
import { Form } from 'react-router-dom'

export async function action({ request }) {
    const formData = await request.formData();
    const user = {email: formData.get("email"), password: formData.get("password")}
    const loginResponse = await LoginService(user);
    console.log(loginResponse);
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