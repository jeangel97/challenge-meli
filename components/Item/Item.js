/* eslint-disable react/require-default-props */
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

function Item({ item }) {
  return (
    <Link href="/" passHref>
      <div className={`grid-container-10-cols ${styles.itemContainer}`}>
        <div className={`col-2 col-align-self-center ${styles.itemImgContainer}`}>
          <Image src={item.picture} width={180} height={180} />
        </div>
        <div className={`col-5 ${styles.itemDetailsContainer}`}>
          <div className={styles.itemPriceShippingContainer}>
            <h1 className={styles.itemPrice}>
              $
              <CurrencyFormat value={item.price.amount} displayType="text" thousandSeparator="." decimalSeparator="," />
            </h1>
            {item.free_shipping && (
            <div data-testid="shipping_icon" className={styles.itemShippingIconContainer}>
              <i className={styles.itemShippingIcon} />
            </div>
            ) }
          </div>
          <div className={styles.itemTitleContainer}>
            <h2 className={styles.itemTitle}>{item.title}</h2>
          </div>
        </div>
        <div className={`col-3 ${styles.itemAddressContainer}`}>
          <p>{item.address}</p>
        </div>
      </div>
    </Link>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
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
};

export default Item;
