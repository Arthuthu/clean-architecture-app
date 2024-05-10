import GetAllTreinosService from '../../Services/TreinoService'

export default function Treinos(){
    const dataPromise = useLoaderData();
    
    function renderTreinosElements(treinos) {
      return(
        <>
          <div className='users-title'>Seus treinos</div>
          <div className='button-div'>
            <Link className='create-user-button' to="../user/create">Adicionar</Link>
          </div>
          {treinos.map(treino => (
            <div key={treino.id} className='users-list'>
              <div className='users-list-row'>  
                <div className='users-list-label'>Nome</div>
                <div className='user-name'>{user.username}</div>
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
  
    return defer({ treinos: GetAllTreinosService() });
  }