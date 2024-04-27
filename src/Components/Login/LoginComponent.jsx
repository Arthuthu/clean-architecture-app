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
            <Form>
                <div>Fazer login</div>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Senha" />
                <div>
                    <button className="create-user-button" onClick={ action }>Entrar</button>
                </div>
            </Form> 
        </>
    )
}