import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Delete(props) {
    const navigate = useNavigate();

    const Aprove = async () => {
        const response = await axios.put(`http://10.0.0.183/src/controls/update.php?type=${props.type}&id=${props.id}`,
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
                    <p>Tem certeza de que deseja aprovar essa palavra?</p>
                </span>

                <span className="bt-box">
                    <button className="bt" onClick={() => { Aprove() }}>APROVAR</button>
                    <button className="bt" onClick={() => { props.setAprove(false) }}>CANCELAR</button>
                </span>

            </div>

        </div>
    );
}