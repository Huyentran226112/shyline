import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LayoutMaster from "../layouts/LayoutMaster";
import { Field, Form, Formik } from "formik";


const rules = Yup.object().shape({
  name: Yup.string()
    .required("Truong yeu cau")
    .min(3, "Toi thieu 3 ky tu")
    .max(255, "Toi da 255"),
  email: Yup.string()
    .required("Truong yeu cau")
    .min(3, "Toi thieu 4 ky tu")
    .max(255, "Toi da 255"),
  address: Yup.string()
  .required("Truong yeu cau")
  .min(3, "Toi thieu 4 ky tu")
  .max(255, "Toi da 255"),
  phone: Yup.string()
  .required("Truong yeu cau")
  .min(3, "Toi thieu 4 ky tu")
  .max(255, "Toi da 255"),
  password: Yup.string()
  .required("Truong yeu cau")
  .min(3, "Toi thieu 4 ky tu")
  .max(255, "Toi da 255"),
});

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

    });
  };

  const handleSubmit = (values) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/register", values)
      .then((response) => {
        // Xử lý phản hồi thành công
        alert('Đăng ký tài khoản thành công');
        navigate("/login");
        console.log(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error(error);
      });
  };
  return (
    <LayoutMaster>
      <section className="body-page page-v1 page-v2">
        <div className="container">
          <div className="content">
            <h2 className="sky-h3">Đăng Ký Tài Khoản</h2>
            <h5 className="p-v1">
              Nếu bạn chưa có tài khoản tại HP Hotel! Đăng ký và cảm nhận
            </h5>
            <Formik initialValues={formData} validationSchema={rules} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
            <Form >
              <div className="form-group">
                <Field name="name" className="form-control" placeholder="Nhập tên"/>
              </div>
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <div className="form-group">
              <Field type="email" name="email" className="form-control" placeholder="Nhập email"/>
              </div>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <div className="form-group">
              <Field type="text" name="address" className="form-control" placeholder="Nhập địa chỉ"/>
              </div>
              {errors.address && touched.address ? <div>{errors.address}</div> : null}
              <div className="form-group">
              <Field type="text" name="phone" className="form-control" placeholder="Nhập sđt"/>
              </div>
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
              <div className="form-group">
              <Field type="password" name="password" className="form-control" placeholder="Nhập mật khẩu"/>
              </div>
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <div className="form-group">
              <Field type="password" name="password" className="form-control" placeholder="Nhập lại mật khẩu"/>
              </div>
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <button type="submit" className="btn btn-default">
                ĐĂNG KÝ
              </button>
            </Form>
             )}
            </Formik>
          </div>
        </div>
      </section>
    </LayoutMaster>
  );
};

export default RegisterForm;
