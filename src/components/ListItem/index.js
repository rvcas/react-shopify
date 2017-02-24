import React from 'react';

const ListItem = ({ item, className }) => (
  <li className={className || "listitem-wrapper"}>
    {item}
  </li>
);

ListItem.propTypes = {
  className: React.PropTypes.string,
  item: React.PropTypes.any,
};

export default ListItem;
