
import { Link } from 'react-router-dom'
import Foto from '../../assets/imagecarrocelnoticia.jpg'

import './style.css'

export default function Home() {
    return (
        <div>
            <div className='container-home'>
                <img className='foto-perfil' src={Foto} />
                <Link to="/news"><p>Todas as notícias</p></Link>
            </div>
        </div>
    )
}