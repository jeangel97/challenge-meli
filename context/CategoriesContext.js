import React from 'react';
/**
 * Context for global state in categories
 */
const CategoriesContext = React.createContext({
  categories: [],
  setCategories: () => {},
});
export default CategoriesContext;
