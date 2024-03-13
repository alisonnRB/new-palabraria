import React, { useState, useEffect } from "react";
import axios from "axios";

import save from '../../../drawble/save.png';

export default function Others(props) {
    const [transcricao, setTranscricao] = useState('');

    const [expressao1, setExpressao1] = useState('');
    const [expressao2, setExpressao2] = useState('');
    const [expressao3, setExpressao3] = useState('');
    const [expressao4, setExpressao4] = useState('');

    useEffect(() => {
        if (props.infos) {
            setTranscricao(props.infos.transcricao);
            setExpressao1(props.infos.expressao1);
            setExpressao2(props.infos.expressao2);
            setExpressao3(props.infos.expressao3);
            setExpressao4(props.infos.expressao4);
        }
    }, [props])

    const Update = async () => {
        try {
            const form = {
                "mode": 3,
                "id": props.infos.id,
                "type": props.type,
                "transcricao": transcricao,
                "expressao1": expressao1,
                "expressao2": expressao2,
                "expressao3": expressao3,
                "expressao4": expressao4
            }

            const formData = new FormData;
            formData.append("form", JSON.stringify(form))

            const response = await axios.post(`http://localhost/src/controls/update.php`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });

            if (response.data.ok) {
                props.search();
                props.setIsSave(true);
            } else {
                props.setErro(response.data);
                props.setOpenMsg(true);
            }
        } catch (error) {
            console.log(error)
        }


    }

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

            <img src={save} className="button-save" onClick={() => { Update() }} />
        </div>
    );
}