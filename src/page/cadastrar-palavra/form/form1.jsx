import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormulareUM(props) {
    const [ENpalavra, setENpalavra] = useState('');
    const [PTpalavra, setPTpalavra] = useState('');
    const [campo1, setCampo1] = useState('');
    const [campo2, setCampo2] = useState('');
    const [desc, setDesc] = useState('');

    const [erro, setErro] = useState(false);
    const [erromsg, setErroMsg] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const searchDebounced = async () => {
            const token = sessionStorage.getItem('token');
            try {
                const response = await axios.get(`http://localhost/src/controls/palavra-existe.php?palavra=${searchTerm}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        }
                    });

                if (response.data.ok) {
                    setErro(true);
                    setErroMsg(response.data.response);
                } else {
                    setErro(false);
                    setErroMsg(response.data.response);
                }
            } catch (error) {
                console.error('Erro ao enviar requisição:', error);
            }
        };

        const debounceTimer = setTimeout(() => {
            searchDebounced();
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [searchTerm]);

    useEffect(() => {
        if (props.form1.current) {
            define();
        }
    }, [props.form1]);

    const define = () => {
        const def = props.form1.current;

        if (def.ENpalavra) {
            setENpalavra(def.ENpalavra);
        }

        if (def.PTpalavra) {
            setPTpalavra(def.PTpalavra);
        }

        if (def.campo1) {
            setCampo1(def.campo1);
        }

        if (def.campo2) {
            setCampo2(def.campo2);
        }

        if (def.descricao) {
            setDesc(def.descricao);
        }
    }

    const complete = () => {
        props.form1.current = {
            'ENpalavra': ENpalavra,
            'PTpalavra': PTpalavra,
            'campo1': campo1,
            'campo2': campo2,
            'descricao': desc
        }

        props.Save();
    }

    const handleInputChange = (e) => {
        setENpalavra(e.target.value);
        setSearchTerm(e.target.value);
    }

    return (
        <div className="box-form">
            <span className="content-input">
                <span>
                    <span className="label-error">
                        <label htmlFor="ESpalavra">Palavra em espanhol:</label>
                        {erromsg && ENpalavra ? <p style={erro ? { color: 'green' } : { color: 'red' }}>* {erromsg}</p> : null}
                    </span>
                    <input type="text" id="ESpalavra" value={ENpalavra} onChange={handleInputChange} />
                </span>

                <span>
                    <label htmlFor="PTpalavra">Palavra em português:</label>
                    <input type="text" id="PTpalavra" value={PTpalavra} onChange={(e) => { setPTpalavra(e.target.value) }} />
                </span>
            </span>

            <span className="content-area">

                <span className="content-semantic">

                    <label htmlFor="semantic">Campos Semânticos:</label>

                    <span>
                        <input type="text" id="semantic" value={campo1} onChange={(e) => { setCampo1(e.target.value) }} />

                        <input type="text" value={campo2} onChange={(e) => { setCampo2(e.target.value) }} placeholder="esse campo é opcional..." />

                    </span>
                </span>

                <span className="content-desc">
                    <label htmlFor="desc">Descrição: </label>
                    <textarea id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }}></textarea>
                </span>
            </span>

            <p
                className="prox-bt"
                style={desc && PTpalavra && ENpalavra && erro ? { color: "black" } : { color: "grey" }}
                onClick={desc && PTpalavra && ENpalavra && erro ? () => { complete(); props.setEtapa(2) } : () => { complete() }}
            >
                CONTINUAR
            </p>

        </div>
    );
}
