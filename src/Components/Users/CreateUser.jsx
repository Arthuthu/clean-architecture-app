import { CreateUserService } from "../../Services/UserService"
import { Form } from 'react-router-dom'

export async function action() {
    console.log('actio log');
}

export default function CreateUser() {
    return(
        <>
            <Form>
                <input name="name" placeholder="Nome"/>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Senha" />
                <div className="create-user-form-button-div">
                    <button className="create-user-form-button">Criar</button>
                </div>
            </Form> 
        </>
    )
}