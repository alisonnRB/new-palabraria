import React, { useState, useEffect } from "react";


export default function FormulareTRES(props) {
    const [transcricao, setTranscricao] = useState();

    const [expressao1, setExpressao1] = useState('');
    const [expressao2, setExpressao2] = useState('');
    const [expressao3, setExpressao3] = useState('');
    const [expressao4, setExpressao4] = useState('');

    const Finalizar = (B) => {
        props.form3.current = {
            'transcricao': transcricao,
            'expressao1': expressao1,
            'expressao2': expressao2,
            'expressao3': expressao3,
            'expressao4': expressao4,
        }

        

        if (B) {
            props.Create();
        }
        
        props.Save();
    }

    const define = () => {
        const def = props.form3.current;
        if (def.transcricao) {
            setTranscricao(def.transcricao);
        }

        if (def.expressao1) {
            setExpressao1(def.expressao1);
        }

        if (def.expressao2) {
            setExpressao2(def.expressao2);
        }

        if (def.expressao3) {
            setExpressao3(def.expressao3);
        }

        if (def.expressao4) {
            setExpressao4(def.expressao4);
        }
    }

    useEffect(() => {
        if (props.form3.current) {
            define();
        }
    }, [props.form3])

    return (
        <div className="box-form tres">
            <div className="content-transc">
                <span className="content-label">
                    <label htmlFor="transcri">Transcricão fonética:</label>
                    <input type="text" id="transcri" value={transcricao} onChange={(e) => { setTranscricao(e.target.value) }} />
                </span>
            </div>

            <label htmlFor="expre" id="label-ex">Expressões idiomaticas: </label>

            <div className="content-expres">

                <input type="text" id="expre" value={expressao1} onChange={(e) => { setExpressao1(e.target.value) }} />

                <input type="text" value={expressao2} onChange={(e) => { setExpressao2(e.target.value) }} />

                <input type="text" value={expressao3} onChange={(e) => { setExpressao3(e.target.value) }} />

                <input type="text" value={expressao4} onChange={(e) => { setExpressao4(e.target.value) }} />

            </div>

            <p
                className="prox-bt"
                style={{ color: 'black' }}
                onClick={() => { Finalizar(true) }}
            >
                FINALIZAR
            </p>

            <p
                className="volt-bt"
                style={{ color: 'black' }}
                onClick={() => { Finalizar(false); props.setEtapa(prevState => prevState - 1) }}
            >
                VOLTAR
            </p>
        </div>
    );
}