import React, { useState } from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import PageBanner from "../components/global/PageBanner";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { NumericFormat } from "react-number-format";
import { Form, Formik, Field } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomerModel from "../models/CustomerModel";

function Checkout(props) {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const room = cart.room ?? {};

  let customer = CustomerModel.getCookie('customer');
  if (customer) {
    customer = JSON.parse(customer);
  } else {
    customer = {
      name: "",
      phone: "",
      email: "",
      address: "",
    };
  }

  const handleSubmit = (values,) => {
    const formattedCheckin = new Date(cart.checkin).toISOString().split("T")[0];
    const formattedCheckout = new Date(cart.checkout).toISOString().split("T")[0];
    const orderData = {
      price: room.price,
      total: cart.total,
      checkin: formattedCheckin,
      checkout: formattedCheckout,
      room_id: cart.room_id,
      customer_id: customer.id,
    };
    setIsProcessing(true); // Đặt trạng thái là đang xử lý
    axios
      .post("http://127.0.0.1:8000/api/orders", orderData)
      .then((response) => {
        // Xử lý thành công khi đặt hàng  
        Swal.fire({
          icon: 'success',
          title: 'Bạn đã đặt phòng thành công',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {          
          // Chuyển hướng đến trang đăng nhập
          navigate("/room");
        });
      })
      .catch((error) => {
        // Xử lý khi có lỗi đăng xuất
        Swal.fire({
          icon: 'error',
          title: 'Đặt phòng thất bại',
        });
      })
      .finally(() => {
        setIsProcessing(false); // Đặt trạng thái là không xử lý
      });
  };

  return (
    <LayoutMaster>
      <PageBanner
        pageTitle="Thủ tục thanh toán"
        pageSubTitle="Tận hưởng trải nghiệm sang trọng"
      />
      <section className="check-out">
        <div className="container">
          <Formik initialValues={{}} onSubmit={handleSubmit}>
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
                        <Field
                          type="text"
                          name="name"
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
                        <Field
                          type="text"
                          name="phone"
                          className="form-control"
                          defaultValue={customer.phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <Field
                      type="text"
                      name="email"
                      className="form-control"
                      defaultValue={customer.email}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Địa chỉ <span>*</span>
                    </label>
                    <Field
                      type="text"
                      name="address"
                      className="form-control"
                      defaultValue={customer.address}
                      placeholder="Street Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-lg-offset-1">
                <div className="check-right">
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
                  {isProcessing ? "Đang xử lý..." : "Đặt phòng"}
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </LayoutMaster>
  );
}

export default Checkout;
