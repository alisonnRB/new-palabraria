import React, {useState} from "react";
import Header from "../../components/header";
import { Routes, Route } from 'react-router-dom';

import Home from './home/index';
import Search from "../search";

export default function HomePage () {
    const [busca, setBusca] = useState('');
    console.log(busca)

    return(
        <div className="Home">
            <Header busca={busca} setBusca={setBusca}/>

            <div className="content-page"> 
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Busca" element={<Search busca={busca}/>}/>
                </Routes>
            </div>
        </div>
    );
}