import { Suspense } from 'react';
import GetAllUsersService from '../../Services/UserService';
import { Await, useLoaderData, Link } from 'react-router-dom';
import './users.css';

export async function loader(){
  //Verificar se usuario esta logado
  const users = await GetAllUsersService();
  return users;
}

export default function Users(){
  const userList = useLoaderData();

  return(
    <>
      <div className='users-title'>Usuários</div>
      <div className='button-div'>
        <Link className='create-user-button' to="../user/create">Criar</Link>
      </div>
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