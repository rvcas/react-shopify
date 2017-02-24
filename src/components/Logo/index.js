import React from 'react';

import hh_logo from "./logo.svg";
import "./styles.css";

const Logo = () => (
  <div className="logo-wrapper">
    <img className="logo" alt="HH Logo" src={hh_logo} />
  </div>
);

export default Logo;
