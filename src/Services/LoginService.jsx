import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const loginEndpoint = 'v1/login';


export default async function LoginService(user){
    const response = await axios.post(`${cleanArchitectureUrl}/${loginEndpoint}`,
    {email: user.email, password: user.password})
    .catch(function (error) {
        const errorInfo = {status: error.response.status, message: error.response.data}
        return errorInfo;
      });

    return response;
}
