import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';

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
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch/>
                </span>
                <input type="text" className="form-control" placeholder="Cari Product disini" aria-label="Cari Product disini" aria-describedby="basic-addon2" />
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
