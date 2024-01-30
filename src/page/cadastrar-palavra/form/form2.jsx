import React, { useState } from "react";

import Custom from '../../../components/input-custom/input-custom';

import mais from '../../../drawble/xis.png';

export default function FormulareDOIS(props) {
    const [imageNum, setImageNum] = useState(1);

    const geraImage = () => {
        const list = [];

        for (let i = 0; i < imageNum; i++) {
            let item = <Custom key={i} num={i} form2={props.form2} />
            list.push(item);
        }

        return list;
    }

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
                style={{color: 'black'}}
                onClick={()=>{props.setEtapa(prevState => prevState + 1)}}
            >
                CONTINUAR
            </p>
        </div>
    );
}