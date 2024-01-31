import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormulareUM(props) {
    const [ENpalavra, setENpalavra] = useState('');
    const [PTpalavra, setPTpalavra] = useState('');
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

    const complete = () => {
        props.form1.current = {
            'ENpalavra': ENpalavra,
            'PTpalavra': PTpalavra,
            'descricao': desc
        }
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
                <span>
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
