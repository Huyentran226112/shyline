import React from 'react';
import OwlCarousel from 'react-owl-carousel';
function Slider(props) {
    return (
        <>
            <section className="section-slider height-v">
                <OwlCarousel loop={true} autoplay={true} items={1} id="index12" className="owl-carousel  owl-theme">
                    <div className="item">
                        <img
                            alt="Third slide"
                            src="images/Home-1/Slider-v1.jpg"
                            className="img-responsive"
                        />
                        <div className="carousel-caption">
                            <h1>Chào mừng đến với đường chân trời </h1>
                            <p>
                                <span className="line-t" />
                                KHÁCH SẠN &amp; KHU NGHỈ DƯỠNG <span className="line-b" />
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <img
                            alt="Third slide"
                            src="images/Home-2/Slider-v2.jpg"
                            className="img-responsive"
                        />
                        <div className="container">
                            <div className="carousel-caption ">
                                <h1 className="v2">Tận hưởng trải nghiệm sang trọng</h1>
                                <p className="p-v2">
                                    <span className="line-t" />
                                    KHÁCH SẠN &amp; KHU NGHỈ DƯỠNG <span className="line-b" />
                                </p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                <div className="check-avail">
                    <div className="container">
                        <div className="arrival date-title ">
                            <label>Arrival Date </label>
                            <div
                                id="datepicker"
                                className="input-group date"
                                data-date-format="dd-mm-yyyy"
                            >
                                <input className="form-control" type="text" />
                                <span className="input-group-addon">
                                    <img src="images/Home-1/date-icon.png" alt="#" />
                                </span>
                            </div>
                        </div>
                        <div className="departure date-title ">
                            <label>Departure Date </label>
                            <div
                                id="datepickeri"
                                className="input-group date"
                                data-date-format="dd-mm-yyyy"
                            >
                                <input className="form-control" type="text" />
                                <span className="input-group-addon">
                                    <img src="images/Home-1/date-icon.png" alt="#" />
                                </span>
                            </div>
                        </div>
                        <div className="adults date-title ">
                            <label>Adults</label>
                            <form>
                                <div className=" carousel-search">
                                    <div className="btn-group">
                                        <a
                                            className="btn dropdown-toggle "
                                            data-toggle="dropdown"
                                            href="#"
                                        >
                                            2
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a>1</a>
                                            </li>
                                            <li>
                                                <a>2</a>
                                            </li>
                                            <li>
                                                <a>3</a>
                                            </li>
                                            <li>
                                                <a>4</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="children date-title ">
                            <label>Children</label>
                            <form>
                                <div className=" carousel-search">
                                    <div className="btn-group">
                                        <a
                                            className="btn dropdown-toggle "
                                            data-toggle="dropdown"
                                            href="#"
                                        >
                                            2
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a>1</a>
                                            </li>
                                            <li>
                                                <a>2</a>
                                            </li>
                                            <li>
                                                <a>3</a>
                                            </li>
                                            <li>
                                                <a>4</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="find_btn date-title">
                            <div className="text-find">
                                Check
                                <br />
                                Availability
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;