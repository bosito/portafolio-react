import React, { Fragment, useRef, useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import Precentation from '../components/home/sections/Precentation.jsx';
import Projects from '../components/home/sections/Proyects.jsx';
import Skills from '../components/home/sections/Skills.jsx';
import Contact from '../components/home/sections/Contact.jsx';

import arrow_icon from '../svg/uparrow_float_buton.svg';

import '../styles/aboutme.css';
import '../styles/adorno_style.css';
import '../styles/separator.css';
import '../styles/float_top_scroll.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

import herard_animate from '../svg/herard_animate.svg';
export default function Home() {
    return (
        <Fragment>
            <Precentation />
            <div className="separator" >
                <p className='slogan'>Made with <samp className='slog_samp' >love</samp>, not with a keyboard</p>
                <img src={herard_animate} alt="slogan" style={{ width: 60, height: 30 }} />
            </div>
            {/* <AboutMe /> */}
            <Projects />
            <Skills />
            <Contact />
            <FolatTopScroll />
        </Fragment>
    );
};

function FolatTopScroll() {
    const buttonScrollRef = useRef();
    const [typeAnimation, setTypeAnimation] = useState(false);

    useEffect(() => {

        const navigation_down_bar = (e) => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                //buttonScrollRef.current.className = "float_top_scroll animation_open"
                setTypeAnimation(true);
            } else {
                //buttonScrollRef.current.className = "float_top_scroll animation_close"
                setTypeAnimation(false);
            }
        };

        window.addEventListener("scroll", navigation_down_bar, true);

        return () => window.removeEventListener("scroll", navigation_down_bar, true);

    }, []);

    const scrollToTop = () => Scroll.animateScroll.scrollToTop();

    return (
        <div
            className={`float_top_scroll ${typeAnimation ? "animation_open" : "animation_close"}`}
            ref={buttonScrollRef}
            onClick={scrollToTop}
        >
            <img src={arrow_icon} style={{ width: '60%', height: '60%', }} alt='arrow_icon' />
        </div>
    );
};