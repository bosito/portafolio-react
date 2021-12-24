import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

//styles
import '../../../styles/skills.css';
import iconoSkills from "../../../svg/iconoSkills.svg"

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Skills() {
    const [listCadSkills, setListCadSkills] = useState(['test', 'test', 'test', 'test', 'test', 'test']);
    return (
        <section className="skills">

            <div className="contSwiper_skill">

                <div className="contenTitleSkills">
                    <div className="contIconskills" >
                        <img src={iconoSkills} style={{ width: '100%', height: '100%', }} />
                    </div>
                    <p className="txtSkils">
                        My Skills
                    </p>
                </div>

                <SwiperLocalComponent
                    listCadSkills={listCadSkills}
                    reverseDirection={false}
                />

                <SwiperLocalComponent
                    listCadSkills={listCadSkills}
                    reverseDirection={true}
                />


            </div>

        </section>
    )
};

function SwiperLocalComponent(props) {
    const { listCadSkills, reverseDirection } = props;
    return (
        <Swiper
            className='swiper_principal_skill'
            //effect='coverflow'
            slidesPerGroup={1}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            loopFillGroupWithBlank={true}
            grabCursor={true}
            centeredSlides={true}
            translate='yes'
            //onSlideChange={() => console.log('slide change')}
            //onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 5000, reverseDirection: reverseDirection }}
        >
            {
                listCadSkills.map((cards, index) => {
                    return (
                        <SwiperSlide className='swipe_slide_conten_skill' key={index} >
                            <CardSkillsComponent />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

function CardSkillsComponent(props) {
    const { requiereImage, href } = props;
    return (
        <div className='conten_card_skill' >
            <a href='/' style={{ width: '100%', height: '100%' }} >
                <img src='' style={{ width: '100%', height: '100%' }} />
            </a>
        </div>
    );
};
