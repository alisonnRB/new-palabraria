import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import img1 from '../../../drawble/países/argentina.jpg';
import img2 from '../../../drawble/países/bolivia.jpg';



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
    };

    const países = {
        1: { pais: 'Argentina', capital: 'Buenos Aires' },
        2: { pais: 'Bolivia', capital: 'Sucre' },
    };

    return (
        <Slider ref={slider} {...settings}>
            <div className='foto'>
                <img src={img1} alt="Imagem 1" />
            </div>
            <div className='foto'>
                <img src={img2} alt="Imagem 2" />
            </div>

        </Slider>
    );
};

export default Carousel;
