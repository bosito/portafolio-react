import React, { useRef, useEffect } from 'react';
import NavigationHeader from '../../NavigationHeader';
import ScrollReveal from 'scrollreveal';
import { Element } from 'react-scroll';

import '../../../styles/Precentacion.css';

export default function Precentation() {
    const glassRef = useRef();

    useEffect(() => {

        if (glassRef.current) {
            ScrollReveal().reveal(glassRef.current, { reset: true, scale: 0, duration: 1000, delay: 500 });
        };

    }, []);

    return (
        <section>
            <Element className="PrecentacionContainer" id='1' >
                <NavigationHeader />

                <div className="contenTitlePrecentacion">

                    <div className="titlePrecentacion" ref={glassRef} >
                        <p className="t_precent" >Hi Welcome to my World</p>
                        <p className="t_precent" >I am  </p> <samp className="t_samp">{"Web Developer"}</samp>

                        <a href='https://drive.google.com/file/d/1QML5__0Klg-aho4pJXB-R46Tw41siRKB/view' target="_blank" >
                            <div className='btn_cv' >
                                <p>- DOWLOAD CV -</p>
                            </div>
                        </a>



                    </div>

                </div>

            </Element>
        </section>
    );
};
