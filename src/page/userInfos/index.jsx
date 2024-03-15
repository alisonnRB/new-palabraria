import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "../../components/cardWord/index";
import seta from "../../drawble/seta-esquerda.png";

export default function UserInfos() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [main, setMain] = useState();
    const [mode, setMode] = useState();
    const [image, setImage] = useState();

    const Search = async (token, id) => {
        try {
            const response = await axios.get(`http://10.0.0.183/src/controls/user.php?id=${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.ok) {
                setUser(response.data.response[0][0]);
                setMain(response.data.response[1]);
                setMode(response.data.response[2]);
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };


    useEffect(() => {
        let id = new URLSearchParams(location.search).get('id');
        if (id) {
            id = JSON.parse(id);
            const token = sessionStorage.getItem('token');
            Search(token, id);
        }
    }, [location])

    useEffect(() => {
        if (user) {
            setImage('http://10.0.0.183/src/drawble/user/user_' + user.tipo + '.jpeg');
        }
    }, [user])


    const gera_card_main = () => {
        const list = [];

        for (let i = 0; i < Object.keys(main).length; i++) {
            const iten = <Card key={i} infos={main[i]}/>
            list.push(iten);
        }

        return list;
    }

    const gera_card_mode = () => {
        const list = [];

        for (let i = 0; i < Object.keys(mode).length; i++) {
            const iten = <Card key={i} infos={mode[i]} mode={"moder"} tipo={"mod"}/>
            list.push(iten);
        }

        return list;
    }


    return (
        <div className="infos-user">

            <span className="seta-content">
                <img src={seta} onClick={()=>{navigate(-1)}}/>
            </span>

            <span className="user">
                <img src={image} />
                {user && user.user ? <p>{user.user}</p> : <p>. . .</p>}
            </span>

            <span className="content-cards">
                <p>Contribuições aprovadas:</p>

                {main && main[0] ? gera_card_main() : <p className="nothing">Não há contribuições</p>}
            </span>

            <span className="content-cards">
                <p>Contribuições a moderar:</p>

                {mode && mode[0] ? gera_card_mode() : <p className="nothing">Não há contribuições</p>}
            </span>
        </div>
    );
}