import React, {useState, useRef} from "react";

import Form1 from './form/form1';
import Form2 from './form/form2';

export default function CadastrarPalavra() {
    const [etapa, setEtapa] = useState(1);
    const form1 = useRef();
    const form2 = useRef();
    

    return (
        <div className="content-forms">

            <span className="barra">

                <span className="box">
                    <p className="etapa">ETAPA 1</p>
                    <div className="etapa-box um" style={etapa == 1 ? {background: 'black'} : {background: 'grey'}}></div>
                </span>

                <span className="box">
                    <p className="etapa">ETAPA 2</p>
                    <div className="etapa-box" style={etapa == 2 ? {background: 'black'} : {background: 'grey'}}></div>
                </span>

                <span className="box">
                    <p className="etapa">ETAPA 3</p>
                    <div className="etapa-box dois" style={etapa == 3 ? {background: 'black'} : {background: 'grey'}}></div>
                </span>

            </span>

            <form className="forms">
                {etapa == 1 ? <Form1 setEtapa={setEtapa} form1={form1}/> : null}
                {etapa == 2 ? <Form2 setEtapa={setEtapa} form2={form2}/> : null}
            </form>
        </div>
    );
}