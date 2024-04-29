import { redirect } from 'react-router-dom'

export default function Logout(){
    return(
        <>
        </>
    )
}

export function loader() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.setItem('reload', 'yes');

    return redirect("/login");
}