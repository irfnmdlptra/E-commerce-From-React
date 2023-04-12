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

    </header>
    </>
  );
};

export default Header;