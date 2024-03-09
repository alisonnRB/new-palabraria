import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Headers from '../../../components/header/index.jsx'
import Carousel from "../../viewWord/carrossel/index.jsx";
import Balao from "../../viewWord/balao/index.jsx";

export default function Word() {
    const location = useLocation();
    const navigate = useNavigate();
    const [wordId, setWordId] = useState(null)
    const [type, setType] = useState('');
    const [infos, setInfos] = useState([]);

    const [options, setOptions] = useState(false)

    const search = async () => {
        try {

            const response = await axios.get(`http://localhost/src/controls/search.php?tipo=${type}&busca=&index=${wordId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

            if (response.data.ok) {
                setInfos(response.data.response[0]);
            } else {
                console.log('fudeu');
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    }

    useEffect(() => {
        let id = new URLSearchParams(location.search).get('id');
        id = JSON.parse(id);
        let tipo = new URLSearchParams(location.search).get('type');
        tipo = JSON.parse(tipo);
        console.log(tipo)

        if (tipo && tipo == "mod") {
            setType("unic_mod")
        } else if (tipo && tipo == "geral") {
            setType("unic")
        }

        if (id) {
            setWordId(id);
        }
    }, [location]);

    useEffect(() => {
        if (wordId && type) {
            search();
        }
    }, [wordId, type])



    const geraBalao = () => {
        const list = [];
        let count = 0;

        for (let i = 1; i < 5; i++) {
            if (infos[`expressao${i}`]) {
                count++;
                let a = <Balao key={i} info={infos[`expressao${i}`]} count={count} />
                list.push(a);
            }
        }

        return list;
    }


    return (
        <div className="Home" onClick={()=>{setOptions(false)}}>
            <Headers />

            <div className="contents">
                <div className="comport-carrossel">
                    <Carousel infos={infos} />
                </div>

                <section className="description">
                    <div className="palavra">
                        <span className="traducao">
                            <h3>{infos.palavra}</h3>
                            <h4>/ {infos.traducao}</h4>
                        </span>
                        <span className="transcricao">
                            <p>{infos.transcricao}</p>
                        </span>
                    </div>

                    <div className="content-desc">
                        <p>descrição:</p>
                        <div className="content-area-desc">
                            <span className="area-desc">
                                <p>{infos.descricao}</p>
                            </span>
                        </div>
                    </div>
                </section>

                {geraBalao()}

            </div>

            <div className="c-bt" onClick={(e) => { e.stopPropagation(); setOptions(true) }}>
                <p>. . .</p>
            </div>

            {options ?

                <div className="options-c" onClick={(e)=>{e.stopPropagation()}} onMouseLeave={()=>{setOptions(false)}}>
                    <p>APAGAR</p>
                    <p onClick={()=>{navigate(`/Moder/palavra/Update?id=${encodeURIComponent(JSON.stringify(wordId))}&type=${encodeURIComponent(JSON.stringify(type))}`)}}>ALTERAR</p>
                    <p>APROVAR</p>
                </div>

                : null}

        </div>
    );
}