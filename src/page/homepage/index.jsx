import React from "react";
import Header from "../../components/header";
import { Routes, Route } from 'react-router-dom';

import Home from './home/index';
import Search from "../search";

export default function HomePage () {

    return(
        <div className="Home">
            <Header />

            <div className="content-page"> 
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Busca" element={<Search />}/>
                </Routes>
            </div>
        </div>
    );
}