import React from 'react';
import { Link } from 'react-router-dom';

import MainMenu from '../components/header/MainMenu';
import HeaderUser from '../components/header/HeaderUser';

function Header(props) {
    return (
        <>
            <header className="header-sky">
                <div className="container">
                    {/*HEADER-TOP*/}
                    <div className="header-top">
                        <div className="header-top-left">
                            <span>
                                <i className="ion-android-cloud-outline" />
                                40 °C
                            </span>
                            <span>
                                <i className="ion-ios-location-outline" /> 133 Lý Thường Kiệt, Tp Đông Hà
                            </span>
                            <span>
                                <i className="fa fa-phone" aria-hidden="true" /> 0774-403-730
                            </span>
                        </div>

                        <HeaderUser />

                       
                    </div>
                    {/* END/HEADER-TOP */}
                </div>
                {/* MENU-HEADER */}
                <div className="menu-header">
                    <nav className="navbar navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <Link to={"/"}>
                                    <img src="/images/Home-1/sky-logo-header.png" alt="#" />
                                </Link>
                            </div>
                            <div className="collapse navbar-collapse">
                                <MainMenu />
                               
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;