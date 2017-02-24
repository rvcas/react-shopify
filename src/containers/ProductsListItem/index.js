import React from 'react';
import { Link } from 'react-router';

import ListItem from '../../components/ListItem';

import './styles.css';

const ProductsListItem =({ item }) => {
  const content = (
    <Link to={`/products/${item.attrs.handle}`} >
      <img className="product-image" src={item.images[0].src} alt={item.title} />
    </Link>
  );

  return (
    <ListItem className="product-list__item" key={item.id} item={content} />
  );
};

ProductsListItem.propTypes = {
  item: React.PropTypes.object,
};

export default ProductsListItem;
