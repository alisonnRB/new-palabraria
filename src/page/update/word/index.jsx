import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Word(props) {
    const [palavraPT, setPalavraPT] = useState('');
    const [palavraEN, setPalavraEN] = useState('');
    const [campo1, setcampo1] = useState('');
    const [campo2, setcampo2] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(()=>{
        if(props && props.infos){
            setPalavraEN(props.infos.palavra);
            setPalavraPT(props.infos.traducao);
            setcampo1(props.infos.classificacao1);
            setcampo2(props.infos.classificacao2);
            setDesc(props.infos.descricao);
        }
    },[props])

    return (
        <form className="box-form">
            <span className="content-input">
                <span>
                    <span className="label-error">
                        <label htmlFor="ESpalavra">Palavra em espanhol:</label>

                    </span>
                    <input type="text" id="ESpalavra" value={palavraEN} onChange={(e)=>{setPalavraEN(e.target.value)}}/>
                </span>

                <span>
                    <label htmlFor="PTpalavra">Palavra em português:</label>
                    <input type="text" id="PTpalavra" value={palavraPT} onChange={(e)=>{setPalavraPT(e.target.value)}}/>
                </span>
            </span>

            <span className="content-area">

                <span className="content-semantic">

                    <label htmlFor="semantic">Campos Semânticos:</label>

                    <span>
                        <input type="text" id="semantic" value={campo1} onChange={(e)=>{setcampo1(e.target.value)}}/>

                        <input type="text" value={campo2} onChange={(e)=>{setcampo2(e.target.value)}}/>

                    </span>
                </span>

                <span className="content-desc">
                    <label htmlFor="desc">Descrição: </label>
                    <textarea id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                </span>
            </span>

        </form>
    );
}