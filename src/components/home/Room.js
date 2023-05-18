import React from 'react';
import OwlCarousel from 'react-owl-carousel';
function Room(props) {
    return (
        <>
            <section className="rooms">
                <div className="container">
                    <h2 className="title-room">Our Rooms</h2>
                    <div className="outline" />
                    <p className="rooms-p">
                        When you host a party or family reunion, the special celebrations let
                        you streng then bonds with
                    </p>
                    <div className="wrap-rooms">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <img
                                            src="images/Home-1/our-1.jpg"
                                            className="img-responsive"
                                            alt="PLuxury Room"
                                            title="Luxury Room"
                                        />
                                    </div>
                                    <div className="rooms-content">
                                        <h4 className="sky-h4">Luxury Room</h4>
                                        <p className="price">$320 / Per Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <img
                                            src="images/Home-1/our-2.jpg"
                                            className="img-responsive"
                                            alt="Double Room"
                                            title="Double Room"
                                        />
                                    </div>
                                    <div className="rooms-content">
                                        <h4 className="sky-h4">Double Room</h4>
                                        <p className="price">$320 / Per Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <img
                                            src="images/Home-1/our-3.jpg"
                                            className="img-responsive"
                                            alt="Family Room"
                                            title="Family Room"
                                        />
                                    </div>
                                    <div className="rooms-content">
                                        <h4 className="sky-h4">Family Room</h4>
                                        <p className="price">$320 / Per Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <img
                                            src="images/Home-1/our-4.jpg"
                                            className="img-responsive"
                                            alt="Deluxe Room"
                                            title="Deluxe Room"
                                        />
                                    </div>
                                    <div className="rooms-content">
                                        <h4 className="sky-h4">Deluxe Room</h4>
                                        <p className="price">$320 / Per Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <img
                                            src="images/Home-1/our-5.jpg"
                                            className="img-responsive"
                                            alt="Single Room"
                                            title="Single Room"
                                        />
                                    </div>
                                    <div className="rooms-content">
                                        <h4 className="sky-h4">Single Room</h4>
                                        <p className="price">$320 / Per Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <img
                                            src="images/Home-1/our-6.jpg"
                                            className="img-responsive"
                                            alt="Presidential Room"
                                            title="Presidential Room"
                                        />
                                    </div>
                                    <div className="rooms-content">
                                        <h4 className="sky-h4">Presidential Room</h4>
                                        <p className="price">$320 / Per Night</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /container */}
            </section>
        </>
    );
}

export default Room;