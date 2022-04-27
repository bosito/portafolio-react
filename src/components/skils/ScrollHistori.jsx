import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';
import appMosphera_logo from '../../styles/images/appMosphera_logo.JPG'

//import './scrollHistori.css';
import '../../styles/scrollHistori.css';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

//esta lista debe pasarse ya sea a una bd o un archivo data
const dataView = [{
    title: 'AppMosphera',
    description: 'Aplicación de seguridad y control de acceso más práctica e intuitiva del mercado.',
    data_image: {
        src: appMosphera_logo,
        alt: 'AppMosphera'
    },
    cargo: 'Web Developer - Mobile App Developer',
    description_cargo: 'My role is to maintain, correct and develop new modules for 3 web pages and 3 mobile applications.',
    inicio_colaboracion: 'Febrero 2021',
    final_colaboracion: 'Actualmente',
    imagenes_proyect: [],
    lisks_proyectos: ['https://play.google.com/store/apps/details?id=com.mobile.appmosphera_app&hl=es_MX']
}];

export default function ScrollHitori() {
    const [listHistori, setListHistori] = useState([]);

    useEffect(() => {
        setListHistori(dataView);
    }, []);

    return (
        <div className='conten_scroll' >
            {
                listHistori.length === 0 ?
                    null
                    :
                    listHistori.map((data, index) => {
                        return (
                            <Link key={index.toString()} to={{ pathname: 'projects_datos', state: data }} className='card_history' >
                                <img
                                    key={index.toString()}
                                    src={data.data_image.src}
                                    alt={data.data_image.alt}
                                    className='logo_empresa'
                                />
                                <p key={index.toString()} className='text_hty' >{data.title}</p>
                                <p key={index.toString()} className='text_hty sec_text' >{data.description}</p>
                            </Link>
                        )
                    })
            }
        </div>
    );
};