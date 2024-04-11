import { useParams } from 'react-router-dom'

export default function UserDetail(){
    const params = useParams();

    return(
        <div>
            {params.id}
        </div>
    )
}