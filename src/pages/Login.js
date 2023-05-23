import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import LayoutMaster from "../layouts/LayoutMaster";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  password: Yup.string().required("Mật khẩu là bắt buộc"),
});

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [msg,setMsg] = useState('');
  const navigate = useNavigate();
  const setUsername = (name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: name
    }));
  };

  const handleSubmit = (values) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/login-customer", values)
      .then((response) => {
        console.log(response);
        localStorage.setItem("customer", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.access_token);
      //   const { name } = response.data; // Lấy tên người dùng từ phản hồi API
      // setUsername(name); // Cập nhật giá trị của username trong state
        alert("Đăng nhập thành công");
        navigate("/"); // Chuyển hướng đến trang Dashboard sau khi đăng nhập thành công
      //   console.log(response);
      })
      .catch((error) => {
        setMsg('Email hoặc mật khẩu không đúng');
        // Xử lý lỗi
        console.log(error.response.data.error);
      });
  };
  return (
    <LayoutMaster>
      <section className="body-page page-v1">
        <div className="container">
          <div className="content">
            <h2 className="sky-h3">Đăng Nhập Tài Khoản</h2>
            <h5 className="p-v1">
              Chúc bạn có một trải nghiệm tốt tại Skyline
            </h5>
            <Formik
              initialValues={formData}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group">
                    <Field
                      name="email"
                      className="form-control"
                      placeholder="Nhập email"
                    />
                    {errors.email && touched.email && <div className="form-error">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <div className="form-error">{errors.password}</div>
                    )}
                    <span
                      className="fa fa-fw fa-eye field-icon toggle-password "
                      data-toggle="#password-field"
                    />
                    <div className="form-error">{msg}</div>
                  </div>
                  
                  <button type="submit" className="btn btn-default">
                    Đăng Nhập
                  </button>
                </Form>
              )}
            </Formik>
            <Link className="form-register" to={'/register'}>Đăng ký</Link>
          </div>
        </div>
      </section>
    </LayoutMaster>
  );
};

export default Login;
