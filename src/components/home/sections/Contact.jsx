import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import Lottie from 'react-lottie';

import uderConstrucion from '../../../styles/lottie/under-construction.json';
import Adorno from '../../../components/home/Adorno.jsx';
import adorno_svg from '../../../svg/adorno_file.svg';
import mail_svg from '../../../svg/mail_svg.svg';
import map_pin from '../../../svg/map_pin_icon.svg'
import phone from '../../../svg/local_phone.svg';
import facebook from '../../../svg/facebook.svg';
import linkeding from '../../../svg/linkedin.svg';
import instagram from '../../../svg/instagram.svg';
import gtithub from '../../../svg/github.svg';
import enviarIcon from '../../../svg/enviar.svg'

import '../../../styles/contact_style.css';

export default function Contact() {
    const [proyectOrContact, setProyectOrContact] = useState(true);
    const [dataImputs, setDataImputs] = useState({});

    const chageInputsValue = (e) => setDataImputs({ [e.target.name]: e.target.value });

    return (
        <section>
            <Scroll.Element className="contact" id='5' >
                <div className="content_form" >

                    <HeaderContenButons
                        contactOnPress={() => setProyectOrContact(true)}
                        proyectOnPress={() => setProyectOrContact(false)}
                    />

                    {
                        proyectOrContact ? (
                            <div className="view_cont_type" >
                                <div className="view_cont_type networks" >

                                    <DataForm
                                        title="bosito321@gmail.com"
                                        icon={mail_svg}
                                    />

                                    <DataForm
                                        title="Quintana Roo, Cancún, México"
                                        icon={map_pin}
                                    />

                                    <DataForm
                                        title="998 180 1932"
                                        icon={phone}
                                    />

                                    <div className="cont_buton_netkork" >
                                        <a href="https://www.facebook.com/jlRocerTraseur" target="_blank">
                                            <img src={facebook} alt="facebook" className='icon_net' />
                                        </a>
                                        <a href="https://www.instagram.com/bosito12/?hl=es-la" target="_blank">
                                            <img src={instagram} alt="instagram" className='icon_net' />
                                        </a>
                                        <a href="https://github.com/bosito" target="_blank">
                                            <img src={gtithub} alt="gtithub" className='icon_net' />
                                        </a>
                                        <a href="https://www.linkedin.com/in/jose-luis-jimenez-91419a1a6/" target="_blank">
                                            <img src={linkeding} alt="linkeding" className='icon_net' />
                                        </a>
                                    </div>

                                </div>
                                <div className="view_cont_type works" style={{ flexDirection: 'column', alignItems: 'center' }} >

                                    <InputComponent
                                        name="nombre"
                                        onChange={chageInputsValue}
                                        placeholder="Nombre"
                                        value={dataImputs.name}
                                    />

                                    <InputComponent
                                        name="email"
                                        onChange={chageInputsValue}
                                        placeholder="Correo Electronico"
                                        value={dataImputs.email}
                                    />

                                    <InputComponent
                                        name="asunto"
                                        onChange={chageInputsValue}
                                        placeholder="Asunto"
                                        value={dataImputs.asunto}
                                    />

                                    <div className='inpu_cont  inp_messag' >
                                        <textarea
                                            type="text"
                                            name="menssage"
                                            value={dataImputs.menssage}
                                            placeholder='Mensaje'
                                            onChange={chageInputsValue}
                                            className='input'
                                            multiple={true}
                                        />
                                    </div>

                                    <div className='inpu_cont' style={{ border: 0, justifyContent: 'flex-end' }}>
                                        <button className='but_envi' >
                                            <img src={enviarIcon} alt="message_icon" style={{ width: 20, height: 20 }} />
                                            Send
                                        </button>
                                    </div>


                                </div>
                            </div>
                        ) : (
                            <div className="view_cont_type" style={{ justifyContent: 'center', alignItems: 'center' }} >
                                
                                <Lottie
                                    height={400}
                                    width={400}
                                    options={{
                                        loop: true,
                                        autoplay: !proyectOrContact,
                                        animationData: uderConstrucion,
                                        rendererSettings: {
                                            preserveAspectRatio: 'slice',
                                            scaleMode: 'noScale'
                                        }
                                    }}
                                />

                            </div>
                        )
                    }
                </div>
                <Adorno backgroundImage={adorno_svg} styleOption={{ position: 'absolute', bottom: 0 }} />
            </Scroll.Element>
        </section>
    );
};

function HeaderContenButons({ proyectOnPress, contactOnPress }) {
    return (
        <div className="conten_tabs" >
            <div style={{ flex: 1, display: 'flex' }} >
                <button className='buton_tabs' onClick={proyectOnPress} >
                    Proyecto
                </button>
                <button className='buton_tabs' onClick={contactOnPress} >
                    Contacto
                </button>
            </div>
            <div style={{ width: '100%', height: 0.5, backgroundColor: 'gray' }} />
        </div>
    );
};

function DataForm({ icon, title, extraStiles = {} }) {
    return (
        <div className='form_cont' style={{ ...extraStiles }} >
            <img className='icon_cont' src={icon} alt="img_icon" />
            <p>{title}</p>
        </div>
    );
};

function InputComponent({ name, placeholder, value, onChange }) {
    return (
        <div className='inpu_cont' >
            <input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='input'
                maxLength={25}
            />
        </div>
    );
};

