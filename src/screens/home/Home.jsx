import React, { Fragment } from 'react';
import Precentation from '../../components/home/sections/Precentation.jsx';
import Projects from '../../components/home/sections/Proyects.jsx';
import Skills from '../../components/home/sections/Skills.jsx';
import Contact from './core/componets/Contact.jsx';
import FloatTopScroll from './core/componets/FloatTopScroll.jsx';

import '../../styles/aboutme.css';
import '../../styles/adorno_style.css';
import './core/css/separator.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

import herard_animate from '../../svg/herard_animate.svg';

export default function Home() {
    return (
        <Fragment>
            <Precentation />
            <Separator />
            <Projects />
            <Skills />
            <Contact />
            <FloatTopScroll />
        </Fragment>
    );
};

function Separator() {
    return (
        <div className="separator" >
            <p className='slogan'>Made with <samp className='slog_samp' >love</samp>, not with a keyboard</p>
            <img src={herard_animate} alt="slogan" style={{ width: 60, height: 30 }} />
        </div>
    );
};

