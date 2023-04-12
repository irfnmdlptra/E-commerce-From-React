import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <p className="text-white mb-0">Unduh Aplikasi Mobile</p>
            </div>
            <div className="col-lg-6">
              <p className="text-end text-white mb-0">
                Layanan <a href="tel:+6289630056703">+6289630056703</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-nav py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">Shopfrieger</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
