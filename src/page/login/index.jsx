import React from "react";

import logo from '../../drawble/abacaxiBlack.png'

export default function Login() {

    return (
        <div className="content-login">
            <div className="card-login">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <form className="content">
                    <span className="input-box">
                        <label htmlFor="user">USER:</label>
                        <input type="text" id="user" />
                    </span>

                    <span className="input-box">
                        <label htmlFor="senha">SENHA:</label>
                        <input type="password" id="senha" />
                    </span>

                    <p className="error"></p>

                    <input type="submit" value='ENTRAR' className="bt"/>
                </form>
            </div>
        </div>
    )
}