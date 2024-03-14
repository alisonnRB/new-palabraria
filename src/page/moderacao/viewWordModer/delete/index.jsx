import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Delete(props) {
    const navigate = useNavigate();

    const Dell = async () => {
        const response = await axios.delete(`http://localhost/src/controls/update.php?type=${props.type}&id=${props.id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if(response.data.ok){
                navigate(-1);
            }

    }


    return (
        <div className="content-delete">

            <div className="box-delete">
                <span className="text">
                    <p>Tem certexa de que deseja apagar permanentemente essa palavra?</p>
                </span>

                <span className="bt-box">
                    <button className="bt" onClick={() => { Dell() }}>EXCLUIR</button>
                    <button className="bt" onClick={() => { props.setDeletes(false) }}>CANCELAR</button>
                </span>

            </div>

        </div>
    );
}