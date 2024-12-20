import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { use } from 'react'

import ButtonLinkedin from '../../assets/ButtonLinkedin.png'
import ButtonInstagram from '../../assets/ButtonInstagram.png'

import CalendarIcon from '../../assets/calendarIcon.jpg'

export default function DatailsNews() {

    return (
        <div>
            <h1 className='titulo'>Viação praia sol recebe as suas primeiras unidades do novo mascarello granvia 2024</h1>

            <div className='container-data-publicacao'>
                <img src={CalendarIcon} alt="icone calendário" />
                <strong className='subtitulonoticias'>15 de novembro de 2023</strong>
            </div>

            <div className='rodape'>



                <div className='container'>
                    <p>Acompanhe nossas redes sociais</p>
                    <Link to="https://br.linkedin.com/company/via%C3%A7%C3%A3o-praia-sol"><img src={ButtonLinkedin} alt="Image do botao do instagram"></img></Link>
                    <Link to="https://www.instagram.com/praiasolevereda/"><img src={ButtonInstagram} alt="Image do botao do instagram"></img></Link>
                </div>
            </div>
        </div>
    )
}