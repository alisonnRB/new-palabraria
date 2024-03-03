import React from "react";
import axios from "axios";

import Headers from '../../components/header/index.jsx'
import Carousel from "./carrossel/index.jsx";

export default function Word() {
    return (
        <div className="Home">
            <Headers />

            <div className="contents">
                <div className="comport-carrossel">
                    <Carousel />
                </div>

                <section className="description">
                    <div className="palavra">
                        <span className="traducao">
                            <h3>Sandía</h3>
                            <h4>/ melancia</h4>
                        </span>
                        <span className="transcricao">
                            <p>Mel3?cial</p>
                        </span>
                    </div>

                    <div className="content-desc">
                        <p>descrição:</p>
                        <div className="content-area-desc">
                            <span className="area-desc">
                                <p>La sandía es una planta de la familia de las Cucurbitáceas y también es el nombre de su fruto. Es una enredadera rastrera originaria de África.</p>
                            </span>
                        </div>
                    </div>
                </section>

                <section className="frases">

                    <div className="balao">
                        <p>
                            oiesddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd
                            oiesddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd
                            oiesddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd
                        </p>
                    </div>

                </section>

                <section className="frases s">

                    <div className="balao">
                        <p>
                            oiesddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd
                            oiesddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd
                            oiesddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd
                        </p>
                    </div>

                </section>

            </div>




        </div>
    );
}