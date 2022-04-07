import React, { } from 'react';
//import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

import './scrollHistori.css'

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function ScrollHitori() {
    return (
        <div className='conten_scroll' >
            <div className='' >
                <img
                    src='https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/242346804_242645137870969_8784603992420543858_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF3nW2zPE2KEUoiH-m-Bbu3wOSNZnu5MfrA5I1me7kx-s9SO0jGY7q7izRnCskyxmc6xHw9V0RHtHe1kt6FQNOI&_nc_ohc=zsmhfm2w1ZUAX_iD4-j&_nc_ht=scontent-qro1-1.xx&oh=00_AT9ke8UTMU4fO84jtGzBPD9IVxNSPfRzciWhIohSFZONVw&oe=6251B958'
                    alt="AppMosphera"
                    className='logo_empresa'
                />
                <p>AppMosphera</p>
            </div>
        </div>
    );
};