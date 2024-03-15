import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import logo from '../../drawble/abacaxiWhite.png';
import cancel from '../../drawble/cancelar.png';
import lupa from '../../drawble/lupa.png';
import config from '../../drawble/configuracoes.png';
import auth from '../../drawble/confirme-login.png';


export default function Header(props) {
    const navigate = useNavigate();
    const search = useRef(null);

    const [configuration, setConfigaration] = useState(false);
    const [animationConfig, setAnimationConfig] = useState(false);

    const [searchOpen, setSearchOpen] = useState(false);
    const [animationSearch, setAnimationSearch] = useState(false);

    const [login, setLogin] = useState(false);
    const [tipo, setTipo] = useState('');
    const [user, setUser] = useState('');

    const handleClose = () => {
        setAnimationConfig(true);

        const timeoutId = setTimeout(() => {
            setAnimationConfig(false);
            setConfigaration(false);
            clearTimeout(timeoutId);
        }, 300);
    };

    const handleCloseSearch = () => {
        setAnimationSearch(true)
        navigate('/');

        const timeoutId = setTimeout(() => {
            setAnimationSearch(false);
            setSearchOpen(false);
            clearTimeout(timeoutId);
        }, 500);
    };

    const Authenticar = async (token) => {
        try {
            const response = await axios.post('http://localhost/src/controls/login.php', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.ok) {
                setLogin(true);
                setTipo(response.data.response.tipo);
                setUser(response.data.response.user);
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            Authenticar(token);
        }
    }, [])

    useEffect(() => {
        search.current.focus();
    }, [searchOpen])

    return (
        <header className="header">

            {login ?
                <span className="login-circle">
                    <img src={auth} alt="logado" />
                    <p>bem-vindo</p>
                </span> : null}


            <img src={config} alt="configurações" className={`config ${searchOpen ? 'close' : null}`} onClick={() => { setConfigaration(true) }} />

            <div className={`content-logo ${searchOpen ? 'open' : null} ${animationSearch ? 'closed' : null}`} onClick={searchOpen ? () => { handleCloseSearch() } : null}><img src={searchOpen ? cancel : logo} alt="logotipo palabraria" className={`logo ${searchOpen ? 'close' : null}`} /></div>

            <div className={`content-search ${searchOpen ? 'open' : null} ${animationSearch ? 'close' : null}`} onClick={!searchOpen ? () => { setSearchOpen(true); navigate('/Busca') } : null}>
                <input ref={search} value={props.busca} onChange={(e) => { props.setBusca(e.target.value) }} type="text" className={`search ${searchOpen ? 'open' : null} ${animationSearch ? 'close' : null}`} />
                <img src={lupa} alt="pesquisa" className={`lupa ${searchOpen ? 'open' : null}`} />
            </div>


            {configuration ?
                <div className="content-aba-config" onClick={() => { handleClose() }}>
                    <nav className={`aba-config ${animationConfig ? 'open' : null}`} onClick={(e) => { e.stopPropagation() }}>
                        <Link to='/Login'><p className="rote">LOGIN</p></Link>
                        {login ? <Link to='/User'><p className="rote">USUARIOS</p></Link> : null}
                        {login ? <Link to='/Cadastro-palavra'><p className="rote">CADASTRAR PALAVRAS</p></Link> : null}
                        <Link ><p className="rote">REQUIRIR UM LOGIN</p></Link>
                        {tipo != 'instituicao' && login ? <Link to='/Moder'><p className="rote">MODERAÇÃO</p></Link> : null}
                        {login ? <Link ><p className="rote" onClick={() => { sessionStorage.clear(); localStorage.clear(); window.location.reload() }}>LOGOUT</p></Link> : null}
                    </nav>
                </div>
                : null}
        </header>
    );
}