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
        console.error('Error fetching users:', error);
        throw error;
    }
}