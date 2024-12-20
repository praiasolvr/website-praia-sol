import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import News from "../pages/News";
import DatailsNews from "../pages/DetailsNews";

import Us from "../pages/Us";


import Singin from "../pages/Sigin";

export default function RouterApp(){
    return(
        
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sigin" element={<Singin/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/news/:id" element={<DatailsNews/>} />
                <Route path="/us" element={<Us/>} />
            </Routes>

    )
}