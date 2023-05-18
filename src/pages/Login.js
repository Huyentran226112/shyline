import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';

function Login(props) {
    return (
        <LayoutMaster>
 <section className="body-page page-v1">
  <div className="container">
    <div className="content">
      <h2 className="sky-h3">LOGIN ACCOUNT</h2>
      <h5 className="p-v1">Lorem Ipsum is simply dummy text of the printing</h5>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue=""
            placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <input
            id="password-field"
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
          <span
            className="fa fa-fw fa-eye field-icon toggle-password "
            data-toggle="#password-field"
          />
        </div>
        <button type="submit" className="btn btn-default">
          LOGIN
        </button>
      </form>
      <p>I don’t have an account &nbsp;- &nbsp; Forgot Password</p>
    </div>
  </div>
</section>


        </LayoutMaster>
    );
}

export default Login;