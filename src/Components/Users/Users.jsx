import { Suspense } from 'react';
import GetAllUsers from '../../Services/UserService';
import { Await, useLoaderData } from 'react-router-dom';
import './users.css';

export async function loader(){
  const users = GetAllUsers();
  return users;
}

export default function Users(){
  const userList = useLoaderData();

  return(
    <>
      <div className='users-title'>Users</div>
      {userList.map(user => (
        <div key={user.id} className='users-list'>
          <div className='users-list-row'>
            <div className='users-list-label'>Nome</div>
            <div className='user-name'>{user.name}</div>
          </div>
          <div className='users-list-row'>
            <div className='users-list-label'>Email</div>
            <div className='user-email'>{user.email}</div>
          </div>
        </div>
        ))}
    </>
  )
}