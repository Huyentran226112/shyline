import React from 'react';

function Footer(props) {
    return (
        <>
            <footer className="footer-sky">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                                <div className="icon-email">
                                    <a href="#" title="Email">
                                        <img
                                            src="/images/Home-1/footer-top-icon-l.png"
                                            alt="Email"
                                            className="img-responsive"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-5">
                                <div className="textbox">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your email address"
                                                    aria-label="Search for..."
                                                />
                                                <button className="btn btn-secondary" type="button">
                                                    <i className="ion-android-send" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 text-right">
                                <div className="footer-icon-l">
                                    <a href="#" title="Twitter">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a href="#" title="Facebook">
                                        <i className="fa fa-facebook-square" aria-hidden="true" />
                                    </a>
                                    <a href="#" title="Tripadvisor">
                                        <i className="fa fa-tripadvisor" aria-hidden="true" />
                                    </a>
                                    <a href="#" title="Isnstagram">
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* /container */}
                </div>
                {/* /footer-top */}
                <div className="footer-mid">
                    <div className="container">
                        <div className="row padding-footer-mid">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <div className="footer-logo text-center list-content">
                                    <a href="index.html" title="Skyline">
                                        <img src="/images/Home-1/sky-logo-footer.png" alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1  ">
                                <div className="list-content">
                                    <ul>
                                        <li>
                                            <a href="attractions.html" title="">
                                                Về Skyline
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tems_condition_1.html" title="">
                                                Về chúng tôi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Liên hệ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Tuyển dụng
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Câu hỏi thường gặp
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                                <div className="list-content ">
                                    <ul>
                                        <li>
                                            <a href="#" title="">
                                                Điều khoản & Quy định
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Điều khoản chung
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html" title="">
                                                Quy định chung
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html" title="">
                                                Quy định về thanh toán
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html" title="">
                                                Chính sách quyền riêng tư
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                                <div className="list-content ">
                                    <ul>
                                        <li>
                                            <a href="#" title="">
                                                Tin tức & Sự kiện
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Tin công ty
                                            </a>
                                        </li>
                                        <li>
                                            <a href="gallery_1.html" title="">
                                                Cẩm nang du lịch
                                            </a>
                                        </li>
                                        <li>
                                            <a href="restaurant_1.html" title="">
                                               Thành tựu
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Thẻ quà tặng
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                                Copyright © 2017 by{" "}
                                <a href="#" title="">
                                    EngoTheme.
                                </a>{" "}
                                SkyLine Hotel Theme crafted with love
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                                <div className="payments text-right">
                                    <ul>
                                        <li>
                                            <a href="#" title="Paypal">
                                                <img src="/images/Home-1/Paypal.png" alt="Paypal" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Visa">
                                                <img src="/images/Home-1/Visa.png" alt="Visa" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Master">
                                                <img src="/images/Home-1/Master-card.png" alt="Master" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Discover">
                                                <img src="/images/Home-1/Discover.png" alt="Discover" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="#" title="sroll" className="scrollToTop">
                <i className="fa fa-angle-up" />
            </a>
        </>
    );
}

export default Footer;