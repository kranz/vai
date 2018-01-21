/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import ProductsList from '../../components/ProductsList';

function action() {
  const listaProdotti = [
    {
      _id: '5a61b31e009c0bef5d724a47',
      name: 'PROSCIUTTO COTTO LENTI 80G',
      EANCode: '',
      price: 12.0,
    },
    {
      _id: '5a61b31e009c0bef5d724a48',
      name: 'GRANA PADANO DOP COOP 100g',
      EANCode: '',
      price: 2.05,
    },
    {
      _id: '5a61b31e009c0bef5d724a49',
      name: 'PETTO DI POLLO BIO COOP',
      EANCode: '',
      price: 7.21,
    },
    {
      _id: '5a61b31e009c0bef5d724a4a',
      name: 'PESTO SENZA AGLIO NOVELLA 120g',
      EANCode: '',
      price: 14.33,
    },
  ];
  return {
    title: 'Elenco prodotti',
    component: (
      <Layout>
        <ProductsList products={listaProdotti} />
      </Layout>
    ),
  };
}

export default action;
