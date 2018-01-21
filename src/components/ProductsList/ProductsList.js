/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductsList.css';
import Product from '../Product';

class ProductsList extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  render() {
    const { products } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          {products.map(prod => <Product product={prod} key={prod.name} />)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductsList);
