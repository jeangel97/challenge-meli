/* eslint-disable react/require-default-props */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <div>{JSON.stringify(item)}</div>
);
export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  const response = await axios.get(`http://localhost:3000/api/items/${id}`);
  const item = response.data;
  return {
    props: {
      item,
    },
  };
};
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number,
    }),
    picture: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    free_shipping: PropTypes.bool,
    description: PropTypes.string,
  }),
};
export default Item;
