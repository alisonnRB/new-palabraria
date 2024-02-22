import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from '../../drawble/abacaxiBlack.png';

export default function Warning() {
    const navigate = useNavigate();

    return (
        <div className="content-warning">
            <div className="box">

                <span className="logo-box">
                    <div className="circle-logo">
                        <img src={Logo} alt="" className="logo"/>
                    </div>
                </span>

                <span className="text-box">
                    <p className="message">palavra cadastrada com sucesso</p>
                    <p className="quest">Como deseja prosseguir?</p>
                </span>
                
                <span className="button-box">
                    <button className="bt" onClick={()=>{navigate('/')}}>Voltar a pagina inicial</button>
                    <button className="bt" onClick={()=>{window.location.reload()}}>Cadastrar uma nova palavra</button>
                </span>
            </div>
        </div>
    );
}