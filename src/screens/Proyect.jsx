import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import imageFondo from '../styles/images/fondo2.png'

import '../styles/scrollHistori_proyect.css';

export default function Project() {
    const location = useLocation();
    const [params, setParams] = useState({});

    useEffect(() => {

        if (location.state) {
            setParams(location.state);
        };

    }, [location.state]);

    return (
        <div className="cont_proyect" >
            <img src={imageFondo} alt={'test1'} className='image_back' />
            <div className="cont_deg" >
                <div className="cont_data_proy" >
                    <div className="cont_image_proy" >
                        <img
                            src={params?.data_image?.src}
                            alt={params?.data_image?.alt}
                            className='img_proy'
                        />
                        <p className="txt_proy" style={{ marginTop: 10 }}>{params?.title}</p>
                        <p className="txt_proy" >{params?.inicio_colaboracion} - {params?.final_colaboracion}</p>
                    </div>
                    <div className="cont_description_proy" >
                        <p className="txt_proy tlt_proy" >{params?.cargo}</p>
                        <p className="txt_proy des_proy " >{params?.description_cargo}</p>
                        <p className="txt_proy des_proy " >{params?.description}</p>

                        <a href={params?.lisks_proyectos} target="_blank" rel="noreferrer noopener" className="buton_proy">
                           <p>saber mas</p> 
                        </a>

                    </div>
                </div>
            </div>

        </div>
    )
}