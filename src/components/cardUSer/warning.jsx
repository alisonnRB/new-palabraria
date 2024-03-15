import React from "react";
import axios from "axios";

import logo from '../../drawble/abacaxiWhite.png';

export default function Warning(props) {

    const Deletar = async () => {
        const token = sessionStorage.getItem('token');

        try {
            const resposta = await axios.delete(`http://localhost/src/controls/user.php?id=${props.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (resposta.data.ok) {
                window.location.reload();
            } else {
                props.setErro(resposta.data.response);
                props.setOpenMsg(true);
                props.setDell(false);
            }
        } catch (erro) {
            props.setDell(false);
        }
    };

    return (
        <div className="filter-content-warning" onClick={() => { props.setDell(false) }}>
            <div className="content-box" onClick={(e) => { e.stopPropagation() }}>
                <span className="logo-content">
                    <img src={logo} alt="logo palabraria" />
                </span>

                <div className="content-msg">
                    <p>Tem certeza que quer excluir o usuario {props.user} ??</p>
                    <p>As informações referentes a esse usuario serão completamente perdidas!!</p>
                </div>

                <div className="content-bt">
                    <button className="bt" onClick={() => { Deletar() }}>EXCLUIR</button>
                    <button className="bt" onClick={() => { props.setDell(false) }}>CANCELAR</button>
                </div>
            </div>
        </div>
    );
}