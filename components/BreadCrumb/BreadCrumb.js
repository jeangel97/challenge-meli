/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './BreadCrumb.module.scss';
/**
 * Component to show the breadcrumb path of the categories
 * @param props - props object of react component
 * @param props.categories - Array of categories to show
 */
const BreadCrumb = ({ categories }) => {
  if (categories.length !== 0) {
    return (
      <div className="col-10 col-offset-2">
        <ol className={styles.breadcrumb}>
          {categories.map((category) => (
            <li key={category} className={styles.breadcrumbItem}>{category}</li>
          ))}
        </ol>
      </div>
    );
  }
  return (
    <div className={`col-10 col-offset-2 ${styles.marginDiv}`} />
  );
};

BreadCrumb.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default BreadCrumb;
