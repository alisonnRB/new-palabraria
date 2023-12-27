import React, { useState } from "react";

import logo from '../../drawble/abacaxiWhite.png';
import lupa from '../../drawble/lupa.png';
import config from '../../drawble/configuracoes.png';
import { Link } from "react-router-dom";

export default function Header() {
    const [configuration, setConfigaration] = useState(false);
    const [animationConfig, setAnimationConfig] = useState(false);

    const handleClose = () => {
        setAnimationConfig(true);
    
        const timeoutId = setTimeout(() => {
            setAnimationConfig(false);
            setConfigaration(false);
            clearTimeout(timeoutId);
        }, 300);
    };

    return (
        <header className="header">
            <img src={config} alt="configurações" className="config" onClick={()=>{setConfigaration(true)}}/>

            <img src={logo} alt="logotipo palabraria" className="logo" />

            <div className="content-search">
                <input type="text" className="search" />
                <img src={lupa} alt="pesquisa" className="lupa" />
            </div>


            {configuration ?
                <div className="content-aba-config" onClick={()=>{handleClose()}}> 
                    <nav className={`aba-config ${animationConfig ? 'open' : ''}`} onClick={(e)=>{e.stopPropagation()}}>
                        <Link ><p className="rote">LOGIN</p></Link>
                        <Link ><p className="rote">CADASTRAR PALAVRAS</p></Link>
                        <Link ><p className="rote">REQUIRIR UM LOGIN</p></Link>
                        <Link ><p className="rote">MODERAÇÃO</p></Link>
                        <Link ><p className="rote">LOGOUT</p></Link>
                    </nav>
                </div>
                : null}
        </header>
    );
}