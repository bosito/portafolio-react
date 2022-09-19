import React, { useState, useRef, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import arrow_icon from '../../../../svg/uparrow_float_buton.svg';
import '../css/float_top_scroll.css';

export default function FloatTopScroll() {
    const buttonScrollRef = useRef(null);
    const [typeAnimation, setTypeAnimation] = useState(false);

    const navigation_down_bar = (event) => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            //buttonScrollRef.current.className = "float_top_scroll animation_open"
            setTypeAnimation(true);
        } else {
            //buttonScrollRef.current.className = "float_top_scroll animation_close"
            setTypeAnimation(false);
        }
    };

    useEffect(() => {

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