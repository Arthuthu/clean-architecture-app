import { CreateTreinoService } from "../../Services/TreinoService"
import { Form } from 'react-router-dom'

export async function action({ request }) {
    try {
        const formData = await request.formData();
        const formName = formData.get("name");
        const formTreino = { name: formName };
        const response = await CreateTreinoService(formTreino);
        console.log(response);
    } catch (error) {
        console.error("Error in action:", error);
    }
}

export default function CreateTreino() {
    return(
        <>
            <Form className="create-treino-form">
                <div className="create-treino-form-label">Adicionando treino</div>
                <input className='treino-form-input' name="name" placeholder="Nome"/>
                <div className="create-treino-form-button-div">
                    <button className="create-user-button" onClick={ action }>Salvar</button>
                </div>
            </Form> 
        </>
    )
}