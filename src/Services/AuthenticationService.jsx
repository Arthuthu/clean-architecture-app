export default async function Authenticate(request){
    const pathname = new URL(request.url).pathname
    const token = localStorage.getItem('token');
    if(token == null)
    {
        return `/login?redirect=${pathname}`;
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