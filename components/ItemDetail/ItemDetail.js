/* eslint-disable react/require-default-props */
import Image from 'next/image';
import CurrencyFormat from 'react-currency-format';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemDetail.module.scss';

/**
 * Component to show the detailed view of the item
 * @param props - props object of react component
 * @param props.item - item object with description to show for detail
 */
function ItemDetail({ item }) {
  return (
    <div className={`grid-container-10-cols ${styles.itemDetailMainContainer}`}>
      <div className="col-7">
        <Image src={item.picture} width={680} height={680} />
        <div>
          <h1 className={styles.itemDetailDescriptionHeadText}>Descripción del producto</h1>
          <p className={styles.itemDetailDescriptionParagraph}>{item.description}</p>
        </div>
      </div>
      <div className="col-3">
        <p>
          {item.condition === 'new' ? 'Nuevo' : 'Usado'}
          &nbsp;
          •
          &nbsp;
          {item.sold_quantity ?? 0 }
          &nbsp;
          vendidos
        </p>
        <h1 className={styles.itemDetailTitle}>{item.title}</h1>
        <h2 className={styles.itemDetailPrice}>
          $
          <CurrencyFormat value={Math.floor(item.price.amount)} displayType="text" thousandSeparator="." decimalSeparator="," />
          <sup className={styles.itemDetailPriceDecimals}>{(`${item.price.decimals}`).split('.')[1]}</sup>
        </h2>
        <button type="button" className={styles.itemDetailButton}>Comprar</button>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
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
    sold_quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
export default ItemDetail;
