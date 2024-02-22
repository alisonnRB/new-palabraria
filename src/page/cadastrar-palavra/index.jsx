import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import Form1 from './form/form1';
import Form2 from './form/form2';
import Form3 from './form/form3';

import Warning from "./warning";

export default function CadastrarPalavra(props) {
    const [warningOpen, setWarningOpen] = useState(false);

    const [etapa, setEtapa] = useState(1);
    const form1 = useRef();
    const form2 = useRef();
    const form3 = useRef();

    const Create = async () => {
        const token = sessionStorage.getItem('token');



        const formularios = new FormData;
        formularios.append('form1', JSON.stringify(form1.current));

        if (form2.current) {
            for (let i = 0; i < Object.keys(form2.current).length; i++) {
                formularios.append(`image${i}`, form2.current[i]);
            }
        }


        formularios.append('form3', JSON.stringify(form3.current));


        try {
            const response = await axios.post('http://localhost/src/controls/palavra.php', formularios,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });

            if (!response.data.ok) {
                console.log(response.data);
            } else {
                console.log(response.data);
                localStorage.clear('forms');
                setWarningOpen(true);
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    const Save = () => {
        let obj = {
            'etapa': etapa,
            'form1': form1.current ? form1.current : '',
            'form3': form3.current ? form3.current : ''
        }

        obj = JSON.stringify(obj);

        localStorage.setItem('forms', obj);

    }

    useEffect(() => {
        if (localStorage.getItem('forms')) {
            const forms = JSON.parse(localStorage.getItem('forms'));

            form1.current = forms.form1 ? forms.form1 : '';
            form3.current = forms.form3 ? forms.form3 : '';

            if (forms.etapa) {
                setEtapa(forms.etapa);
            }
        }
    }, [])



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
                {etapa == 1 ? <Form1 setEtapa={setEtapa} form1={form1} Save={Save} /> : null}
                {etapa == 2 ? <Form2 setEtapa={setEtapa} form2={form2} Save={Save} /> : null}
                {etapa == 3 ? <Form3 setEtapa={setEtapa} Create={Create} form3={form3} Save={Save} /> : null}
            </form>

            <p
                className="prox-bt"
                style={{ color: 'black' }}
                onClick={() => { props.setEtapa(prevState => prevState + 1) }}
            >
                CONTINUAR
            </p>

            {warningOpen ? <Warning /> : null}

        </div>
    );
}