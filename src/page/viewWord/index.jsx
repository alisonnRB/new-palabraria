import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Headers from './header/index.jsx';
import Carousel from "./carrossel/index.jsx";
import Balao from "./balao/index.jsx";

export default function Word() {
    const location = useLocation();
    const [wordId, setWordId] = useState(null)
    const [infos, setInfos] = useState([]);

    const search = async () => {
        try {

            const response = await axios.get(`http://10.0.0.183/src/controls/search.php?tipo=unic&busca=&index=${wordId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

            if(response.data.ok){
                setInfos(response.data.response[0]);
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    }

    useEffect(() => {
        let id = new URLSearchParams(location.search).get('id');
        id = JSON.parse(id);
        if (id) {
            setWordId(id);
        }
    }, [location]);

    useEffect(()=>{
        if(wordId){
            search();
        }
    },[wordId])


    const geraBalao = () => {
        const list = [];
        let count = 0;

        for(let i = 1; i<5; i++){
            if(infos[`expressao${i}`]){
                count++;
                let a = <Balao key={i} info={infos[`expressao${i}`]} count={count}/>
                list.push(a);
            }
        }

        return list;
    }


    return (
        <div className="Home">
            <Headers />

            <div className="contents">
                <div className="comport-carrossel">
                    <Carousel infos={infos}/>
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




        </div>
    );
}