export default async function Authenticate(){
    const token = localStorage.getItem('token');
    if(token == null)
    {
        return '/login';
    }

    const expiration = localStorage.getItem('expiration');
    const expirationDate = new Date(expiration);
    const currentDate = new Date();
    
    if (expirationDate < currentDate)
    {
        return '/logout'
    }

    return null;
}