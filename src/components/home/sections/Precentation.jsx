import React, { useRef, useEffect } from 'react';
import NavigationHeader from '../../NavigationHeader';
import ScrollReveal from 'scrollreveal';

import '../../../styles/Precentacion.css';

export default function Precentation() {
    const glassRef = useRef();

    useEffect(() => {

        if (glassRef.current) {
            ScrollReveal().reveal(glassRef.current,{ reset: true, delay: 500 })
        };

    }, []);

    return (
        <section className="PrecentacionContainer" id='1' >
            <NavigationHeader />

            <div className="contenTitlePrecentacion">

                <div className="titlePrecentacion" ref={glassRef} >
                    <p className="t_precent" >Hi Welcome to my World</p>
                    <p className="t_precent" >I am <samp className="t_samp">Js Developer</samp> </p>
                </div>

            </div>


        </section>
    );
};
