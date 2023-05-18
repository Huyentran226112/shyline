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
                                    <a href="login.html" title="LOGIN" className="dropdown-toggle">
                                        LOGIN
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a
                                        href="register.html"
                                        title="REGISTER"
                                        className="dropdown-toggle"
                                    >
                                        REGISTER
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        USD <b className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="active">
                                            <a href="#">USD</a>
                                        </li>
                                        <li>
                                            <a href="#">EUR</a>
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
                                    <img src="images/Home-1/sky-logo-header.png" alt="#" />
                                </a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown ">
                                        <a
                                            href="index.html"
                                            title="Home"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Home
                                            <b className="caret" />
                                        </a>
                                    </li>
                                    <li className="dropdown ">
                                        <a
                                            href="room_1.html"
                                            title="Room & Rate"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Room &amp; Rate
                                            <b className="caret" />
                                        </a>
                                        <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                            <li>
                                                <a href="room_1.html" title="">
                                                    Room 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="room_detail.html" title="">
                                                    Room Detail
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown ">
                                        <a
                                            href="#"
                                            title="  Page"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Page
                                            <b className="caret" />
                                        </a>
                                        <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                            <li>
                                                <a href="guestbook.html" title="">
                                                    Guest Book
                                                </a>
                                            </li>
                                            <li className="submenu-hover1">
                                                <a
                                                    href="event_page_1.html"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                >
                                                    Events <b className="caret" />
                                                </a>
                                                <ul className="dropdown-menu dropdown-margin">
                                                    <li>
                                                        <a href="event_page_1.html">Events </a>
                                                    </li>
                                                    <li>
                                                        <a href="event_page_2.html">Events Fullwidth</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="attractions.html" title="">
                                                    Attractions
                                                </a>
                                            </li>
                                            <li className="submenu-hover1">
                                                <a
                                                    href="blog.html"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                >
                                                    Blog <b className="caret" />
                                                </a>
                                                <ul className="dropdown-menu dropdown-margin">
                                                    <li>
                                                        <a href="blog.html">Blog </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog_detail.html">Blog Detail</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="submenu-hover1">
                                                <a
                                                    href="restaurant_1.html"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                >
                                                    Restaurant <b className="caret" />
                                                </a>
                                                <ul className="dropdown-menu dropdown-margin">
                                                    <li>
                                                        <a href="restaurant_1.html">Restaurant 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="restaurant_2.html">Restaurant 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="restaurant_3.html">Restaurant 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="restaurant_4.html">Restaurant 4</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="submenu-hover1">
                                                <a
                                                    href="tems_condition_1.html"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                >
                                                    Tems Condition <b className="caret" />
                                                </a>
                                                <ul className="dropdown-menu dropdown-margin">
                                                    <li>
                                                        <a href="tems_condition_1.html">Tems Condition 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="tems_condition_2.html">Tems Condition 2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="404_page.html" title="">
                                                    404 Page
                                                </a>
                                            </li>
                                            <li>
                                                <a href="comming_soon.html" title="">
                                                    Comming Soon
                                                </a>
                                            </li>
                                            <li>
                                                <a href="check_out.html" title="">
                                                    Check Out
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown ">
                                        <a
                                            href="reservation_1.html"
                                            title="Reservation"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            RESERVATION
                                            <b className="caret" />
                                        </a>
                                        <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                            <li>
                                                <a href="reservation_1.html" title="">
                                                    Reservation 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="reservation_2.html" title="">
                                                    Reservation 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="reservation_3.html" title="">
                                                    Reservation 3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="reservation_4.html" title="">
                                                    Reservation 4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="reservation_5.html" title="">
                                                    Reservation 5
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown ">
                                        <a
                                            href="gallery_1.html"
                                            title="Gallery"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Gallery <b className="caret" />
                                        </a>
                                        <ul className="dropdown-menu icon-fa-caret-up submenu-hover">
                                            <li>
                                                <a href="gallery_1.html" title="">
                                                    Gallery 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="gallery_2.html" title="">
                                                    Gallery 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="gallery_3.html" title="">
                                                    Gallery 3
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html" title="About">
                                            About
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