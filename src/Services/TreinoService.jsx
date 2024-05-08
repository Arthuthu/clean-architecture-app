import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const treinoEndpoint = 'v1/treino';
const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` }; 

export default async function GetAllTreinosService() {
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${treinoEndpoint}/get`, { headers });
        return response.data;
    } catch (error) {
        console.error('Error getting all treinos:', error);
        throw error;
    }
}

export async function GetTreinoByIdService(id){
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${treinoEndpoint}/get/${id}`, { headers });
        return response.data;
    } 
    catch {
        console.error('Error in finding the treino', error);
        throw error;
    }
}

export async function CreateTreinoService(treino){
    try {
        const response = await axios.post(`${cleanArchitectureUrl}/${treinoEndpoint}/create`, {treino}, { headers });
        return response.data;
    }
    catch {
        console.error('Error while trying to create the treino', error);
        throw error;
    }
}

export async function DeleteTreinoService(id){
    try {
        const response = await axios.delete(`${cleanArchitectureUrl}/${treinoEndpoint}/delete/${id}`, { headers })
        return response.data;
    } 
    catch {
        console.error('Error while trying to delete the treino', error);
        throw error;
    }
}

export async function UpdateTreinoService(treinoId, treino) {
    try {
        const response = await axios.put(`${cleanArchitectureUrl}/${usersEndpoint}/update/${treinoId}, ${ treino }. ${ headers }`);
        return response.data;
    }
    catch {
        console.error('Error while trying to update the treino', error);
        throw error;
    }
}