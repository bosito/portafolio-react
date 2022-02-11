import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

import iconoSkills from '../../../svg/iconoSkills.svg';
import '../../../styles/proyect_style.css';

//swip stiles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

import web_storage_system from '../../../styles/images/web_storage_system.png';
import todo_list from '../../../styles/images/todo_list.png';
import rick_and_morty from '../../../styles/images/rick_and_morty.png';
import trivia_game from '../../../styles/images/trivia_game.png';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const data = [{
    uri_image: web_storage_system,
    link_page: 'https://crud-local-storage.vercel.app/',
    title: 'Crud',
    text: `web storage system`
}, {
    uri_image: todo_list,
    link_page: 'https://crud-api-academlo.vercel.app/',
    title: 'Crud api',
    text: `todolist`
}, {
    uri_image: rick_and_morty,
    link_page: 'https://rick-and-morty-app-opal.vercel.app/',
    title: 'Rick and Morty api',
    text: `data and curiosities`
}, {
    uri_image: trivia_game,
    link_page: 'https://my-trivia-game-pink.vercel.app/',
    title: 'Game',
    text: `trivia`
}];

export default function Projects() {
    const [listCadSkills, setListCadSkills] = useState([]);

    useEffect(() => {

        setListCadSkills(data);

    }, []);

    return (
        <Element className="proyect_vew" id='4' >
            <div className="contSwiper">

                <TitleComponent />

                <Swiper
                    className='swiper_principal'
                    effect='coverflow'
                    slidesPerGroup={1}
                    slidesPerView={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    grabCursor={true}
                    centeredSlides={true}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 5000, }}
                >
                    {
                        listCadSkills.map((cards, index) => {
                            return (
                                <SwiperSlide className='swipe_slide_conten'>
                                    <CardItem cards={cards} index={index} />
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>
            </div>
        </Element>
    )
};

function TitleComponent() {
    const titleProyectRef = useRef();

    useEffect(() => {

        if (titleProyectRef.current) {
            ScrollReveal().reveal(titleProyectRef.current, { reset: true, distance: '70px', origin: 'bottom', duration: 1000, delay: 500, easing: 'cubic-bezier(0.5, 0, 0, 1)' });
        };

    }, []);


    return (
        <div className="contenTitleProyects" ref={titleProyectRef} >
            <div className="contIcon_proyect" >
                <img src={iconoSkills} style={{ width: '100%', height: '100%', }} alt='icon_skill' />
            </div>
            <p className="txt_proyect">
                Projects
            </p>
        </div>
    );
};

function CardItem(props) {
    const { cards, index } = props;
    return (
        <div className='conten_card'>
            <div style={{ width: '90%', height: '90%' }}  >
                <img src={cards.uri_image} className='cont_img' alt={`card_number ${index}`} />
            </div>
            <a className='cont_efct_crd' href={cards.link_page} target="_blank" rel="noreferrer noopener" >
                <div className='lef'>
                    <p className='title_card' >{cards.title}</p>
                </div>
                <div className='rig' >
                    <p className='text_card' >{cards.text}</p>
                </div>
            </a>
        </div>
    );
};
