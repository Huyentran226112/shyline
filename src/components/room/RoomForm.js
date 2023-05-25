import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { SET_CART } from '../../redux/action';
import { Link, Navigate, useNavigate } from "react-router-dom";

function RoomForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { room } = props;
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    total: 0,
    room_id: 0,
    room: {}
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClick = (event) => {
    var soNgay = tinhSoNgay(startDate, endDate);
    let total = soNgay * room.price;
    let cart = {
      checkin: startDate,
      checkout: endDate,
      total: total,
      room: room,
      room_id: room.id,
      soNgay: soNgay
    }
    const customer = localStorage.getItem("customer");
    if (customer) {
      localStorage.setItem('cart', JSON.stringify(cart));
      dispatch({ type: SET_CART, payload: cart });
      navigate("/checkout");
    } else {
      alert("Bạn cần đăng nhập để đặt phòng.");
      navigate("/login");
    }
  }

  const tinhSoNgay = (truoc, sau) => {
    // Chuyển đổi chuỗi ngày thành đối tượng Date
    var checkin = new Date(truoc);
    var checkout = new Date(sau);

    // Tính số mili giây giữa hai ngày
    var soMiligiay = checkout - checkin;

    // Chuyển đổi số mili giây thành số ngày
    var total = Math.floor(soMiligiay / (1000 * 60 * 60 * 24));

    return total;
  }

  return (
    <div className="product-detail_form">
      <div className="sidebar">
        {/* WIDGET CHECK AVAILABILITY */}
        <div className="widget widget_check_availability">
          <div className="check_availability">
            <div className="check_availability-field">
              <label>Tên phòng: {room.name}</label>
            </div>
            <div className="check_availability-field">
              <label>Giá: {room.price_format}VND /days</label>
            </div>
            <div className="check_availability-field">
              <label>Ngày nhận</label>
              <div className="input-group " >
                <DatePicker
                  className="form-control wrap-box"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="check_availability-field">
              <label>Ngày trả</label>
              <div className="input-group " >
                <DatePicker
                  className="form-control wrap-box"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-room btn-product" onClick={handleClick}>Kiểm tra phòng </button>
      <Link to={'/room'} className="btn btn-room btn-product">Quay lại</Link>
    </div>
  );
}

export default RoomForm;