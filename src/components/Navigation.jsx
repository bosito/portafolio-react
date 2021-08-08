import React from 'react';
import '../styles/NavigationStyles.css';

export default function Navigation() {

    const titleNavigation = ["Home", "About", "Skills", "Projects"];

    return (
        <div className="NavigationContainer">
            <div className="contenTitleNavigation" >
                <p className="titleNavigation  t_efect" >Developer</p>
            </div>
            <div className="contenSubTitle" >
                {
                    titleNavigation.map((title) => {
                        return (
                            <a href="/#" >
                                <p className="titleNavigation e_efect" >{title}</p>
                            </a>
                        )
                    })

                }
            </div>
        </div>
    )
}
