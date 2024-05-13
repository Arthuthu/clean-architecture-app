import axios from 'axios';

const webSiteUrl = 'https://localhost:7290';
const treinoEndpoint = 'v1/treino';
const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` }; 

export default async function GetAllTreinosService() {
    try {
        const response = await axios.get(`${webSiteUrl}/${treinoEndpoint}/get`, { headers });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error getting all treinos:', error);
        throw error;
    }
}

export async function GetTreinoByIdService(id){
    try {
        const response = await axios.get(`${webSiteUrl}/${treinoEndpoint}/get/${id}`, { headers });
        return response.data;
    } 
    catch {
        console.error('Error in finding the treino', error);
        throw error;
    }
}

export async function CreateTreinoService(treino){
    try {
        const response = await axios.post(`${webSiteUrl}/${treinoEndpoint}/create`, {treino}, { headers });
        return response.data;
    }
    catch {
        console.error('Error while trying to create the treino', error);
        throw error;
    }
}

export async function DeleteTreinoService(id){
    try {
        const response = await axios.delete(`${webSiteUrl}/${treinoEndpoint}/delete/${id}`, { headers })
        return response.data;
    } 
    catch {
        console.error('Error while trying to delete the treino', error);
        throw error;
    }
}

export async function UpdateTreinoService(treinoId, treino) {
    try {
        const response = await axios.put(`${webSiteUrl}/${treinoEndpoint}/update/${treinoId}, ${ treino }. ${ headers }`);
        return response.data;
    }
    catch {
        console.error('Error while trying to update the treino', error);
        throw error;
    }
}