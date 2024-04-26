import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const usersEndpoint = 'v1/user';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydEBnbWFpbC5jb20iLCJtZXVUb2tlbiI6InRva2VuIiwianRpIjoiYmJiODY3ZjMtYTc4MS00NWYxLTljZmUtMTcwZmQ5MmQ0Yzk5IiwiZXhwIjoxNzE0MjQ4ODkwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDozMDAwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCJ9.yYjis9360G4SUnA4pSdNwNh7g4mJ6Rx3oxyakwv7-mA';
const headers = { 'Authorization': `Bearer ${token}` }; 

export default async function GetAllUsersService() {
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${usersEndpoint}/get`, { headers });
        return response.data;
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
}

export async function GetUserByIdService(id){
    try {
        const response = await axios.get(`${cleanArchitectureUrl}/${usersEndpoint}/get/${id}`, { headers });
        return response.data;
    } 
    catch {
        console.error('Error in finding the user', error);
        throw error;
    }
}

export async function CreateUserService(user){
    // const hardCodedUser = {
    //     name: 'HardCoded',
    //     email: 'hardcoded@gmail.com',
    //     password: 'hardCodedPassword123'
    // }

    try {
        const response = await axios.post(`${cleanArchitectureUrl}/${usersEndpoint}/create`, {user}, { headers });
        return response.data;
    }
    catch {
        console.error('Error while trying to create the user', error);
        throw error;
    }
}

export async function DeleteUserService(id){
    try {
        const response = await axios.delete(`${cleanArchitectureUrl}/${usersEndpoint}/delete/${id}`, { headers })
        return response.data;
    } 
    catch {
        console.error('Error while trying to delete the user', error);
        throw error;
    }
}

export async function UpdateUserService(userId, user) {
    try {
        const response = await axios.put(`${cleanArchitectureUrl}/${usersEndpoint}/update/${userId}, ${ user }. ${ headers }`);
        return response.data;
    }
    catch {
        console.error('Error while trying to update the user', error);
        throw error;
    }
}