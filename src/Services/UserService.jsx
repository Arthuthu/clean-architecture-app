import axios from 'axios';

const cleanArchitectureUrl = 'https://localhost:7115';
const usersEndpoint = 'v1/user'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydEBnbWFpbC5jb20iLCJtZXVUb2tlbiI6InRva2VuIiwianRpIjoiNzdkNWY2NjktM2Y5NS00ZWM0LTgwODItMjdhZTVlNzFhZTdlIiwiZXhwIjoxNzE0MTYxOTYxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDozMDAwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCJ9.1cVBm-9kQSuStw8SnssHSGBpKfq-m8Ro0dTaBxGggEo';
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
    const hardCodedUser = {
        name: 'HardCoded',
        email: 'hardcoded@gmail.com',
        password: 'hardCodedPassword123'
    }

    try {
        const response = await axios.post(`${cleanArchitectureUrl}/${usersEndpoint}/create`, {hardCodedUser}, { headers });
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