import React, { useEffect, useState } from "react";

import Custom from '../../../components/input-custom/input-custom';

import mais from '../../../drawble/xis.png';

export default function FormulareDOIS(props) {
    const [imageNum, setImageNum] = useState(1);

    const geraImage = () => {
        const list = [];

        for (let i = 0; i < imageNum; i++) {
            let item = <Custom key={i} num={i} form2={props.form2} Save={props.Save} />
            list.push(item);
        }

        return list;
    }

    useEffect(()=>{
        if(props.form2.current){
            setImageNum(Object.keys(props.form2.current).length);
        }
    },[props.form2])

    return (
        <div className="box-form">
            <div className="img-content">
                {geraImage()}

                {imageNum >= 6 ? null : <div className="content-mais">
                    <img src={mais} alt="mais" className="mais" onClick={() => { setImageNum(prevState => prevState + 1) }} />
                </div>}

            </div>

            <p
                className="prox-bt"
                style={{ color: 'black' }}
                onClick={() => { props.setEtapa(prevState => prevState + 1) }}
            >
                CONTINUAR
            </p>

            <p
                className="volt-bt"
                style={{ color: 'black' }}
                onClick={() => { props.setEtapa(prevState => prevState - 1) }}
            >
                VOLTAR
            </p>
        </div>
    );
}