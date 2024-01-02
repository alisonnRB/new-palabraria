import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../../drawble/países/argentina.jpg';
import img2 from '../../../drawble/países/bolivia.jpg';
import img3 from '../../../drawble/países/chile.jpg';
import img5 from '../../../drawble/países/colombia.jpg';
import img6 from '../../../drawble/países/costa.jpg';
import img7 from '../../../drawble/países/cuba.jpg';
import img8 from '../../../drawble/países/elSalvador.jpg';
import img9 from '../../../drawble/países/equador.jpg';
import img10 from '../../../drawble/países/espanha.jpg';
import img11 from '../../../drawble/países/guatemala.jpg';
import img12 from '../../../drawble/países/guine.jpg';
import img13 from '../../../drawble/países/honduras.jpg';
import img15 from '../../../drawble/países/mexico.jpg';
import img16 from '../../../drawble/países/nicaragua.jpg';
import img17 from '../../../drawble/países/panama.jpg';
import img18 from '../../../drawble/países/paraguai.jpg';
import img19 from '../../../drawble/países/peru.jpg';
import img20 from '../../../drawble/países/porto.jpg';
import img21 from '../../../drawble/países/republica.jpg';
import img22 from '../../../drawble/países/uruguai.jpg';
import img23 from '../../../drawble/países/venezuela.jpg';


import CustomArrows from './arrow';


const Carousel = () => {
    const slider = React.useRef(null);

    const goToPrevSlide = () => {
        slider.current.slickPrev();
    };

    const goToNextSlide = () => {
        slider.current.slickNext();
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        swipeToSlide: true,
        variableWidth: false,
        centerMode: false,
        prevArrow: <CustomArrows seta={true} go={goToNextSlide} direction="prev" />,
        nextArrow: <CustomArrows seta={false} go={goToPrevSlide} direction="next" />,
    };

    const países = {
        1: { pais: 'Argentina', capital: 'Buenos Aires' },
        2: { pais: 'Bolivia', capital: 'Sucre' },
        3: { pais: 'Chile', capital: 'Santiago' },
        4: { pais: 'Colômbia', capital: 'Bogotá' },
        5: { pais: 'Costa Rica', capital: 'São José' },
        6: { pais: 'Cuba', capital: 'Havana' },
        7: { pais: 'El Salvador', capital: 'São Salvador' },
        8: { pais: 'Equador', capital: 'Quito' },
        9: { pais: 'Espanha', capital: 'Madrid' },
        10: { pais: 'Guatemala', capital: 'Guatemala' },
        11: { pais: 'Guiné Equatorial', capital: 'Malabo' },
        12: { pais: 'Honduras', capital: 'Tegucigalpa' },
        13: { pais: 'México', capital: 'México' },
        14: { pais: 'Nicarágua', capital: 'Manágua' },
        15: { pais: 'Panamá', capital: 'Panamá' },
        16: { pais: 'Paraguai', capital: 'Assunção' },
        17: { pais: 'Peru', capital: 'Lima' },
        18: { pais: 'Porto Rico', capital: 'San Juan' },
        19: { pais: 'República Dominicana', capital: 'Santo Domingo' },
        20: { pais: 'Uruguai', capital: 'Montevideu' },
        21: { pais: 'Venezuela', capital: 'Caracas' },
    };

    return (
        <Slider ref={slider} {...settings}>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[1].pais}</h6>
                    <p>{países[1].capital}</p>
                </div>
                <img src={img1} alt="Imagem 1" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[2].pais}</h6>
                    <p>{países[2].capital}</p>
                </div>
                <img src={img2} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[3].pais}</h6>
                    <p>{países[3].capital}</p>
                </div>
                <img src={img3} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[4].pais}</h6>
                    <p>{países[4].capital}</p>
                </div>
                <img src={img5} alt="Imagem 1" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[5].pais}</h6>
                    <p>{países[5].capital}</p>
                </div>
                <img src={img6} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[6].pais}</h6>
                    <p>{países[6].capital}</p>
                </div>
                <img src={img7} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[7].pais}</h6>
                    <p>{países[7].capital}</p>
                </div>
                <img src={img8} alt="Imagem 1" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[8].pais}</h6>
                    <p>{países[8].capital}</p>
                </div>
                <img src={img9} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[9].pais}</h6>
                    <p>{países[9].capital}</p>
                </div>
                <img src={img10} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[10].pais}</h6>
                    <p>{países[10].capital}</p>
                </div>
                <img src={img11} alt="Imagem 1" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[11].pais}</h6>
                    <p>{países[11].capital}</p>
                </div>
                <img src={img12} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[12].pais}</h6>
                    <p>{países[12].capital}</p>
                </div>
                <img src={img13} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[13].pais}</h6>
                    <p>{países[13].capital}</p>
                </div>
                <img src={img15} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[14].pais}</h6>
                    <p>{países[14].capital}</p>
                </div>
                <img src={img16} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[15].pais}</h6>
                    <p>{países[15].capital}</p>
                </div>
                <img src={img17} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[16].pais}</h6>
                    <p>{países[16].capital}</p>
                </div>
                <img src={img18} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[17].pais}</h6>
                    <p>{países[17].capital}</p>
                </div>
                <img src={img19} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[18].pais}</h6>
                    <p>{países[18].capital}</p>
                </div>
                <img src={img20} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[19].pais}</h6>
                    <p>{países[19].capital}</p>
                </div>
                <img src={img21} alt="Imagem 3" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[20].pais}</h6>
                    <p>{países[20].capital}</p>
                </div>
                <img src={img22} alt="Imagem 2" />
            </div>
            <div className='foto'>
                <div className='infos'>
                    <h6>{países[21].pais}</h6>
                    <p>{países[21].capital}</p>
                </div>
                <img src={img23} alt="Imagem 3" />
            </div>

        </Slider>
    );
};

export default Carousel;
