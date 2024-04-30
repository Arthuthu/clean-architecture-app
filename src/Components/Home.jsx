import { redirect, useLoaderData } from 'react-router-dom';
import '../site.css';

export default function Home() {
  const username = useLoaderData();

  return(
    <>
      <div className="homepage-div">
        {username && 
        <h2>{`Ola ${username} seja bem vindo.`}</h2>}
      </div>
    </>
  )
}

export function loader() {
  const reload = localStorage.getItem('reload');

  if(reload != null)
  {
    localStorage.removeItem('reload');
    window.location.reload();
  }

  const username = localStorage.getItem('username');
  return username;
}