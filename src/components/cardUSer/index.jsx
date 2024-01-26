import React, {useEffect, useState} from "react";

export default function Card(props) {
    const [infos, setInfos] = useState({});
    const [image, setImage] = useState(null);

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
                <div className="bt edit">Editar</div>
                <div className="bt dell">Excluir</div>
            </span>
        </div>
    );
}