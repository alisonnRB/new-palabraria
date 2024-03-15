import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import axios from "axios";

import CardWord from "../../../components/cardWord";

export default function Search(props) {
    const index = useRef(0);
    const [ref, inView] = useInView();
    const [load, setLoad] = useState(false);
    const [word, setWord] = useState([]);

    const [noMOre, setNoMore] = useState(false);
    const [notHave, setNotHave] = useState(false)

    const searchDebounced = async (type = false) => {

        try {

            const response = await axios.get(`http://10.0.0.183/src/controls/search.php?tipo=normal&busca=${props.busca}&index=${index.current}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

            if (type) {
                if (response.data.ok) {
                    setWord((prevState) => [
                        ...prevState,
                        ...response.data.response
                    ]);
                }else{
                    setNoMore(true);
                }
                
            }else{
                if (response.data.ok) {
                    setNotHave(false);
                    setWord(response.data.response);
                } else {
                    setWord([]);
                    setNotHave(true);
                }
            }


        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }

        setLoad(false);

    };


    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            index.current = 0;
            setNoMore(false);
            setLoad(false);
            searchDebounced();
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [props.busca]);

    useEffect(() => {
        if (load) {
            return;
        }

        if (inView) {
            setLoad(true);
            index.current += 6;
            searchDebounced(true);
        }
    }, [inView])

    const geraCard = () => {
        const list = [];

        for (let i = 0; i < Object.keys(word).length; i++) {
            const iten = <CardWord key={i} infos={word[i]} />
            list.push(iten);
        }

        return list;
    }

    return (
        <div className="busca-content">
            <div className="results-box">

                {geraCard()}

                {notHave ? <p className="result">NÂO HÁ RESULTADOS PARA ESSA BUSCA!</p> : null}

                {noMOre && !notHave ? <p className="result">NÃO HÁ MAIS RESULTADOS!</p> : null}

                {load ? <div className="c-loader"></div> : null}

                <div ref={ref} className="view">

                </div>

            </div>
        </div>
    );
}