import './App.css'

import RouterApp from './routes/RouterApp'
import Header from './components/Header'

import ImageUserIcon from './assets/fotousericon.svg'
import { Link } from 'react-router-dom'


import Footer from './components/Footer'

import { BrowserRouter } from "react-router-dom";

const FaixaTopo = () => {
  return (
    <div className='faixa-topo-fixa'>
      <div className='menu-login'>
        <img className='iconLogin' src={ImageUserIcon} alt="" />
        <div><a className='loginbutton' href='/sigin'>Login / Cadastre-se</a></div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FaixaTopo />
        <Header />
        <RouterApp />
        <Footer />
      </BrowserRouter>
    </div>
  )
}