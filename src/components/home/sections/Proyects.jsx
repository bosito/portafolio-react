import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

import iconoSkills from '../../../svg/iconoSkills.svg';
import '../../../styles/proyect_style.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Projects() {
    const [listCadSkills, setListCadSkills] = useState(['test', 'test', 'test']);
    return (
        <section className="proyect" id='4'>
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
                                            <img src='' style={{ width: '100%', height: '100%' }} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </section>
    )
};

function TitleComponent() {
    return (
        <div className="contenTitleProyects">
            <div className="contIcon_proyect" >
                <img src={iconoSkills} style={{ width: '100%', height: '100%', }} alt='icon_proyec' />
            </div>
            <p className="txt_proyect">
                Projects
            </p>
        </div>
    );
};