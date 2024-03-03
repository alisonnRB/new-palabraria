import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Carousel = (props) => {
    const slider = React.useRef(null);

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

    const geraImagens = () => {
        const list = [];

        for (let i = 1; i < 7; i++) {
            if (props.infos[`imagem${i}`]) {
                let a = <div className='foto' key={i}>
                    <img src={`http://localhost/src/drawble/palavras/${props.infos[`imagem${i}`]}`}/>
                </div>
                list.push(a);
            }
        }

        return list;
    }

    return (
        <Slider ref={slider} {...settings}>

            {geraImagens()}

        </Slider>
    );
};

export default Carousel;
