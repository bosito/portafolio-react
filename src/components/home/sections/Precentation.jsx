import React from 'react';
import NavigationHeader from '../../NavigationHeader';

import '../../../styles/Precentacion.css';

export default function Precentation() {
    return (
        <section className="PrecentacionContainer" >
            <NavigationHeader />
            <div className="contenTitlePrecentacion">
                <div className="titlePrecentacion">
                    <p className="t_precent" >Hi Welcome to my World</p>
                    <p className="t_precent" >I am <samp className="t_samp">Js Developer</samp> </p>
                </div>
            </div>
        </section>
    );
};
