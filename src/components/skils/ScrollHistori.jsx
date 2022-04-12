import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

//import './scrollHistori.css';
import '../../styles/scrollHistori.css';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

//esta lista debe pasarse ya sea a una bd o un archivo data
const dataView = [{
    title: 'AppMosphera',
    description: 'Aplicación de seguridad y control de acceso más práctica e intuitiva del mercado.',
    data_image: {
        src: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/278332868_4838562856271666_2369191661829838127_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHOKD4Gd-JIJr8w223qZZ-pTrreRpHO0UROut5Gkc7RROwu_Ncqb9YO82kr6rZ3GPcTN9aobpuL33G6FFWbiX5b&_nc_ohc=8ryQlDnXIvcAX_ANwbj&_nc_ht=scontent-qro1-1.xx&oh=00_AT9bjsY3R7dRvtT4UROuaVvwkO-2712i_36UkT_hIIMwuA&oe=6258DA23',
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
                                    src={data.data_image.src}
                                    alt={data.data_image.alt}
                                    className='logo_empresa'
                                />
                                <p className='text_hty' >{data.title}</p>
                                <p className='text_hty sec_text' >{data.description}</p>
                            </Link>
                        )
                    })
            }
        </div>
    );
};