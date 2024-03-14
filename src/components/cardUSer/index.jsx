import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import Warning from "./warning";

export default function Card(props) {
    const navigate = useNavigate();
    const [infos, setInfos] = useState({});
    const [image, setImage] = useState(null);
    const [dell, setDell] = useState(false);

    useEffect(()=>{
        if(props && props.infos){
            setInfos(props.infos);
            setImage('http://localhost/src/drawble/user/user_' + props.infos.tipo + '.jpeg');
        }
    },[props]);

    return (
        <div className="box-card">
            <span className="um">
                <img className="imagem" src={image} alt="paisagem representativa sobre classificação" />
            </span>
            <span className="dois">
                <p>User:</p>
                <div className="nome">{infos && infos.user ? infos.user : null}</div>
            </span>
            <span className="dois">
                <p>Nível:</p>
                <div className="nome">{infos && infos.tipo ? infos.tipo : null}</div>
            </span>
            <span className="tres">
                <div className="bt edit" onClick={()=>{navigate(`/User/infos?id=${encodeURIComponent(JSON.stringify(infos.id))}`)}}>Infos</div>
                <div className="bt dell" onClick={()=>{setDell(true)}}>Excluir</div>
            </span>

            {dell ? <Warning user={infos.user} id={infos.id} setDell={setDell} setErro={props.setErro} setOpenMsg={props.setOpenMsg}/> : null}
        </div>
    );
}