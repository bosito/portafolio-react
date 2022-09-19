import React, { useState, forwardRef } from 'react';
import * as Scroll from 'react-scroll';
import Lottie from 'react-lottie';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import useAddCollectionFireStore from '../../../../hooks/useAddCollectionFireStore';

import uderConstrucion from '../../../../styles/lottie/under-construction.json';
import Adorno from '../../../../components/home/Adorno.jsx';

import adorno_svg from '../../../../svg/adorno_file.svg';
import mail_svg from '../../../../svg/mail_svg.svg';
import map_pin from '../../../../svg/map_pin_icon.svg';
import phone from '../../../../svg/local_phone.svg';
import linkeding from '../../../../svg/linkedin.svg';
import instagram from '../../../../svg/instagram.svg';
import gtithub from '../../../../svg/github.svg';
import enviarIcon from '../../../../svg/enviar.svg';

import '../css/contact_style.css';

export default function Contact() {
    const { addCollection } = useAddCollectionFireStore();
    const [proyectOrContact, setProyectOrContact] = useState(true);
    const [dataInputs, setDataInputs] = useState({
        name: '',
        email: '',
        asunto: '',
        menssage: ''
    });

    const chageInputsValue = (event) => setDataInputs({ ...dataInputs, [event.target.name]: event.target.value });

    const createNewContact = (event) => {
        event.preventDefault();
        if (Object.keys(dataInputs).length > 0) {
            if (dataInputs.name && dataInputs.email && dataInputs.asunto && dataInputs.menssage) {
                const create_add = dayjs().format('DD/MM/YYYY hh:mm a');
                addCollection({ ...dataInputs, create_add: create_add });
                toast.dark('Datos mandados con éxito', {
                    position: 'bottom-center',
                    autoClose: 2500,
                    closeOnClick: true,
                    progress: undefined
                });
                setDataInputs({ name: '', email: '', asunto: '', menssage: '' });
            } else {
                toast.error(
                    'Para mandar un mensaje todos los parámetros son obligatorios.', {
                    position: 'bottom-center',
                    autoClose: 2500,
                    closeOnClick: true,
                    progress: undefined
                });
            };
        };
    };

    return (
        <section>
            <Scroll.Element className="contact" id='5' >
                <div className="content_form" >

                    <HeaderContentButtons
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
                                        <a href="https://www.instagram.com/bosito12/?hl=es-la" target="_blank" rel="noreferrer noopener">
                                            <img src={instagram} alt="instagram" className='icon_net' />
                                        </a>
                                        <a href="https://github.com/bosito" target="_blank" rel="noreferrer noopener">
                                            <img src={gtithub} alt="gtithub" className='icon_net' />
                                        </a>
                                        <a href="https://www.linkedin.com/in/jose-luis-jimenez-91419a1a6/" target="_blank" rel="noreferrer noopener">
                                            <img src={linkeding} alt="linkeding" className='icon_net' />
                                        </a>
                                    </div>

                                </div>
                                <form className="view_cont_type works" style={{ flexDirection: 'column', alignItems: 'center' }} >

                                    <InputComponent
                                        name="name"
                                        onChange={chageInputsValue}
                                        placeholder="Name"
                                        value={dataInputs.name}
                                    />

                                    <InputComponent
                                        name="email"
                                        type='email'
                                        onChange={chageInputsValue}
                                        placeholder="Email"
                                        value={dataInputs.email}
                                    />

                                    <InputComponent
                                        name="asunto"
                                        onChange={chageInputsValue}
                                        placeholder="Business"
                                        value={dataInputs.asunto}
                                    />

                                    <div className='inpu_cont  inp_messag' >
                                        <textarea
                                            type="text"
                                            name="menssage"
                                            value={dataInputs.menssage}
                                            placeholder='Menssage'
                                            onChange={chageInputsValue}
                                            className='input'
                                            multiple={true}
                                        />
                                    </div>

                                    <div className='inpu_cont' style={{ border: 0, justifyContent: 'flex-end' }}>
                                        <button className='but_envi' onClick={createNewContact} >
                                            <img src={enviarIcon} alt="message_icon" style={{ width: 20, height: 20 }} />
                                            Send
                                        </button>
                                    </div>

                                </form>
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

function HeaderContentButtons({ proyectOnPress, contactOnPress }) {
    return (
        <div className="conten_tabs" >
            <div style={{ flex: 1, display: 'flex' }} >
                <button className='buton_tabs' onClick={proyectOnPress} >
                    project
                </button>
                <button className='buton_tabs' onClick={contactOnPress} >
                    Contact
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

const InputComponent = forwardRef((props, ref) => {
    const { name, placeholder, value, onChange, type = 'text' } = props;
    return (
        <div className='inpu_cont' >
            <input
                ref={ref}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='input'
                required={true}
                maxLength={25}
            />
        </div>
    );
});

