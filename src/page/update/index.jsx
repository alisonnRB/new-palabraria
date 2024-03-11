import React, {useState, useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import seta from '../../drawble/seta-esquerda.png';

import Word from "./word/index";
import Image from "./images/index";

export default function Update() {
    const location = useLocation();
    const [infos, setInfos] = useState([]);

    const [type, setType] = useState('');
    const [wordId, setWordId] = useState(null)

    const [op, setOp] = useState(1);

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

        if (tipo) {
            setType(tipo)
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
    
    return (
        <div className="content-update-itens">

            <span className="options-update">

                <img src={seta} className="comeback"/>

                <div className="option">
                    <p>Palavra</p>
                    <div className="bt-op" onClick={()=>{setOp(1)}} style={op == 1 ? {background: "black"} : null}></div>
                </div>

                <div className="option">
                    <p>Imagens</p>
                    <div className="bt-op" onClick={()=>{setOp(2)}} style={op == 2 ? {background: "black"} : null}></div>
                </div>

                <div className="option">
                    <p>Outros</p>
                    <div className="bt-op" onClick={()=>{setOp(3)}} style={op == 3 ? {background: "black"} : null}></div>
                </div>

                <div className="not-visible"></div>
            </span>

            <div className="update-content">

                {op == 1 ? <Word infos={infos} type={type}/> : null }
                {op == 2 ? <Image infos={infos} type={type}/> : null }

            </div>

        </div>
    );
}