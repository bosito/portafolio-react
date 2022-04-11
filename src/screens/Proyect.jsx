import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import '../styles/scrollHistori_proyect.css';

export default function Project() {
    const location = useLocation();
    const [params, setParams] = useState({});
    //pensar en eliminar este estado
    const [imagenesProyect, setImagenesProyect] = useState('');

    useEffect(() => {

        if (location.state) {
            setParams(location.state);
        };

        if (location.state) {
            if (location.state.imagenes_proyect) {
                setImagenesProyect(location.state.imagenes_proyect[0])
            }

        }

    }, [location.state]);

    useEffect(() => {

        console.log(params);

    }, [params]);

    return (
        <div className="cont_proyect" >
            <img src={imagenesProyect} alt={'test1'} className='image_back' />
            <div className="cont_deg" >
                <div className="cont_data_proy" >
                    <div className="cont_image_proy" >
                        <img
                            src={params?.data_image?.src}
                            alt={params?.data_image?.alt}
                            className='img_proy'
                        />
                        <p className="txt_proy" >{params?.title}</p>
                        <p className="txt_proy" >{params?.inicio_colaboracion} - {params?.final_colaboracion}</p>
                    </div>
                    {/* <div className="cont_description_proy" >
                        <p>{params?.cargo}</p>
                        <p>{params?.description}</p>
                        <p>{params?.description_cargo}</p>
                    </div> */}
                </div>
            </div>

        </div>
    )
}