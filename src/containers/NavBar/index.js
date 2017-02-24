import React from 'react';

import Logo from '../../components/Logo';
import List from '../../components/List';
import NavLink from '../NavLink';

import "./styles.css";

const NavBar = () => (
  <nav className="navbar-wrapper">
    <Logo />
    <List
      className="navbar-list"
      component={NavLink}
      items={[ "products", "about", "contact", "terms" ]}
    />
  </nav>
);

export default NavBar;
