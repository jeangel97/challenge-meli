/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { API_ROUTE_ITEMS_ID } from '../../config';
/**
 * Item page to render the detail
 * @param props - props object of react component
 * @param prop.item - item object to show
 */
const Item = ({ item }) => (
  <div className="col-10 col-offset-2">
    <ItemDetail
      item={item.item}
    />
  </div>
);
export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  const response = await axios.get(`${API_ROUTE_ITEMS_ID + id}`);

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
