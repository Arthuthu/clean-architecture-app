import GetAllTreinosService from '../../Services/TreinoService'
import { Suspense } from 'react';
import { Await, useLoaderData, Link, redirect, defer } from 'react-router-dom';
import Authenticate from '../../Services/AuthenticationService';
import './treino.css';
import Loading from '../Shared/Loading';

export default function Treinos(){
    const dataPromise = useLoaderData();

    function renderTreinosElements(treinos) {
      return(
        <>
          <div className='treinos-title'>Seus treinos</div>
          <div className='button-div'>
            <Link className='create-treino-button' to="../treino/create">Adicionar</Link>
          </div>
          {treinos.map(treino => (
            <div key={treino.id} className='treinos-list'>
              <div className='treinos-list-row'>  
                <div className='treinos-list-label'>Nome</div>
                <div className='treino-name'>{treino.nome}</div>
              </div>
            </div>
            ))}
        </>
      )
    }
  
    return(
      <>
        <Suspense fallback={<Loading />}>
          <Await resolve={dataPromise.treinos}>
            { renderTreinosElements }
          </Await>
        </Suspense>
      </>
    )
  }

export async function loader({ request }){
    const authenticationUrl = await Authenticate(request);

    if(authenticationUrl != null)
    {
      return redirect(authenticationUrl);
    }
    const treinos = GetAllTreinosService();
    return defer({ treinos });
  }