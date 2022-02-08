import React, { useState, useRef, useEffect } from 'react';
import '../styles/NavigationStyles.css';
import { header_data } from "../config/title_navigation_data";
import { Link } from 'react-scroll';

export default function NavigationHeader() {

    const fixtedHeaderRef = useRef();
    const [indexNavigation, setIndexNavigation] = useState(0);
    const [titleNavigation, setTitleNavigation] = useState([]);

    useEffect(() => {

        setTitleNavigation(header_data);

    }, []);

    useEffect(() => {

        const remove_select_nav = (e) => {
            const actual_scroll_value = e.currentTarget.scrollY;
            const windowHeigth = e.currentTarget.innerHeight;
            
            const val_limit_scroll = [0, windowHeigth, (windowHeigth*2), (windowHeigth*3)];

            if (actual_scroll_value >= val_limit_scroll[0]) {
                setIndexNavigation(0);
            } 
            if (actual_scroll_value >= val_limit_scroll[1]) {
                setIndexNavigation(1);
            }
            if (actual_scroll_value >= val_limit_scroll[2]) {
                setIndexNavigation(2);
            }
            if (actual_scroll_value >= val_limit_scroll[3]) {
                setIndexNavigation(3);
            }
        }

        window.addEventListener("scroll", remove_select_nav, false);

        return () => window.removeEventListener("scroll", remove_select_nav, false);

    }, []);

    window.onscroll = () => navigation_down_bar();

    const navigation_down_bar = () => {
        if (fixtedHeaderRef.current) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                fixtedHeaderRef.current.style.top = "0"
            } else {
                fixtedHeaderRef.current.style.top = "-60px"
            };
        };
    };

    const select_navigation = (index) => setIndexNavigation(index);

    return (
        <>
            <nav ref={fixtedHeaderRef} className="NavigationContainer  navigation_fixed" style={{}}>
                <div className="contenTitleNavigation" >
                    <p className="titleNavigation  t_efect" >Developer</p>
                </div>
                <div className="contenSubTitle" >
                    {
                        titleNavigation.map((data, index) => {
                            return (
                                <Link
                                    to={data.href_menu}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={400}
                                    onClick={() => select_navigation(index)}
                                    key={index}
                                >
                                    <p className={`${indexNavigation === index && "t_efect"} titleNavigation e_efect`} >{data.title}</p>
                                </Link>
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
                                <Link
                                    to={data.href_menu}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={400}
                                    onClick={() => select_navigation(index)}
                                    key={index}
                                >
                                    <p className={`${indexNavigation === index && "t_efect"} titleNavigation e_efect`} >{data.title}</p>
                                </Link>
                            )
                        })

                    }
                </div>
            </nav>

        </>
    )
}

//e.preventDefault();
