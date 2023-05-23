import React from 'react';

function About(props) {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                            <div className="about-centent">
                                <h2 className="about-title">Về chúng tôi</h2>
                                <div className="line" />
                                <p className="about-p">
                                    Tọa lạc ngay trung tâm thành phố Đông Hà, khách sạn 5 sao SKYLINE với 175 phòng nghỉ cao cấp và các phòng họp được trang bị hiện đại, cũng như rất nhiều dịch vụ spa, gym, karaoke đẳng cấp, luôn là một lựa chọn hoàn hảo dành cho du khách khi thăm các di tích lịch sử, danh lam thắng cảnh, mua sắm nổi tiếng của địa phương.

                                    Tự hào là khách sạn cao cấp đầu tiên , chúng tôi rất hân hạnh được mang đến cho Quý khách những khoảnh khắc nghỉ ngơi, thư giãn thoải mái nhất.
                                </p>
                                <p className="about-p1">
                                    Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Phước Mỹ của Da Nang, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Hãy nhớ dành một chút thời gian để thăm thú Ngũ Hành Sơn cũng như Biển Mỹ Khê gần đó. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên.
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-7 col-lg-7 ">
                            <div className="about-img">
                                <div className="img-1">
                                    <img
                                        src="images/Home-1/about-3.jpg"
                                        className="img-responsive"
                                        alt="Image"
                                    />
                                    <div className="img-2">
                                        <img
                                            src="images/Home-1/about-1.jpg"
                                            className="img-responsive"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="img-3">
                                        <img
                                            src="images/Home-1/about-2.jpg"
                                            className="img-responsive"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;