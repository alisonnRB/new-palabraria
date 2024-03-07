import React from "react";

export default function Header(props){


    return(
        <header className="header-moder">
            <select className="bd-type" name="bd-type" id="bd-type" value={props.bd} onChange={(e)=>{props.setBd(e.target.value)}}>
                <option value="mod">Moderação</option>
                <option value="geral">Geral</option>
            </select>

            <input type="text" className="search" placeholder="search. . . ." value={props.busca} onChange={(e)=>{props.setBusca(e.target.value)}}/>

            <div className="not-box"></div>
        </header>
    );
}