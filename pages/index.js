import React, { useContext, useEffect } from 'react';
import CategoriesContext from '../context/CategoriesContext';
/**
 * Home page
 */
export default function Home() {
  const { setCategories } = useContext(CategoriesContext);

  useEffect(() => {
    setCategories([]);
  }, []);
  return (
    <div />
  );
}
