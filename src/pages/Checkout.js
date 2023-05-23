import React from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import PageBanner from "../components/global/PageBanner";
import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import { Form, Formik } from "formik";
import CustomerModel from "../models/CustomerModel";

function Checkout(props) {

  const cart = useSelector((state) => state.cart);
  const room = cart.room ?? {};

  let customer = localStorage.getItem("customer");
  if (customer) {
    customer = JSON.parse(customer);
  } else {
    customer = new CustomerModel({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  }

  console.log(cart);
  return (
    <LayoutMaster>
      <PageBanner pageTitle="Thủ tục thanh toán" pageSubTitle="Tận hưởng trải nghiệm sang trọng" />
      <section className="check-out">
        <div className="container">
          <p className="check-p">
            Returning customer?{" "}
            <a href="#" title="">
              {" "}
              Click here to login
            </a>
          </p>
          <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
            <Form className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="check-left ">
                  <h2>Thông tin của bạn</h2>

                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label>
                          Tên <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={customer.name}
                        />
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label>
                          Phone <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={customer.phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={customer.email}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Địa chỉ <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={customer.address}
                      placeholder="Street Address"
                    />
                  </div>
                </div>
                {/* item-right */}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-lg-offset-1">
                <div className="check-right ">
                  <h2 className="text-uppercase">Chi tiết thanh toán</h2>
                  <div className="checkout_cart">
                    <div className="cart-item">
                      <div className="img">
                        <a href="#">
                          <img src={room.image} alt="#" />
                        </a>
                      </div>
                      <div className="text">
                        <a href="#">{room.name}</a>
                      </div>
                    </div>
                    {/* END / ITEM */}
                  </div>
                  <div className="checkout-cartinfo">
                    <p>
                      <span>Giá phòng:</span>
                      {room.price_format} / ngày
                    </p>
                    <p>
                      <span>Số ngày đặt:</span>
                      {cart.soNgay} ngày
                    </p>
                    <p>
                      <span>Tổng tiền:</span>
                      <strong>
                        <NumericFormat
                          value={cart.total}
                          displayType="text"
                          thousandSeparator={true}
                          suffix=" vnđ"
                        />
                      </strong>
                    </p>
                  </div>
                  <button type="submit" className="checkout-btn btn">
                    {" "}
                    Đặt phòng{" "}
                  </button>
                </div>
              </div>

              {/* /row */}
            </Form>
          </Formik>

          {/* /container */}
        </div>
      </section>
    </LayoutMaster>
  );
}

export default Checkout;
