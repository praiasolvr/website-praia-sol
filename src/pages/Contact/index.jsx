import './style.css'

import TrabalheConoscoIcon from '../../assets/iconeTrabalheConosco.svg'

export default function Contact() {
    return (
        <div>
            <h1 className='titulo'>TRABALHE CONOSCO</h1>

            <div className="containerTrabalheConosco">
                <div className='card-trabalhe-conosco'>
                    <img src={TrabalheConoscoIcon} alt="icone trabalhe conosco" />
                    <strong>Envie seu currículo para o email:<br />rh@viacaopraiasol.com.br</strong>
                </div>
            </div>
        </div>
    )
}