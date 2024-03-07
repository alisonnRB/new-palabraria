import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CardWord(props) {
    const navigate = useNavigate();
    const [image, setImage] = useState('');

    useEffect(()=>{
        if(props.infos && props.infos.imagem1){
            setImage('http://localhost/src/drawble/palavras/' + props.infos.imagem1);
        }
    },[props.infos]);

    const handelClicked = () => {
        if(props.mode && props.mode == "moder"){
            navigate(`/Moder/palavra?id=${encodeURIComponent(JSON.stringify(props.infos.id))}`)
        }else{
            navigate(`/Busca/palavra?id=${encodeURIComponent(JSON.stringify(props.infos.id))}`)
        }
    }

    return (
        <div className="card-content-word" onClick={()=>{handelClicked()}}>
            <img src={image} alt="" />

            <div className="card-text">
                <h6>{props.infos.palavra}</h6>

                <p>{props.infos.descricao}</p>
            </div>
        </div>
    );
}