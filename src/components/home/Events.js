import React from 'react';

function Events(props) {
    return (
        <>
          <section className="events">
                    <div className="container">
                        <h2 className="events-title">Our Events</h2>
                        <div className="line" />
                        <div id="events-v2" className="owl-carousel owl-theme">
                            <div className="item ">
                                <div className="events-item">
                                    <div className="events-img">
                                        <img
                                            src="images/Home-1/Our-Events-1.jpg"
                                            className="img-responsive"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="events-content">
                                        <a href="#" title="">
                                            <p className="sky-p">EVENTS</p>
                                            <h3 className="sky-h3">Wedding Day</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="events-item">
                                    <div className="events-img">
                                        <img
                                            src="images/Home-1/Our-Events-2.jpg"
                                            className="img-responsive"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="events-content">
                                        <a href="#" title="">
                                            <p className="sky-p">EVENTS</p>
                                            <h3 className="sky-h3">Golf Cup 2017</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="events-item">
                                    <div className="events-img">
                                        <img
                                            src="images/Home-1/Our-Events-3.jpg"
                                            className="img-responsive"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="events-content">
                                        <a href="#" title="">
                                            <p className="sky-p">EVENTS</p>
                                            <h3 className="sky-h3"> Beach Sports</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
        </>
    );
}

export default Events;