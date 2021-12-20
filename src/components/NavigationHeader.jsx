import React, { useState, useRef } from 'react';
import '../styles/NavigationStyles.css';

export default function NavigationHeader() {

    const fixtedHeaderRef = useRef();
    const [indexNavigation, setIndexNavigation] = useState(0);
    const titleNavigation = ["Home", "About", "Skills", "Projects", "Contact", "Blog"];

    window.onscroll = () => navigation_down_bar();

    const select_navigation = (e, index) => {
        e.preventDefault();
        setIndexNavigation(index);
    };

    const navigation_down_bar = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            fixtedHeaderRef.current.style.top = "0"
        } else {
            fixtedHeaderRef.current.style.top = "-60px"
        }
    };

    return (
        <>
            <nav ref={fixtedHeaderRef} className="NavigationContainer  navigation_fixed" >
                <div className="contenTitleNavigation" >
                    <p className="titleNavigation  t_efect" >Developer</p>
                </div>
                <div className="contenSubTitle" >
                    {
                        titleNavigation.map((title, index) => {
                            return (
                                <a href="/" key={index} onClick={(e) => select_navigation(e, index)} >
                                    <p className={`${indexNavigation === index && "t_efect"} titleNavigation e_efect`} >{title}</p>
                                </a>
                            )
                        })

                    }
                </div>
            </nav>

            <nav className="NavigationContainer" >
                <div className="contenTitleNavigation" >
                    <p className="titleNavigation  t_efect" >Developer</p>
                </div>
                <div className="contenSubTitle" >
                    {
                        titleNavigation.map((title, index) => {
                            return (
                                <a href="/" key={index} onClick={(e) => select_navigation(e, index)} >
                                    <p className={`${indexNavigation === index && "t_efect"} titleNavigation e_efect`} >{title}</p>
                                </a>
                            )
                        })

                    }
                </div>
            </nav>

        </>
    )
}
