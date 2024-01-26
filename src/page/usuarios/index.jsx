import React, { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import x from '../../drawble/xis.png';
import Card from '../../components/cardUSer/index';

export default function Usuarios() {
    const navigate = useNavigate();
    const [permitido, setPermitido] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    const Verify_Auth = async (token) => {
        try {
            const response = await axios.post('http://localhost/src/controls/login.php', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.ok) {
                setPermitido(true);
            } else {
                navigate('/');
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
            navigate('/');
        }
    };

    const Search = async (token) => {
        try {
            const response = await axios.get('http://localhost/src/controls/user.php?id=0', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.ok) {
                setUsuarios(response.data.response);
            }

        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    useLayoutEffect(()=>{
        const token = sessionStorage.getItem('token');
        Verify_Auth(token);
    },[])

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        Search(token);
    }, [])

    const gera_card = () => {
        const list = [];
        if(!permitido){
            return [];
        }

        for (let i = 0; i < Object.keys(usuarios).length; i++) {
            let item = <Card infos={usuarios[i]} />;
            list.push(item);
        }

        return list;
    }

    return (
        <div className="Usuarios">
            <span>
                <img className="x" src={x} alt="voltar" onClick={()=>{navigate('/')}}/>
                <img className="x mais" src={x} alt="mais" onClick={()=>{navigate('/cadastro-user')}}/>
            </span>

            <div className="content">
                <div className="card-content">
                    {gera_card()}
                </div>
            </div>
        </div>
    );
}