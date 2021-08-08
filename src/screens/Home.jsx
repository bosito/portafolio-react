import React, { Fragment } from 'react';
import Navigation from '../components/Navigation.jsx';
import HeaderSvg from '../components/home/HeaderSvg.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';

//styles
import iconoSkills from '../svg/iconoSkills.svg';
import '../styles/Precentacion.css';
import '../styles/aboutme.css';
import '../styles/skills.css';
//import 'swiper/swiper.scss';

export default function Home() {
    return (
        <Fragment>
            <Precentation />
            <AboutMe />
            <Skills />
            <Projects />
        </Fragment>
    );
};

function Precentation() {
    return (
        <div className="PrecentacionContainer">
            <Navigation />
            <div className="contenTitlePrecentacion">
                <div className="titlePrecentacion">
                    <p className="t_precent" >Hi Welcome to my World</p>
                    <p className="t_precent" >I am <samp className="t_samp">Js Developer</samp> </p>
                </div>
            </div>
        </div>
    );
};

function AboutMe() {
    return (
        <div className="aboutme" >
            {/* <HeaderSvg/> */}
            <div className="aboutmeCont" >
                <div className="contImgAbout"></div>

                <div className="contInfoAbout">
                    <h2 className="infoAbout  t_samp" style={{ fontSize: 30 }} >JS DEVELOPER</h2>
                    <p className="infoAbout">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis porro odit vel animi, aspernatur fugit ipsa perspiciatis mollitia repudiandae!
                        Architecto necessitatibus reprehenderit reiciendis ipsam itaque nostrum veniam omnis eveniet facere!
                    </p>
                </div>
            </div>
        </div>
    );
};

function Skills() {
    return (
        <div className="skills">
            <div className="contenTitleSkills">
                <div className="contIconskills" >
                    <img src={iconoSkills} style={{ width: '100%', height: '100%', }} />
                </div>
                <p className="txtSkils">
                    My Skills
                </p>
            </div>
            <div className="contSwiper">

            </div>

            {/* <Swiper>
                <SwiperSlide>
                    <p>wolas que hay</p>
                </SwiperSlide>
            </Swiper> */}

        </div>
    )
}

function Projects() {
    return (
        <div>

        </div>
    )
}