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
        src: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/242346804_242645137870969_8784603992420543858_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF3nW2zPE2KEUoiH-m-Bbu3wOSNZnu5MfrA5I1me7kx-s9SO0jGY7q7izRnCskyxmc6xHw9V0RHtHe1kt6FQNOI&_nc_ohc=zsmhfm2w1ZUAX_iD4-j&_nc_ht=scontent-qro1-1.xx&oh=00_AT9ke8UTMU4fO84jtGzBPD9IVxNSPfRzciWhIohSFZONVw&oe=6251B958',
        alt: 'AppMosphera'
    },
    cargo: 'Web Developer - Mobile App Developer',
    description_cargo: 'Mi funcion es la de dar mantenimiento, correccion y desarrollo de nuevos modulos para 3 paginas web y 3 aplicaciones moviles.',
    inicio_colaboracion: 'Febrero 2021',
    final_colaboracion: 'Actualmente',
    imagenes_proyect: ['https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/236285504_968248367359507_5773137331169422350_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=gYEt1h5TM_oAX9Sa0-m&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjYzODk1NTk3ODk5NzA1MzE4OA%3D%3D.2-ccb7-4&oh=00_AT87ZCE2e3MDIM7io9-_lr-5ABAha9vUbZyqNs5Rd3zDSw&oe=625AB97D&_nc_sid=30a2ef', '', ''],
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