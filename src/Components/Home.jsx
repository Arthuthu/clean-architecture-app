import { redirect } from 'react-router-dom';
import '../site.css';

export default function Home() {
  return(
    <>
      <div className="homepage-div">
        <h2>This is the home page</h2>
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

  return null;
}