import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

import iconoSkills from '../../../svg/iconoSkills.svg';
import '../../../styles/proyect_style.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const data = ['test', 'test', 'test'];

export default function Projects() {
    const [listCadSkills, setListCadSkills] = useState([]);

    useEffect(() => {

        setListCadSkills(data);

    }, []);

    return (
        <Element className="proyect" id='4' >
            <div className="contSwiper">

                <TitleComponent/>

                <Swiper
                    className='swiper_principal'
                    effect='coverflow'
                    slidesPerGroup={1}
                    slidesPerView={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    grabCursor={true}
                    centeredSlides={true}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 5000, }}
                >
                    {
                        listCadSkills.map((cards, index) => {
                            return (
                                <SwiperSlide className='swipe_slide_conten' >
                                    <div className='conten_card' >
                                        <a href='/' style={{ width: '100%', height: '100%' }} >
                                            <img src='wolas' style={{ width: '100%', height: '100%' }} alt={`card_number ${index}`} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </Element>
    )
};

function TitleComponent() {
    const titleProyectRef = useRef();

    useEffect(() => {

        if (titleProyectRef.current) {
            ScrollReveal().reveal(titleProyectRef.current,{ reset: true, delay: 500 })
        };

    }, []);


    return (
        <div className="contenTitleProyects" ref={titleProyectRef} >
            <div className="contIcon_proyect" >
                <img src={iconoSkills} style={{ width: '100%', height: '100%', }} alt='icon_skill' />
            </div>
            <p className="txt_proyect">
                Projects
            </p>
        </div>
    );
};
