import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

import Custom from '../../../components/input-custom/input-custom';
import save from '../../../drawble/save.png';

export default function UpadteImage(props) {
    const Image = useRef();
    const search = useRef();

    const geraImage = () => {
        const list = [];

        for (let i = 1; i < 7; i++) {
            let item = <Custom key={i} num={i} form2={Image} type={"update"} search={search} Save={() => { }} />
            list.push(item);
        }

        return list;
    }

    const Update = async () => {
        const form = new FormData;

        const list = {
            "mode" : 2,
            "id" : props.infos.id,
            "type" : props.type
        }

        form.append("form", JSON.stringify(list))

        if (Image.current) {
            for (let i = 1; i < 7; i++) {
                if (Image.current[i]) {
                    form.append(`imagem${i}`, Image.current[i]);
                }
            }
        }

        try {
            const response = await axios.post('http://10.0.0.183/src/controls/Update.php', form,
                {
                    headers: {
                        // 'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });

            if (response.data.ok) {
                props.search();
                props.setIsSave(true);
            } else {
                props.setErro(response.data.response);
                props.setOpenMsg(true);
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    useEffect(() => {
        const list = [];
        if (props.infos) {
            for (let i = 1; i < 7; i++) {
                list[i] = props.infos[`imagem${i}`]
            }
        }

        search.current = list;
    }, [props.infos])


    return (
        <div className="box-form">
            <div className="img-content">
                {geraImage()}

            </div>

            <img src={save} className="button-save" onClick={() => { Update() }} />
        </div>
    );
}