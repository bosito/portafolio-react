import React, { Fragment } from 'react';
import Precentation from '../components/home/sections/Precentation.jsx';
import Projects from '../components/home/sections/Proyects.jsx';
import Skills from '../components/home/sections/Skills.jsx';

import '../styles/aboutme.css';
import '../styles/adorno_style.css';
import '../styles/contact_style.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

import adorno_svg from '../svg/adorno_file.svg';
import adorno_svg2 from '../svg/adorno_file.svg';

export default function Home() {
    return (
        <Fragment>
            <Precentation />
            <Projects />
            {/* <Adorno backgroundImage={adorno_svg2} styleOption={{ height: 200,  justifyContent: 'center', alignItems: 'center' }} /> */}
            {/* <AboutMe /> */}
            <Skills />
            
            <Contact />
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
        <section className="contact" id='5' >
             <Adorno backgroundImage={adorno_svg} styleOption={{ position: 'absolute', bottom: 0 }}/>
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