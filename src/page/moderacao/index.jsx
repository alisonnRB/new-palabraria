import React, {useState, useEffect} from "react";

import Header from "./header";
import CardWord from "../../components/cardWord/index"


export default function Moder(){
    const [busca, setBusca] = useState('');
    const [bd, setBd] = useState('');

    return(
        <div className="content-moder">
            <Header busca={busca} setBusca={setBusca} bd={bd} setBd={setBd}/>

            <div className="search-box">
                <CardWord />
            </div>
        </div>
    );
}