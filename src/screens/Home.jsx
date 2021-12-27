import React, { Fragment } from 'react';
import Precentation from '../components/home/sections/Precentation.jsx';
import Projects from '../components/home/sections/Proyects.jsx';
import Skills from '../components/home/sections/Skills.jsx';

import '../styles/aboutme.css';
import '../styles/adorno_style.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

import adorno_svg from '../svg/adorno_file.svg';

export default function Home() {
    return (
        <Fragment>
            <Precentation />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Adorno backgroundImage={adorno_svg} />
        </Fragment>
    );
};

function AboutMe() {
    return (
        <section className="aboutme" id='2' >
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

function Contact() {
    return (
        <section id='5' >

        </section>
    );
};

function Adorno({ backgroundImage, styleOption={} }) {
    return (
        <div
            className='adorno'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#131414',
                ...styleOption
            }}
        />
    );
};