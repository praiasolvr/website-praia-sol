import ButtonLinkedin from '../../assets/ButtonLinkedin.png'
import ButtonInstagram from '../../assets/ButtonInstagram.png'

import { BrowserRouter } from 'react-router-dom'

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='container'>
            
            <p>Acompanhe nossas redes sociais</p>
            
            <Link to="https://br.linkedin.com/company/via%C3%A7%C3%A3o-praia-sol"><img src={ButtonLinkedin} alt="Image do botao do instagram"></img></Link>
            <Link to="https://www.instagram.com/praiasolevereda/"><img src={ButtonInstagram} alt="Image do botao do instagram"></img></Link>
            
        </div>
    )
}