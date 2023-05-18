import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import PageBanner from '../components/global/PageBanner';

function Contact(props) {
    return (
        <LayoutMaster>
            <PageBanner pageTitle="Contact" pageSubTitle="All Contact" />
            <section className="section-contact">
                <div className="container">
                    <div className="contact">
                        <div className="row">
                            <div className="col-md-6 col-lg-5">
                                <div className="text">
                                    <h2>Contact</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className=" fa ion-ios-location-outline" /> 121 King Str,
                                            Melbourne Victoria
                                        </li>
                                        <li>
                                            <i className="fa fa-phone" aria-hidden="true" /> 1-548-854-8898
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                            <a
                                                href="/cdn-cgi/l/email-protection"
                                                className="__cf_email__"
                                                data-cfemail="c2aaa7aeaead82b1a9bbaeabaca7aaadb6a7aeeca1adaf"
                                            >
                                                [email&nbsp;protected]
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-lg-offset-1">
                                <div className="contact-form">
                                    <form action="send_mail_contact.php" method="post">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input
                                                    type="text"
                                                    className="field-text"
                                                    name="name"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="text"
                                                    className="field-text"
                                                    name="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="col-sm-12">
                                                <input
                                                    type="text"
                                                    className="field-text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                            <div className="col-sm-12">
                                                <textarea
                                                    cols={30}
                                                    rows={10}
                                                    name="message"
                                                    className="field-textarea"
                                                    placeholder="Write what do you want"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <button type="submit" className="btn btn-room">
                                                    SEND
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6124.155496132579!2d144.95267262759506!3d-37.81807247133261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd58ef1f9%3A0x924c91f561a4fd11!2s121+King+St%2C+Melbourne+VIC+3000%2C+%C3%9Ac!5e0!3m2!1svi!2s!4v1510819444662"
                    height={470}
                    allowFullScreen=""
                />
            </div>

        </LayoutMaster>
    );
}

export default Contact;