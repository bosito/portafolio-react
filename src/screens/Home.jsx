import React, { Fragment, useRef, useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import Adorno from '../components/home/Adorno.jsx';
import Precentation from '../components/home/sections/Precentation.jsx';
import Projects from '../components/home/sections/Proyects.jsx';
import Skills from '../components/home/sections/Skills.jsx';

import arrow_icon from '../svg/uparrow_float_buton.svg';

import '../styles/aboutme.css';
import '../styles/adorno_style.css';
import '../styles/contact_style.css';
import '../styles/float_top_scroll.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

import adorno_svg from '../svg/adorno_file.svg';
//import adorno_svg2 from '../svg/adorno_file.svg';

export default function Home() {
    return (
        <Fragment>
            <Precentation />
            <Projects />
            {/* <Adorno backgroundImage={adorno_svg2} styleOption={{ height: 200,  justifyContent: 'center', alignItems: 'center' }} /> */}
            {/* <AboutMe /> */}
            <Skills />

            <Contact />
            <FolatTopScroll />
        </Fragment>
    );
};

// function AboutMe() {
//     return (
//         <section className="aboutme" id='2' >
//             {/* <HeaderSvg/> */}
//             <div className="aboutmeCont" >
//                 {/* <div className="contImgAbout" /> */}

//                 <div className="contInfoAbout">
//                     <h2 className="infoAbout  t_samp" style={{ fontSize: 30 }} >
//                         JS DEVELOPER
//                     </h2>
//                     <p className="infoAbout">

//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

function Contact() {
    return (
        <Scroll.Element className="contact" id='5' >
            <Adorno backgroundImage={adorno_svg} styleOption={{ position: 'absolute', bottom: 0 }} />
        </Scroll.Element>
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
            <img src={arrow_icon} style={{ width: '60%', height: '60%', }} alt='arrow_icon'  />
        </div>
    );
};