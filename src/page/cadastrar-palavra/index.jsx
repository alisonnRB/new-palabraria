import React, { useState, useRef } from "react";
import axios from "axios";

import Form1 from './form/form1';
import Form2 from './form/form2';
import Form3 from './form/form3';

export default function CadastrarPalavra(props) {
    const [etapa, setEtapa] = useState(1);
    const form1 = useRef();
    const form2 = useRef();
    const form3 = useRef();

    const Create = async () => {
        const token = sessionStorage.getItem('token');

        const formularios = new FormData;
        formularios.append('form1', JSON.stringify(form1.current));
        formularios.append('form2', form2.current);
        formularios.append('form3', form3.current);

        try {
            const response = await axios.post('http://localhost/src/controls/palavra.php', formularios,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });

                if(!response.data.ok){
                    console.log(response.data.response);
                }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };



    return (
        <div className="content-forms">

            <span className="barra">

                <span className="box">
                    <p className="etapa">ETAPA 1</p>
                    <div className="etapa-box um" style={etapa == 1 ? { background: 'black' } : { background: 'grey' }}></div>
                </span>

                <span className="box">
                    <p className="etapa">ETAPA 2</p>
                    <div className="etapa-box" style={etapa == 2 ? { background: 'black' } : { background: 'grey' }}></div>
                </span>

                <span className="box">
                    <p className="etapa">ETAPA 3</p>
                    <div className="etapa-box dois" style={etapa == 3 ? { background: 'black' } : { background: 'grey' }}></div>
                </span>

            </span>

            <form className="forms">
                {etapa == 1 ? <Form1 setEtapa={setEtapa} form1={form1} /> : null}
                {etapa == 2 ? <Form2 setEtapa={setEtapa} form2={form2} /> : null}
                {etapa == 3 ? <Form3 setEtapa={setEtapa} form3={form3} /> : null}
            </form>

            <p
                className="prox-bt"
                style={{ color: 'black' }}
                onClick={() => { props.setEtapa(prevState => prevState + 1) }}
            >
                CONTINUAR
            </p>

            <button onClick={()=>{Create()}} style={{position: "absolute", height: '100px', width: '100px', background: 'blue'}}>AQUIIII</button>
        </div>
    );
}