import React, { useContext, useEffect } from 'react';
import CategoriesContext from '../context/CategoriesContext';

export default function Home() {
  const { setCategories } = useContext(CategoriesContext);

  useEffect(() => {
    setCategories([]);
  }, []);
  return (
    <div />
  );
}
