import React, { useState } from "react";

import logo from '../../drawble/abacaxiWhite.png';
import lupa from '../../drawble/lupa.png';
import config from '../../drawble/configuracoes.png';

export default function Header() {
    const [configuration, setConfigaration] = useState(false);

    return (
        <header className="header">
            <img src={config} alt="configurações" className="config" />

            <img src={logo} alt="logotipo palabraria" className="logo" />

            <div className="content-search">
                <input type="text" className="search" />
                <img src={lupa} alt="pesquisa" className="lupa" />
            </div>


            {configuration ?
                <div className="aba-config">

                </div>
                : null}
        </header>
    );
}