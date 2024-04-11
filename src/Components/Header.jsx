import '../site.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
    <>
        <header>
            <div>
                <Link className='logo' to="/">Home</Link>
            </div>
            <div>
                Users
            </div>
        </header>
    </>
    )
}
