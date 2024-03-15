import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from '../../drawble/abacaxiBlack.png'

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');


    const Authenticar = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://10.0.0.183/src/controls/login.php', {
                user: user,
                senha: senha,
            });
            if (!response.data.ok) {
                setErro(response.data.response);
            }else{
                sessionStorage.setItem('token', response.data.response);
                navigate('/');
            }
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    return (
        <div className="content-login">
            <div className="card-login">
                <div className="logo">
                    <img src={logo} alt="logo do projeto palabraria" />
                </div>
                <form className="content" onSubmit={(e) => { Authenticar(e) }}>
                    <span className="input-box">
                        <label htmlFor="user">USER:</label>
                        <input type="text" id="user" value={user} onChange={(e) => { setUser(e.target.value) }} />
                    </span>

                    <span className="input-box">
                        <label htmlFor="senha">SENHA:</label>
                        <input type="password" id="senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                    </span>

                    <p className="error">{erro}</p>

                    <input type="submit" value='ENTRAR' className="bt" />
                </form>
            </div>
        </div>
    )
}