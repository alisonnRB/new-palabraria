import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import axios from "axios";

import CardWord from "../../../components/cardWord";

export default function Search(props) {
    const index = useRef(0);
    const [ref, inView] = useInView();
    const [load, setLoad] = useState(false);
    const [word, setWord] = useState([]);

    const searchDebounced = async () => {

        try {

            const response = await axios.get(`http://localhost/src/controls/search.php?tipo=normal&busca=${props.busca}&index=${index.current}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

            if (load) {
                if (response.data.ok) {
                    setWord((prevState) => [
                        ...prevState,
                        ...response.data.response
                    ]);
                } else {
                    setWord([]);
                }
                
            }else{
                if (response.data.ok) {
                    setWord(response.data.response);
                } else {
                    setWord([]);
                }
            }




        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }

        setLoad(false);

    };


    useEffect(() => {
        const debounceTimer = setTimeout(() => {
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
            searchDebounced();
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


                {load ? <div class="c-loader"></div> : null}

                <div ref={ref} className="view">

                </div>

            </div>
        </div>
    );
}