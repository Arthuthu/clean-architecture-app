import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const exerciciooEndpoint = 'v1/exercicio';
const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` }; 

export default async function GetAllExerciciosService() {
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${exerciciooEndpoint}/get`, { headers });
        return response.data;
    } catch (error) {
        console.error('Error getting all exercicios:', error);
        throw error;
    }
}

export async function GetExercicioByIdService(id){
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${exerciciooEndpoint}/get/${id}`, { headers });
        return response.data;
    } 
    catch {
        console.error('Error in finding the exercicio', error);
        throw error;
    }
}

export async function CreateExercicioService(exercicio){
    try {
        const response = await axios.post(`${cleanArchitectureUrl}/${exerciciooEndpoint}/create`, {exercicio}, { headers });
        return response.data;
    }
    catch {
        console.error('Error while trying to create the exercicio', error);
        throw error;
    }
}

export async function DeleteExercicioService(id){
    try {
        const response = await axios.delete(`${cleanArchitectureUrl}/${exerciciooEndpoint}/delete/${id}`, { headers })
        return response.data;
    } 
    catch {
        console.error('Error while trying to delete the exercicio', error);
        throw error;
    }
}

export async function UpdateExercicioService(exercicioId, exercicio) {
    try {
        const response = await axios.put(`${cleanArchitectureUrl}/${usersEndpoint}/update/${exercicioId}, ${ exercicio }. ${ headers }`);
        return response.data;
    }
    catch {
        console.error('Error while trying to update the exercicio', error);
        throw error;
    }
}