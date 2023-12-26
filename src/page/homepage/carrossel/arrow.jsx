import React from "react";

import seta from '../../../drawble/seta.png';

export default function Arrow(props){
    return(
        <div className={`arrows ${props.seta? 'menor' : null}`} onClick={()=>{props.go()}}>
            <img src={seta} alt="" className={`seta ${props.seta? null : 'menor'}`}/>
        </div>
    );
}