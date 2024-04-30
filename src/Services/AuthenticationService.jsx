export default async function Authenticate(){
    const token = localStorage.getItem('token');
    if(token == null)
    {
        return '/login';
    }

    const expiration = localStorage.getItem('expiration');
    const expirationDate = new Date(expiration);
    const currenteDate = new Date();
    
    if (expirationDate < currenteDate)
    {
        return '/logout';
    }

    return null;
}

export function loader({ request }) {
    const reload = localStorage.getItem('reload');

    if(reload != null)
    {
      localStorage.removeItem('reload');
      window.location.reload();
    }

    const token = localStorage.getItem('token');
    if(token != null)
    {
        return redirect('/');
    }

    return new URL(request.url).searchParams.get("message")
}
