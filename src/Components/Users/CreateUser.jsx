import { CreateUserService } from "../../Services/UserService"
import { Form } from 'react-router-dom'

export async function action({ request }) {
    const formData = await request.formData();

    const formName = formData.get("name");
    const formEmail = formData.get("email");
    const formPassword = formData.get("password");

    const formUser = { name: formName, email: formEmail, password: formPassword }

    const response = await CreateUserService(formUser)
    console.log(response);
}

export default function CreateUser() {
    return(
        <>
            <Form className="create-user-form">
                <div className="create-user-form-label">Adicionando usuário</div>
                <input className='user-form-input' name="name" placeholder="Nome"/>
                <input className='user-form-input' type="email" name="email" placeholder="Email" />
                <input className='user-form-input' type="password" name="password" placeholder="Senha" />
                <div className="create-user-form-button-div">
                    <button className="create-user-button" onClick={ action }>Salvar</button>
                </div>
            </Form> 
        </>
    )
}