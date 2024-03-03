import React from "react";


export default function Balao(props) {

    return (
        <section className={`frases ${props.count % 2 == 0 ? 's' : null}`}>

            <div className="balao">
                <p>
                    {props.info}
                </p>
            </div>

        </section>
    );
}