import React, { useState } from "react";


export default function FormulareUM(props) {

    const [ENpalavra, setENpalavra] = useState('');
    const [PTpalavra, setPTpalavra] = useState('');
    const [desc, setDesc] = useState('');

    const complete = () => {
        props.form1.current = {
            'ENpalavra': ENpalavra,
            'PTpalavra': PTpalavra,
            'descricao': desc
        }
    }



    return (
        <div className="box-form">
            <span className="content-input">
                <span>
                    <span className="label-error">
                        <label htmlFor="ESpalavra">Palavra em espanhol:</label>
                        <p>* essa palavra já foi catalogada</p>
                    </span>
                    <input type="text" id="ESpalavra" value={ENpalavra} onChange={(e) => { setENpalavra(e.target.value) }} />
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
                style={desc && PTpalavra && ENpalavra ? { color: "black" } : { color: "grey" }}
                onClick={desc && PTpalavra && ENpalavra ? () => { complete(); props.setEtapa(2)} : ()=>{complete()}}
            >
                CONTINUAR
            </p>
        </div>
    );
}