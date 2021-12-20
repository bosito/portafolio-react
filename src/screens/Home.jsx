import React, { Fragment, useState } from 'react';
import Precentation from '../components/home/sections/Precentation.jsx';
import NavigationHeader from '../components/NavigationHeader.jsx';
import HeaderSvg from '../components/home/HeaderSvg.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

//styles
import iconoSkills from '../svg/iconoSkills.svg';

import '../styles/aboutme.css';
import '../styles/skills.css';
import '../styles/adorno_style.css';
import '../styles/proyect_style.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";


SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Home() {
    return (
        <Fragment>
            <Precentation />
            <AboutMe />
            <Skills />
            <Adorno/>
            <Projects />
            <Contact />
        </Fragment>
    );
};

function AboutMe() {
    return (
        <section className="aboutme" >
            {/* <HeaderSvg/> */}
            <div className="aboutmeCont" >
                <div className="contImgAbout" />

                <div className="contInfoAbout">
                    <h2 className="infoAbout  t_samp" style={{ fontSize: 30 }} >JS DEVELOPER</h2>
                    <p className="infoAbout">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis porro odit vel animi, aspernatur fugit ipsa perspiciatis mollitia repudiandae!
                        Architecto necessitatibus reprehenderit reiciendis ipsam itaque nostrum veniam omnis eveniet facere!
                    </p>
                </div>
            </div>
        </section>
    );
};

function Skills() {
    const [listCadSkills, setListCadSkills] = useState(['test', 'test', 'test']);
    return (
        <section className="skills">
            <div className="contenTitleSkills">
                <div className="contIconskills" >
                    <img src={iconoSkills} style={{ width: '100%', height: '100%', }} />
                </div>
                <p className="txtSkils">
                    My Skills
                </p>
            </div>
            <div className="contSwiper">
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

function Adorno() {
    return(
        <div className='adorno' >
                
        </div>
    )
}

function Projects() {
    const [listCadSkills, setListCadSkills] = useState(['test', 'test', 'test']);
    return (
        <section className="proyect">

            <div className="contenTitleProyects">
                <div className="contIcon_proyect" >
                    <img src={iconoSkills} style={{ width: '100%', height: '100%', }} />
                </div>
                <p className="txt_proyect">
                    Projects
                </p>
            </div>

            <div className="contSwiper">
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

function Contact() {
    return (
        <section>

        </section>
    )
}