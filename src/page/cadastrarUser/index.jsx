import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from '../../drawble/abacaxiBlack.png'

export default function CadastrarUser() {
    const navigate = useNavigate();

    const [permitido, setPermitido] = useState(false);

    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [permissao, setPermissao] = useState('instituicao');
    const [erro, setErro] = useState('');

    const Verify_Auth = async (token) => {
        try {
            const response = await axios.post('http://localhost/src/controls/login.php', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.ok) {
                setPermitido(true);
            } else {
                navigate('/');
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
            navigate('/');
        }
    };


    const Cadastrar = async (event) => {
        event.preventDefault();
        const token = sessionStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost/src/controls/user.php', {
                user: user,
                senha: senha,
                permition: permissao
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (!response.data.ok) {
                setErro(response.data.response);
            } else {
                navigate(-1);
            }
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    useLayoutEffect(() => {
        const token = sessionStorage.getItem('token');
        Verify_Auth(token);
    }, []);


    return (
        <div className="content-login">
            {permitido ? <div className="card-login">
                <div className="logo">
                    <img src={logo} alt="logo do projeto palabraria" />
                </div>

                <span className="title">
                    <p>CADASTRAR NOVO USUÁRIO</p>
                </span>

                <form className="content cad" onSubmit={(e) => { Cadastrar(e) }}>
                    <span className="input-box">
                        <input type="text" id="user" value={user} onChange={(e) => { setUser(e.target.value) }} placeholder="User..." />
                    </span>

                    <span className="input-box">
                        <input type="password" id="senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} placeholder="Senha..." />
                    </span>

                    <select className="selection" value={permissao} onChange={(e) => { setPermissao(e.target.value) }}>
                        <option value="" selected>PERMISSÃO</option>
                        <option value="admin">ADMIN</option>
                        <option value="moderador">MODERADOR</option>
                        <option value="instituicao">INSTITUIÇÂO</option>
                    </select>

                    <p className="error">{erro}</p>

                    <input type="submit" value='CADASTRAR' className="bt cad" />
                </form>
            </div> : null}
        </div>
    )
}