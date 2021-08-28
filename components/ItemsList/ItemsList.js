/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

// import styles from './ItemsList.module.scss';

function ItemsList({ items }) {
  return (
    <div className="col-10 col-offset-2">
      { items.map((item) => <Item key={item.id} item={item} />) }
    </div>

  );
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number.isRequired,
      }),
      picture: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      free_shipping: PropTypes.bool.isRequired,
      address: PropTypes.string.isRequired,
    }),
  ),
};
export default ItemsList;
