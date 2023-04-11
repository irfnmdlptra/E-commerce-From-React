import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-top-strip py-3 bg-primary">
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
  );
};

export default Header;