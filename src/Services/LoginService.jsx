import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const loginEndpoint = 'v1/login';


export async function CreateUserService(user){
    try {
        const response = await axios.post(`${cleanArchitectureUrl}/${loginEndpoint}`, {user});
        return response.data;
    }
    catch {
        console.error('Ocorreu um erro ao realizer o Login', error);
        throw error;
    }
}
