import React from 'react';
import { Link } from 'react-router';
import ListItem from '../../components/ListItem';

import './styles.css';

const NavLink = ({ item }) => {
  const content = (
    <div className="navlink-wrapper">
      <Link className="navlink" to={`/${item}`} >
        <span className="navlink-text">{item}</span>
      </Link>
    </div>
  );

  return (
    <ListItem key={`navlink-item-${item}`} item={content} />
  );
};

export default NavLink;
