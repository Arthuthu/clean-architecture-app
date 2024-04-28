import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const loginEndpoint = 'v1/login';


export default async function LoginService(user){
    try {
        const response = await axios.post(`${cleanArchitectureUrl}/${loginEndpoint}`,
        {email: user.email, password: user.password})
        .catch(function (error) {
            console.log(error.toJSON());
        });

        return response;
    }
    catch {
        console.error('Ocorreu um erro ao realizer o Login', error);
        throw error;
    }
}
