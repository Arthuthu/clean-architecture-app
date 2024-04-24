import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const usersEndpoint = 'v1/user'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydEBnbWFpbC5jb20iLCJtZXVUb2tlbiI6InRva2VuIiwianRpIjoiYjRkNmZkM2YtNGM4Zi00ZjIxLTllZDQtMmZlM2U5N2ExNDMxIiwiZXhwIjoxNzE0MDAyNjQwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDozMDAwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCJ9.5cdc56ulh-i5CxsxRPvRr4e6W1DbHZ3RWLdn3vuz738'
const headers = { 'Authorization': `Bearer ${token}` }; 

export default async function GetAllUsers() {
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${usersEndpoint}/get`, { headers });
        return response.data;
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
}

export async function GetUserById(id){
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${usersEndpoint}/get/${id}`, { headers });
        return response.data;
    } 
    catch {
        console.error('Error in finding the user', error);
        throw error;
    }
}

export async function CreateUser(user){
    try {
        const response = await axios.post(`${cleanArchitectureUrl}/${usersEndpoint}/create`, {user}, { headers });
        return response.data;
    }
    catch {
        console.error('Error while trying to create the user', error);
        throw error;
    }
}

export async function DeleteUser(id){
    try {
        const response = await axios.delete(`${cleanArchitectureUrl}/${usersEndpoint}/delete/${id}`, { headers })
        return response.data;
    } 
    catch {
        console.error('Error while trying to delete the user', error);
        throw error;
    }
}

export async function UpdateUser(userId, user) {
    try {
        const response = await axios.put(`${cleanArchitectureUrl}/${usersEndpoint}/update/${userId}, ${ user }. ${ headers }`);
        return response.data;
    }
    catch {
        console.error('Error while trying to update the user', error);
        throw error;
    }
}