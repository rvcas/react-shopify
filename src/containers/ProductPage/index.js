import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';

import {
  selectLoading,
  selectError,
} from '../App/selectors';

import {
  selectProductBySlug,
} from './selectors';

import './styles.css';

const ProductPage = ({ product, error, loading, params }) => {
  let content = null, title = null;

  if (loading) {
    content = (<p>loading</p>);
    title = "loading product";
  } else if (error !== false) {
    content = (<p>error</p>);
    title = "loading error";
  } else if (product !== false && product !== undefined) {
    console.log(product);
    content = (<p>{product.attrs.handle}</p>);
    title = product.title;
  } else {
    content = (<p>not found</p>);
    title = "not found";
  }
  return (
    <div className="productpage-wrapper">
      <Helmet
        title={`HHS - ${title}`}
        meta={[
          { name: 'Syndicate Swag', content: 'All the swaggiest swag' },
        ]}
      />
      {content}
    </div>
  );
};

ProductPage.propTypes = {
  product: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  error: selectError(),
  product: selectProductBySlug(),
});

export default connect(mapStateToProps, null)(ProductPage);
