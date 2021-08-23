/* eslint-disable react/require-default-props */
import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CategoriesContext from '../components/context/CategoriesContext';
import ItemsList from '../components/ItemsList/ItemsList';

const Items = ({ items }) => {
  const { setCategories } = useContext(CategoriesContext);
  useEffect(() => {
    setCategories(items.categories);
  }, []);

  return (
    <ItemsList
      items={items.items}
    />
  );
};

Items.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string,
  ),
  items: PropTypes.arrayOf({
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
      free_shipping: PropTypes.bool,
    }),
  }),
};
export const getServerSideProps = async ({ query }) => {
  const { search } = query;

  const response = await axios.get(`http://localhost:3000/api/items?q="${search}"`);
  const items = response.data;
  return {
    props: {
      items,
    },
  };
};
export default Items;
