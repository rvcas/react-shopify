import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';

import {
  selectError,
  selectLoading,
  selectProducts,
} from '../App/selectors';

import List from '../../components/List';
import ProductsListItem from '../ProductsListItem';

import './styles.css';

const ProductsPage = ({ products, loading, error }) => {
  let content = (<div></div>);

  if (loading) {
    content = "Loading...";
  } else if (error !== false) {
    content = "Error Loading Products";
  } else if (products !== false) {
    content = (<List className="prods-wrapper" component={ProductsListItem} items={products} />);

  }

  return (
    <div className="productspage-wrapper">
      <Helmet
        title="Products"
        meta={[
          { name: 'Syndicate Swag', content: 'All the swaggiest swag' },
        ]}
      />
      {content}
    </div>
  );
};

ProductsPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  products: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  error: selectError(),
  loading: selectLoading(),
  products: selectProducts(),
});

export default connect(mapStateToProps, null)(ProductsPage);
