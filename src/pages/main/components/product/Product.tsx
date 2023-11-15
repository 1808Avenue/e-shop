import { Link } from 'react-router-dom';

import { TProduct } from '../../../../store/features/products/slice';

import FavoriteProductIcon from '/src/assets/images/products/product-favorite-icon-fill.svg?react';

import styles from './Product.module.scss';

export const Product = ({ product }: { product: TProduct }) => {
  return (
    <div className={styles.products__item}>
      <div className={styles.products__item_title_img}>
        <FavoriteProductIcon />
      </div>
      <div className={styles.products__item_description}>
        <h3 className={styles.products__item_name}>{product.title}</h3>
        <p className={styles.products__item_price}>$ {product.price}</p>
        <Link className={styles.products__item_shopping_cart} to="#">
          <img
            src="/src/assets/images/header/shopping-cart.svg"
            draggable="false"
            alt="shopping-cart"
          />
        </Link>
      </div>
    </div>
  );
};
