import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';

function Register(props) {
    return (
        <LayoutMaster>
            <section className="body-page page-v1 page-v2">
  <div className="container">
    <div className="content">
      <h2 className="sky-h3">REGISTER FORM</h2>
      <h5 className="p-v1">
        If you no have account in The Lotus Hotel! Register and feeling
      </h5>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue=""
            placeholder="User Name *"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            defaultValue=""
            required="required"
            title=""
            placeholder="Email *"
          />
        </div>
        <div className="form-group">
          <input
            id="password-field"
            type="password"
            className="form-control"
            name="password"
            placeholder="Password *"
          />
          <span
            data-toggle="#password-field"
            className="fa fa-fw fa-eye field-icon toggle-password"
          />
        </div>
        <div className="form-group">
          <input
            id="password-field1"
            type="password"
            className="form-control"
            name="password"
            placeholder="Confirm Password *"
          />
          <span
            data-toggle="#password-field1"
            className="fa fa-fw fa-eye field-icon toggle-password"
          />
        </div>
        <button type="submit" className="btn btn-default">
          REGISTER
        </button>
      </form>
    </div>
  </div>
</section>

        </LayoutMaster>
    );
}

export default Register;