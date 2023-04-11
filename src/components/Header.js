import React from "react";
import { Navlink, Link } from "react-router-dom";

const Header = () => {
  return <>
  <header className="header-top-strip py-3">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-6">
          <p>Download For App Mobile</p>
        </div>
        <div className="col-lg-6">
          <p className="text-end">
            Layanan <a href="tel:+62 89630025703">+62 89630056703</a>
          </p>
        </div>
      </div>
    </div>
  </header>
  </>
};

export default Header;
