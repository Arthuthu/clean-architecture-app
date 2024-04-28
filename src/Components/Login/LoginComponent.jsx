import React from 'react';
import './login.css';
import LoginService from '../../Services/LoginService'
import { Form } from 'react-router-dom'

export async function action() {
    const loginResponse = await LoginService(user);
    console.log(loginResponse);
}

export default function Login() {
    return(
        <>
            <Form className='form'>
                <div className='form-label'>Login</div>
                <input className='form-input' type="email" name="email" placeholder="Email" />
                <input className='form-input' type="password" name="password" placeholder="Senha" />
                <div className='form-button-div'>
                    <button className="create-user-button" onClick={ action }>Entrar</button>
                </div>
            </Form> 
        </>
    )
}