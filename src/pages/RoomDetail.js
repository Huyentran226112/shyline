import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import PageBanner from '../components/global/PageBanner';

function RoomDetail(props) {
    return (
        <LayoutMaster>
            <PageBanner pageTitle="Room detail" pageSubTitle="All Room detail" />
            <section className="section-product-detail">
                <div className="container">
                    {/* DETAIL */}
                    <div className="product-detail margin">
                        <div className="row">
                            <div className="col-lg-9">
                                {/* LAGER IMGAE */}
                                <div className="wrapper">
                                    <div className="gallery3">
                                        <div className="gallery__img-block  ">
                                            <img
                                                src="images/Product/img-1.jpg"
                                                alt="images/Product/img-1.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  current">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 1
                                            </span>
                                            <img
                                                src="images/Product/img-2.jpg"
                                                alt="images/Product/img-2.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 2
                                            </span>
                                            <img
                                                src="images/Product/img-3.jpg"
                                                alt="images/Product/img-3.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 3
                                            </span>
                                            <img
                                                src="images/Product/img-4.jpg"
                                                alt="images/Product/img-4.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 4
                                            </span>
                                            <img
                                                src="images/Product/img-5.jpg"
                                                alt="images/Product/img-5.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 5
                                            </span>
                                            <img
                                                src="images/Product/img-6.jpg"
                                                alt="images/Product/img-6.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 6
                                            </span>
                                            <img
                                                src="images/Product/img-7.jpg"
                                                alt="images/Product/img-7.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 7
                                            </span>
                                            <img
                                                src="images/Product/img-7.jpg"
                                                alt="images/Product/img-7.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 8
                                            </span>
                                            <img
                                                src="images/Product/img-7.jpg"
                                                alt="images/Product/img-7.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__img-block  ">
                                            <span className="">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry 9
                                            </span>
                                            <img
                                                src="images/Product/img-7.jpg"
                                                alt="images/Product/img-7.jpg"
                                                className=""
                                            />
                                        </div>
                                        <div className="gallery__controls"></div>
                                    </div>
                                </div>
                                {/* END / LAGER IMGAE */}
                            </div>
                            <div className="col-lg-3">
                                {/* FORM BOOK */}
                                <div className="product-detail_book">
                                    <div className="product-detail_total">
                                        <img
                                            src="images/Product/icon.png"
                                            alt="#"
                                            className="icon-logo"
                                        />
                                        <h6>STARTING ROOM FROM</h6>
                                        <p className="price">
                                            <span className="amout">$330</span> /days
                                        </p>
                                    </div>
                                    <div className="product-detail_form">
                                        <div className="sidebar">
                                            {/* WIDGET CHECK AVAILABILITY */}
                                            <div className="widget widget_check_availability">
                                                <div className="check_availability">
                                                    <div className="check_availability-field">
                                                        <label>Arrive</label>
                                                        <div
                                                            className="input-group date"
                                                            data-date-format="dd-mm-yyyy"
                                                            id="datepicker1"
                                                        >
                                                            <input
                                                                className="form-control wrap-box"
                                                                type="text"
                                                                placeholder="Arrival Date"
                                                            />
                                                            <span className="input-group-addon">
                                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="check_availability-field">
                                                        <label>Depature</label>
                                                        <div
                                                            id="datepicker2"
                                                            className="input-group date"
                                                            data-date-format="dd-mm-yyyy"
                                                        >
                                                            <input
                                                                className="form-control wrap-box"
                                                                type="text"
                                                                placeholder="Departure Date"
                                                            />
                                                            <span className="input-group-addon">
                                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="check_availability-field">
                                                        <label>Adult</label>
                                                        <select className="awe-select">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                    <div className="check_availability-field">
                                                        <label>Chirld</label>
                                                        <select className="awe-select">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* END / WIDGET CHECK AVAILABILITY */}
                                        </div>
                                        <button className="btn btn-room btn-product">Book Now</button>
                                    </div>
                                </div>
                                {/* END / FORM BOOK */}
                            </div>
                        </div>
                    </div>
                    {/* END / DETAIL */}
                    {/* TAB */}
                    <div className="product-detail_tab">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="product-detail_tab-header">
                                    <li>
                                        <a href="#overview" data-toggle="tab">
                                            OVERVIEW
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="#amenities" data-toggle="tab">
                                            amenities
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#package" data-toggle="tab">
                                            PACKAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#rates" data-toggle="tab">
                                            RATES
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#calendar" data-toggle="tab">
                                            Calendar
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <div className="product-detail_tab-content tab-content">
                                    {/* OVERVIEW */}
                                    <div className="tab-pane fade" id="overview">
                                        <div className="product-detail_overview">
                                            <h5
                                                className="text-uppercase
                  "
                                            >
                                                de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                                            </h5>
                                            <p>
                                                Located in the heart of Aspen with a unique blend of
                                                contemporary luxury and historic heritage, deluxe
                                                accommodations, superb amenities, genuine hospitality and
                                                dedicated service for an elevated experience in the Rocky
                                                Mountains.
                                            </p>
                                            <div className="row">
                                                <div className="col-xs-6 col-md-4">
                                                    <h6>SPECIAL ROOM</h6>
                                                    <ul>
                                                        <li>Max: 4 Person(s)</li>
                                                        <li>Size: 35 m2 / 376 ft2</li>
                                                        <li>View: Ocen</li>
                                                        <li>Bed: King-size or twin beds</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-6 col-md-4">
                                                    <h6>SERVICE ROOM</h6>
                                                    <ul>
                                                        <li>Oversized work desk</li>
                                                        <li>Hairdryer</li>
                                                        <li>Iron/ironing board upon request</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END / OVERVIEW */}
                                    {/* AMENITIES */}
                                    <div className="tab-pane fade active in" id="amenities">
                                        <div className="product-detail_amenities">
                                            <p>
                                                Located in the heart of Aspen with a unique blend of
                                                contemporary luxury and historic heritage, deluxe
                                                accommodations, superb amenities, genuine hospitality and
                                                dedicated service for an elevated experience in the Rocky
                                                Mountains.
                                            </p>
                                            <div className="row">
                                                <div className="col-xs-6 col-lg-4">
                                                    <h6>LIVING ROOM</h6>
                                                    <ul>
                                                        <li>Oversized work desk</li>
                                                        <li>Hairdryer</li>
                                                        <li>Iron/ironing board upon request</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-6 col-lg-4">
                                                    <h6>KITCHEN ROOM</h6>
                                                    <ul>
                                                        <li>AM/FM clock radio</li>
                                                        <li>Voicemail</li>
                                                        <li>High-speed Internet access</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-6 col-lg-4">
                                                    <h6>balcony</h6>
                                                    <ul>
                                                        <li>AM/FM clock radio</li>
                                                        <li>Voicemail</li>
                                                        <li>High-speed Internet access</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-6 col-lg-4">
                                                    <h6>bedroom</h6>
                                                    <ul>
                                                        <li>Coffee maker</li>
                                                        <li>25 inch or larger TV</li>
                                                        <li>Cable/satellite TV channels</li>
                                                        <li>AM/FM clock radio</li>
                                                        <li>Voicemail</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-6 col-lg-4">
                                                    <h6>bathroom</h6>
                                                    <ul>
                                                        <li>Dataport</li>
                                                        <li>Phone access fees waived</li>
                                                        <li>24-hour Concierge service</li>
                                                        <li>Private concierge</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-6 col-lg-4">
                                                    <h6>Oversized work desk</h6>
                                                    <ul>
                                                        <li>Dataport</li>
                                                        <li>Phone access fees waived</li>
                                                        <li>24-hour Concierge service</li>
                                                        <li>Private concierge</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END / AMENITIES */}
                                    {/* PACKAGE */}
                                    <div className="tab-pane fade" id="package">
                                        <div className="product-detail_package">
                                            {/* ITEM package */}
                                            <div className="product-package_item">
                                                <div className="text">
                                                    <h4>
                                                        <a href="#">package standar</a>
                                                    </h4>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled
                                                    </p>
                                                    <div className="product-package_price">
                                                        <p className="price">
                                                            <span className="amout">$260</span> / Package
                                                        </p>
                                                        <a href="#" className="btn btn-room">
                                                            BOOK PACKIT
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* END / ITEM package */}
                                            {/* ITEM package */}
                                            <div className="product-package_item">
                                                <div className="text">
                                                    <h4>
                                                        <a href="#">package standar</a>
                                                    </h4>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled
                                                    </p>
                                                    <div className="product-package_price">
                                                        <p className="price">
                                                            <span className="amout">$340</span> / Package
                                                        </p>
                                                        <a href="#" className="btn btn-room">
                                                            BOOK PACKIT
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* END / ITEM package */}
                                            {/* ITEM package */}
                                            <div className="product-package_item">
                                                <div className="text">
                                                    <h4>
                                                        <a href="#">package standar</a>
                                                    </h4>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled
                                                    </p>
                                                    <div className="product-package_price">
                                                        <p className="price">
                                                            <span className="amout">$420</span> / Package
                                                        </p>
                                                        <a href="#" className="btn btn-room">
                                                            BBOOK PACKIT
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* END / ITEM package */}
                                        </div>
                                    </div>
                                    {/* END / PACKAGE */}
                                    {/* RATES */}
                                    <div className="tab-pane fade" id="rates">
                                        <div className="product-detail_rates">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Rate Period</th>
                                                        <th>Nightly</th>
                                                        <th>Weekend Night</th>
                                                        <th>Weekly</th>
                                                        <th>Monthly</th>
                                                        <th>Event</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h6>Spring/Summer Season</h6>
                                                            <ul>
                                                                <li>Jun 1 - Aug 31</li>
                                                                <li>3 night minimum stay</li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$320</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$23</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$120</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$100</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$89</span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6>Summer/Fall Season</h6>
                                                            <ul>
                                                                <li>Jun 1 - Aug 31</li>
                                                                <li>3 night minimum stay</li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$150</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$130</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$100</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$80</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$85</span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6>Christmas Season</h6>
                                                            <ul>
                                                                <li>Jun 1 - Aug 31</li>
                                                                <li>3 night minimum stay</li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$225</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$200</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$180</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$160</span>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="price">
                                                                <span className="amout">$140</span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* END / RATES */}
                                    {/* CALENDAR */}
                                    <div className="tab-pane fade" id="calendar">
                                        <div className="product-detail_calendar-wrap row">
                                            <div className="col-sm-6">
                                                {/* CALENDAR ITEM */}
                                                <div className="calendar_custom">
                                                    <div className="calendar_title">
                                                        <span className="calendar_month">JUNE</span>
                                                        <span className="calendar_year">2017</span>
                                                        <a href="#" className="calendar_prev calendar_corner">
                                                            <i className="ion-ios-arrow-thin-left" />
                                                        </a>
                                                    </div>
                                                    <table className="calendar_tabel">
                                                        <thead>
                                                            <tr>
                                                                <th>Su</th>
                                                                <th>Mo</th>
                                                                <th>Tu</th>
                                                                <th>We</th>
                                                                <th>Th</th>
                                                                <th>Fr</th>
                                                                <th>Sa</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td />
                                                                <td className="apb-calendar_current-date">
                                                                    <a href="#">
                                                                        <small>1</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>2</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>3</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>4</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>5</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>6</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>7</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>8</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>9</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>10</small>
                                                                    </a>
                                                                </td>
                                                                <td className="apb-calendar_current-select">
                                                                    <a href="#">
                                                                        <small>11</small>
                                                                    </a>
                                                                </td>
                                                                <td className="apb-calendar_current-select">
                                                                    <a href="#">
                                                                        <small>12</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>13</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>14</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>15</small>
                                                                    </a>
                                                                </td>
                                                                <td className="not-available">
                                                                    <a href="#">
                                                                        <small>16</small>
                                                                    </a>
                                                                </td>
                                                                <td className="not-available">
                                                                    <a href="#">
                                                                        <small>17</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>18</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>19</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>20</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>21</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>22</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>23</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>24</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>25</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>26</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>27</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>28</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>29</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>30</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>31</small>
                                                                    </a>
                                                                </td>
                                                                <td />
                                                                <td />
                                                                <td />
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* END CALENDAR ITEM */}
                                            </div>
                                            <div className="col-sm-6">
                                                {/* CALENDAR ITEM */}
                                                <div className="calendar_custom">
                                                    <div className="calendar_title">
                                                        <span className="calendar_month">JUNE</span>
                                                        <span className="calendar_year">2017</span>
                                                        <a href="#" className="calendar_next calendar_corner">
                                                            <i className="ion-ios-arrow-thin-right" />
                                                        </a>
                                                    </div>
                                                    <table className="calendar_tabel">
                                                        <thead>
                                                            <tr>
                                                                <th>Su</th>
                                                                <th>Mo</th>
                                                                <th>Tu</th>
                                                                <th>We</th>
                                                                <th>Th</th>
                                                                <th>Fr</th>
                                                                <th>Sa</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td />
                                                                <td className="apb-calendar_current-date">
                                                                    <a href="#">
                                                                        <small>1</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>2</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>3</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>4</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>5</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>6</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>7</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>8</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>9</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>10</small>
                                                                    </a>
                                                                </td>
                                                                <td className="apb-calendar_current-select">
                                                                    <a href="#">
                                                                        <small>11</small>
                                                                    </a>
                                                                </td>
                                                                <td className="apb-calendar_current-select">
                                                                    <a href="#">
                                                                        <small>12</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>13</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>14</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>15</small>
                                                                    </a>
                                                                </td>
                                                                <td className="not-available">
                                                                    <a href="#">
                                                                        <small>16</small>
                                                                    </a>
                                                                </td>
                                                                <td className="not-available">
                                                                    <a href="#">
                                                                        <small>17</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>18</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>19</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>20</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>21</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>22</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>23</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>24</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>25</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>26</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>27</small>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>28</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>29</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>30</small>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        <small>31</small>
                                                                    </a>
                                                                </td>
                                                                <td />
                                                                <td />
                                                                <td />
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* END CALENDAR ITEM */}
                                            </div>
                                            <div className="calendar_status text-center col-sm-12">
                                                <span>Available</span>
                                                <span className="not-available">Not Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END / CALENDAR */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END / TAB */}
                    {/* ANOTHER ACCOMMODATION */}
                    <div className="product-detail">
                        <h2 className="product-detail_title">Another accommodations</h2>
                        <div className="product-detail_content">
                            <div className="row">
                                {/* ITEM */}
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-detail_item">
                                        <div className="img">
                                            <a href="#">
                                                <img src="images/Product/Another-.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <h2>
                                                <a href="#">LUxury room</a>
                                            </h2>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-child" aria-hidden="true" /> Max: 2
                                                    Person(s)
                                                </li>
                                                <li>
                                                    <i className="fa fa-bed" aria-hidden="true" /> Bed:
                                                    King-size or twin beds
                                                </li>
                                                <li>
                                                    <i className="fa fa-eye" aria-hidden="true" /> View: Ocen
                                                </li>
                                            </ul>
                                            <a href="#" className="btn btn-room">
                                                VIEW DETAIL
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* END / ITEM */}
                                {/* ITEM */}
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-detail_item">
                                        <div className="img">
                                            <a href="#">
                                                <img src="images/Product/Another-1.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <h2>
                                                <a href="#">Family Room</a>
                                            </h2>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-child" aria-hidden="true" /> Max: 2
                                                    Person(s)
                                                </li>
                                                <li>
                                                    <i className="fa fa-bed" aria-hidden="true" /> Bed:
                                                    King-size or twin beds
                                                </li>
                                                <li>
                                                    <i className="fa fa-eye" aria-hidden="true" /> View: Ocen
                                                </li>
                                            </ul>
                                            <a href="#" className="btn btn-room">
                                                VIEW DETAIL
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* END / ITEM */}
                                {/* ITEM */}
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-detail_item">
                                        <div className="img">
                                            <a href="#">
                                                <img src="images/Product/Another-3.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <h2>
                                                <a href="#">standard Room</a>
                                            </h2>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-child" aria-hidden="true" /> Max: 2
                                                    Person(s)
                                                </li>
                                                <li>
                                                    <i className="fa fa-bed" aria-hidden="true" /> Bed:
                                                    King-size or twin beds
                                                </li>
                                                <li>
                                                    <i className="fa fa-eye" aria-hidden="true" /> View: Ocen
                                                </li>
                                            </ul>
                                            <a href="#" className="btn btn-room">
                                                VIEW DETAIL
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* END / ITEM */}
                                {/* ITEM */}
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-detail_item">
                                        <div className="img">
                                            <a href="#">
                                                <img src="images/Product/Another-4.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <h2>
                                                <a href="#">couple Room</a>
                                            </h2>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-child" aria-hidden="true" /> Max: 2
                                                    Person(s)
                                                </li>
                                                <li>
                                                    <i className="fa fa-bed" aria-hidden="true" /> Bed:
                                                    King-size or twin beds
                                                </li>
                                                <li>
                                                    <i className="fa fa-eye" aria-hidden="true" /> View: Ocen
                                                </li>
                                            </ul>
                                            <a href="#" className="btn btn-room">
                                                VIEW DETAIL
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* END / ITEM */}
                            </div>
                        </div>
                    </div>
                    {/* END / ANOTHER ACCOMMODATION */}
                </div>
            </section>

        </LayoutMaster>
    );
}

export default RoomDetail;