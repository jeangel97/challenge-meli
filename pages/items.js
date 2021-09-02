/* eslint-disable react/require-default-props */
import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ItemsList from '../components/ItemsList/ItemsList';
import { API_ROUTE_ITEMS } from '../config';
import CategoriesContext from '../context/CategoriesContext';
/**
 * Page to show the list of items from the search result
 * @param props - props object of react component
 * @param props.items - object of the response from the search api
 */
const Items = ({ items }) => {
  const { setCategories } = useContext(CategoriesContext);
  useEffect(() => {
    setCategories(items.categories);
  }, [items.categories]);
  return (
    <ItemsList
      items={items.items}
    />
  );
};

Items.propTypes = {
  items: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      last_name: PropTypes.string,
    }),
    categories: PropTypes.arrayOf(
      PropTypes.string,
    ),
    items: PropTypes.arrayOf(
      PropTypes.shape({
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
    ),
  }),
};
export const getServerSideProps = async ({ query }) => {
  const { search } = query;

  const response = await axios.get(`${API_ROUTE_ITEMS}?q="${search}"`);
  const items = response.data;
  return {
    props: {
      items,
    },
  };
};
export default Items;
