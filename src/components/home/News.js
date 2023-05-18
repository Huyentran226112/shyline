import React from 'react';

function News(props) {
    return (
        <>
            <section className="news">
                    <div className="container">
                        <h2 className="new-title">News</h2>
                        <div className="line" />
                        <div className="row">
                            <div className="news-content">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="substance">
                                        <div className="date">
                                            <div className="day">25</div>
                                            <div className="year">
                                                {" "}
                                                AUGUST
                                                <br />
                                                2017
                                            </div>
                                        </div>
                                        <div className="text">
                                            <a href="#">Update menu food in Skyline Hotel</a>
                                        </div>
                                        <a href="#" className="read-more">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="substance">
                                        <div className="date">
                                            <div className="day">22</div>
                                            <div className="year">
                                                {" "}
                                                AUGUST
                                                <br />
                                                2017
                                            </div>
                                        </div>
                                        <div className="text">
                                            <a href="#">Las Maquinas on Tragamonedas</a>
                                        </div>
                                        <a href="#" className="read-more">
                                            Read More{" "}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="substance">
                                        <div className="date">
                                            <div className="day">06</div>
                                            <div className="year">
                                                {" "}
                                                AUGUST
                                                <br />
                                                2017
                                            </div>
                                        </div>
                                        <div className="text">
                                            <a href="#">Mother Earth Hosts Our Travels</a>
                                        </div>
                                        <a href="#" className="read-more">
                                            Read More{" "}
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

export default News;