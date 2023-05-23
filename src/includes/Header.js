import React from 'react';
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
                                18 °C
                            </span>
                            <span>
                                <i className="ion-ios-location-outline" /> 121 King Str, Melbourne
                                Victoria
                            </span>
                            <span>
                                <i className="fa fa-phone" aria-hidden="true" /> 1-548-854-8898
                            </span>
                        </div>
                        <HeaderUser/>
                    </div>
                    {/* END/HEADER-TOP */}
                </div>
                {/* MENU-HEADER */}
                <div className="menu-header">
                    <nav className="navbar navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header ">
                                <button
                                    type="button"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar " />
                                    <span className="icon-bar " />
                                    <span className="icon-bar " />
                                </button>
                                <a
                                    className="navbar-brand"
                                    href="file:///E:/Xampp/htdocs/skyline/index.html"
                                    title="Skyline"
                                >
                                    <img src="/images/Home-1/sky-logo-header.png" alt="#" />
                                </a>
                            </div>
                            <div className="collapse navbar-collapse">
                               <MainMenu/>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* END / MENU-HEADER */}
            </header>
        </>
    );
}

export default Header;