import React from 'react';

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
                        <div className="header-top-right">
                            <ul>                             
                                <li className="dropdown">
                                    <a
                                        href="/register"
                                        title="REGISTER"
                                        className="dropdown-toggle"
                                    >
                                        Đăng ký
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        Đăng nhập <b className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="active">
                                            <a href="/login">Đăng nhập</a>
                                        </li>
                                        <li>
                                            <a href="/">Đăng xuất</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        ENG <b className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="active">
                                            <a href="#">ENG</a>
                                        </li>
                                        <li>
                                            <a href="#">JP</a>
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
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
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="/" title="">
                                            home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/room" title="About">
                                           Room
                                        </a>
                                    </li>
                                
                                    <li>
                                        <a href="contact.html" title="Contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
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