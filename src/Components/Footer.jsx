import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <footer>
                <div className="footer-title">
                    Project made by Arthur Geromello
                </div>
                <div className='footer-links'>
                    <Link to="https://github.com/Arthuthu">Github</Link>
                    <Link to="https://www.linkedin.com/in/arthur-geromello-ab44a8159/">Linkedin</Link>
                    <Link to="https://arthurgeromello.netlify.app/">Portfolio</Link>
                </div>
            </footer>
        </>
    )
}