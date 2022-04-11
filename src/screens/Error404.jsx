import React from 'react';
import Lottie from 'react-lottie';
import error_404 from '../styles/lottie/error-404.json';

import '../styles/error_404.css'

export default function Error404() {
    return (
        <div className='cont_error' >

            <Lottie
                height={400}
                width={400}
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: error_404,
                    rendererSettings: {
                        preserveAspectRatio: 'slice',
                        scaleMode: 'Scale'
                    }
                }}
            />
            <p className='txt_not_found' >Page not found</p>

        </div>
    );
};