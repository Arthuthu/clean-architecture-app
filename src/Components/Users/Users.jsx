import { Suspense } from 'react'
import GetAllUsers from '../../Services/UserService';
import { Await, useLoaderData } from 'react-router-dom';

export async function loader(){
  const users = GetAllUsers();
  return users;
}

export default function Users(){
  const userList = useLoaderData();

  return(
    <>
      <div className='users-title'>Users</div>
      <ul>
      {userList.map(user => (
          <li key={user.id}>
          <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
      ))}
      </ul>
    </>
  )
}