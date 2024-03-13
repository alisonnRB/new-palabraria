import React from "react";

import logo from "../../../drawble/abacaxiWhite.png";

export default function Alrigth(props) {
    return (
        <div className="content-rigth">
            <div className="box-rigth">
                <span className="circle-logo">
                    <img src={logo} />
                </span>

                <div className="message-content">
                    <p>Alteração salva com sucesso !!</p>
                </div>

                <div className="bt-content">
                    <button className="bt" onClick={()=>{props.setIsSave(false)}}>OK</button>
                </div>
            </div>
        </div>
    );
}