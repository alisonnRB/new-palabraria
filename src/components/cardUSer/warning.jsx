import React from "react";

import logo from '../../drawble/abacaxiWhite.png';

export default function Warning(props) {
    return (
        <div className="filter-content-warning" onClick={()=>{props.setDell(false)}}>
            <div className="content-box" onClick={(e)=>{e.stopPropagation()}}>
                <span className="logo-content">
                    <img src={logo} alt="logo palabraria" />
                </span>

                <div className="content-msg">
                    <p>Tem certeza que quer excluir o usuario {props.user} ??</p>
                    <p>As informações referentes a esse usuario serão completamente perdidas!!</p>
                </div>

                <div className="content-bt">
                    <button className="bt">EXCLUIR</button>
                    <button className="bt" onClick={()=>{props.setDell(false)}}>CANCELAR</button>
                </div>
            </div>
        </div>
    );
}