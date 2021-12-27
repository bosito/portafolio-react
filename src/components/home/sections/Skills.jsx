import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

//list_images
import { images_list_skils } from '../../../config/inages_list_skills';

//styles
import '../../../styles/skills.css';
import iconoSkills from "../../../styles/images/list.png";

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Skills() {
    const [listCadSkills, setListCadSkills] = useState([]);

    useEffect(() => {

        setListCadSkills(images_list_skils);

    }, []);

    return (
        <section className="skills" id='3' >

            <div className="contSwiper_skill">

                <TilteComponent title="My Skills" />

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
    );
};

function TilteComponent({ title }) {
    return (
        <div className="contenTitleSkills">
            <div className="contIconskills" >
                <img src={iconoSkills} style={{ width: '100%', height: '100%', }} alt="img_title" />
            </div>
            <p className="txtSkils">
                {title}
            </p>
        </div>
    );
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
            autoplay={{ delay: 2000, reverseDirection: reverseDirection }}
        >
            {
                listCadSkills.map((cards, index) => {
                    return (
                        <SwiperSlide className='swipe_slide_conten_skill' key={index} >
                            <CardSkillsComponent requiereImage={cards} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

function CardSkillsComponent({ requiereImage }) {
    return (
        <div className='conten_card_skill' >

            <img
                src={requiereImage}
                style={{ width: '100%', height: '100%' }}
            />

        </div>
    );
};
