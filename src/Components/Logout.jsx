import { redirect, Navigate, useLoaderData } from 'react-router-dom'

export default function Logout(){
    return (<></>);
}

export function loader() {
    const token = localStorage.getItem('token');
    if(token != null)
    {
        localStorage.removeItem('token');
    }

    const expiration = localStorage.getItem('expiration')
    if(expiration != null)
    {
        localStorage.removeItem('expiration');
    }

    const username = localStorage.getItem('username')
    if(username != null)
    {
        localStorage.removeItem('username');
    }

    return redirect('/login');
}