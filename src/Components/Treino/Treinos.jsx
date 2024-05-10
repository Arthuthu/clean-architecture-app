import GetAllTreinosService from '../../Services/TreinoService'
import './treino.css';


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
                <div className='treino-name'>{user.username}</div>
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