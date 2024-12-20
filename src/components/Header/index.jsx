import './style.css'


// import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={Logo} alt="" />
                <h1 className='titulo'>VIAÇÃO<br />PRAIA SOL</h1>

                

                <ul className='lista-menu'>
                    <li className='item-lista-menu'><a href="/">INICIO</a></li>
                    <li className='item-lista-menu'><a href="/news">NOTÍCIAS</a></li>
                    <li className='item-lista-menu'><a href="/us">QUEM SOMOS</a></li>
                    <li className='item-lista-menu'><a href="/contact">TRABALHE CONOSCO</a></li>
                </ul>


            </div>



        </header>
    )
}