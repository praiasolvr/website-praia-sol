import './style.css'

import fotoGar from '../../assets/fotoGar.png'
import LogoMissaoVisaoValores from '../../assets/logo-missao-visao-valores.png'

export default function Us() {
    return (
        <div>
            <h1 className='titulo'>SOBRE A VIAÇÃO PRAIA SOL</h1>

            <h2 className='subtitulo'>CONHEÇA A <br />VIAÇÃO PRAIA SOL</h2>

            <div className='container-empresa'>
                <img src={fotoGar} alt='foto da garagem' />
                <p>A VIAÇÃO PRAIA SOL NASCEU DA VIAÇÃO ALVORADA, QUANDO ESTA QUE OPERAVA NO TRANSPORTE RODOVIÁRIO DE PASSAGEIROS, DECIDIU OPERAR TAMBÉM NO TRANSPORTE COLETIVO INTERMUNICIPAL DA GRANDE VITÓRIA.  ASSIM, FOI CRIADA A VIAÇÃO PRAIA SOL, VOLTADA INTEIRAMENTE AO TRANSPORTE COLETIVO INTERMUNICIPAL DE PASSAGEIROS EM 01 DE JANEIRO 1989.
                    <br /><br />
                    TRABALHAMOS PARA OFERECER SEGURANÇA, CONFORTO, PONTUALIDADE E CORDIALIDADE NO TRANSPORTE COLETIVO DE PASSAGEIROS</p>
            </div>

            <div className="containerQuemSomos">
                <img src={LogoMissaoVisaoValores} alt="" />
                <p>Missão: Promover mobilidade urbana de qualidade com segurança, pontualidade e bom atendimento.</p>
                <p>Visão: Reconhecimento público, privado e governamental pela excência no transporte de passageiros.</p>
                <p>Valores: Profissionalismo, Ética, Respeito Compromisso com a qualidade, Valorização do ser humano e Responsabilidade social.</p>
            </div>
        </div>
    )
}