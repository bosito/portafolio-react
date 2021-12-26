import React, { useState, useRef, useEffect } from 'react';
import '../styles/NavigationStyles.css';
import { header_data } from "../config/title_navigation_data";

export default function NavigationHeader() {

    const fixtedHeaderRef = useRef();
    const [indexNavigation, setIndexNavigation] = useState(0);
    const [titleNavigation, setTitleNavigation] = useState([]);

    window.onscroll = () => navigation_down_bar();

    useEffect(() => {

        if (header_data) {
            setTitleNavigation(header_data); 
            console.log('data title -->', header_data[1].href_menu);  
        };

    }, [header_data]);

    const select_navigation = (e, index) => {
        //e.preventDefault();
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
                        titleNavigation.map((data, index) => {
                            return (
                                <a href={data.href_menu} key={index} onClick={(e) => select_navigation(e, index)} >
                                    <p className={`${indexNavigation === index && "t_efect"} titleNavigation e_efect`} >{data.title}</p>
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
                        titleNavigation.map((data, index) => {
                            return (
                                <a href={data.href_menu} key={index} onClick={(e) => select_navigation(e, index)} >
                                <p className={`${indexNavigation === index && "t_efect"} titleNavigation e_efect`} >{data.title}</p>
                            </a>
                            )
                        })

                    }
                </div>
            </nav>

        </>
    )
}
