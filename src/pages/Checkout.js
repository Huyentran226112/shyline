import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import PageBanner from '../components/global/PageBanner';

function Checkout(props) {
    return (
        <LayoutMaster>
            <PageBanner pageTitle="Checkout" pageSubTitle="All Checkout" />
            <section className="check-out">
                <div className="container">
                    <p className="check-p">
                        Returning customer?{" "}
                        <a href="#" title="">
                            {" "}
                            Click here to login
                        </a>
                    </p>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="check-left ">
                                <h2>BILLING DETAILS</h2>
                                <p>Lorem Ipsum is simply dummy text</p>
                                <div className="form-group">
                                    <label>
                                        Company &nbsp;<span>*</span>
                                    </label>
                                    <div className="dropdown">
                                        <a
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            role="button"
                                            data-toggle="dropdown"
                                            className="dropdown-toggle form-control"
                                            href="#"
                                        >
                                            <span id="selected" className="color">
                                                United Kingdom (Uk)
                                            </span>
                                            <i className="ion-chevron-down" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="active">United Kingdom (Uk)</li>
                                            <li>Viet Nam (VN)</li>
                                            <li>Spanish(TBN)</li>
                                            <li>Thai Lan</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                First Name <span>*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Last Name <span>*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        className="form-control"
                                        defaultValue=""
                                        required="required"
                                        pattern=""
                                        title=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        Address <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="Address"
                                        className="form-control"
                                        defaultValue=""
                                        required="required"
                                        pattern=""
                                        title=""
                                        placeholder="Street Address"
                                    />
                                    <input
                                        type="text"
                                        name="Address"
                                        className="form-control"
                                        defaultValue=""
                                        required="required"
                                        pattern=""
                                        title=""
                                        placeholder="Apartment, suite, unit etc. (Optional)"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Town / City &nbsp;<span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Street Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Country &nbsp;<span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Country"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Email Address &nbsp; <span>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="Email"
                                                className="form-control"
                                                defaultValue=""
                                                required="required"
                                                title=""
                                                placeholder="Street Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Phone &nbsp;<span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Country"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Order Notes</label>
                                    <textarea
                                        name="textarea"
                                        className="form-control"
                                        rows={3}
                                        required="required"
                                        placeholder="Notes about your order, eg. special notes for delivery"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="radio b">
                                    <label>
                                        <input type="radio" name="optradio1" /> Create an account?
                                    </label>
                                </div>
                                <div className="click form-control">
                                    You have a coupon?{" "}
                                    <a href="#" title="">
                                        Click here to enter your code
                                    </a>
                                </div>
                            </div>
                            {/* item-right */}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-lg-offset-1">
                            <div className="check-right ">
                                <h2 className="text-uppercase">Your payment details</h2>
                                <div className="checkout_cart">
                                    {/* ITEM */}
                                    <div className="cart-item">
                                        <div className="img">
                                            <a href="#">
                                                <img src="images/Checkout/checkout.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <a href="#">Luxury Room</a>
                                            <p>
                                                <span>2 days - 3 rooms</span> <b>$240</b>
                                            </p>
                                        </div>
                                        <a href="#" className="remove">
                                            {" "}
                                            <i className="ion-close-round" aria-hidden="true" />
                                        </a>
                                    </div>
                                    {/* END / ITEM */}
                                    {/* ITEM */}
                                    <div className="cart-item">
                                        <div className="img">
                                            <a href="#">
                                                <img src="images/Checkout/checkou-1t.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <a href="#">Standard Room</a>
                                            <p>
                                                <span>2 days - 2 rooms</span> <b>$360</b>
                                            </p>
                                        </div>
                                        <a href="#" className="remove">
                                            {" "}
                                            <i className="ion-close-round" aria-hidden="true" />
                                        </a>
                                    </div>
                                    {/* END / ITEM */}
                                    {/* ITEM */}
                                    <div className="cart-item">
                                        <div className="img">
                                            <a href="#">
                                                <img src="images/Checkout/checkou-3t.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <a href="#">Couple Room</a>
                                            <p>
                                                <span>4 days - 1 rooms</span> <b>$480</b>
                                            </p>
                                        </div>
                                        <a href="#" className="remove">
                                            <i className="ion-close-round" aria-hidden="true" />
                                        </a>
                                    </div>
                                    {/* END / ITEM */}
                                </div>
                                <div className="checkout-cartinfo">
                                    <p>
                                        <span>Cart Subttotal:</span>$1080
                                    </p>
                                    <p>
                                        <span>Shipping:</span>Free Shipping
                                    </p>
                                    <p>
                                        <span>Order Total:</span>
                                        <strong>$1080</strong>
                                    </p>
                                </div>
                                <div className="checkout-option">
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="optradio" />
                                            Direct Bank Transfer
                                            <span>
                                                Make your payment directly into our bank account. Please use
                                                your Order ID as the payment reference. Your order won’t be
                                                shipped until the funds have cleared in our account.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="radio margin-bottom">
                                        <label>
                                            <input type="radio" name="optradio" />
                                            Cheque Payment
                                        </label>
                                    </div>
                                    <div className="radio ">
                                        <label className="padding-right">
                                            <input type="radio" name="optradio" />
                                            Credit Card
                                        </label>
                                        <div className="card">
                                            <img
                                                src="images/Checkout/ex.png"
                                                alt="#"
                                                className="img-responsive"
                                            />
                                            <img
                                                src="images/Checkout/mas.png"
                                                alt="#"
                                                className="img-responsive"
                                            />
                                            <img
                                                src="images/Checkout/o.png"
                                                alt="#"
                                                className="img-responsive"
                                            />
                                            <img
                                                src="images/Checkout/pay.png"
                                                alt="#"
                                                className="img-responsive"
                                            />
                                            <img
                                                src="images/Checkout/visa.png"
                                                alt="#"
                                                className="img-responsive"
                                            />
                                            <img
                                                src="images/Checkout/2co.png"
                                                alt="#"
                                                className="img-responsive"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-btn btn">PLACE ORDER </div>
                            </div>
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </div>
            </section>

        </LayoutMaster>
    );
}

export default Checkout;