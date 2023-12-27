import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../drawble/abacaxiWhite.png';
import cancel from '../../drawble/cancelar.png';
import lupa from '../../drawble/lupa.png';
import config from '../../drawble/configuracoes.png';
import { Link } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const search = useRef(null);

    const [configuration, setConfigaration] = useState(false);
    const [animationConfig, setAnimationConfig] = useState(false);

    const [searchOpen, setSearchOpen] = useState(false);
    const [animationSearch, setAnimationSearch] = useState(false);

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
        }, 490);
    };

    useEffect(() => {
        search.current.focus();
    }, [searchOpen])

    return (
        <header className="header">
            <img src={config} alt="configurações" className={`config ${searchOpen ? 'close' : null}`} onClick={() => { setConfigaration(true) }} />

            <div className={`content-logo`} onClick={searchOpen ? () => { handleCloseSearch() } : null}><img src={searchOpen ? cancel : logo} alt="logotipo palabraria" className={`logo ${searchOpen ? 'close' : null}`} /></div>

            <div className={`content-search ${searchOpen ? 'open' : null} ${animationSearch ? 'close' : null}`} onClick={!searchOpen ? () => { setSearchOpen(true); navigate('/Busca') } : null}>
                <input ref={search} type="text" className={`search ${searchOpen ? 'open' : null} ${animationSearch ? 'close' : null}`} />
                <img src={lupa} alt="pesquisa" className={`lupa ${searchOpen ? 'open' : null}`} />
            </div>


            {configuration ?
                <div className="content-aba-config" onClick={() => { handleClose() }}>
                    <nav className={`aba-config ${animationConfig ? 'open' : null}`} onClick={(e) => { e.stopPropagation() }}>
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