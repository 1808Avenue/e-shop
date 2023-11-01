import { Link } from 'react-router-dom';
import styles from './Product.module.scss';
import FavoriteProductIcon from '/src/assets/images/products/product-favorite-icon.svg?react';
import { TProduct } from '../../../../slices/productsSlice';

const normalizeTitle = (title: string) => {
  return title.split(' ', 2).join(' ').replace('-', ' ').trim();
};

export const Product = ({ product }: { product: TProduct }) => {
  return (
    <div className={styles.products__item}>
      <div className={styles.products__item_title_img}>
        <FavoriteProductIcon className={styles.products__item_favorite_img} />
      </div>
      <div className={styles.products__item_description}>
        <h3 className={styles.products__item_name}>
          {normalizeTitle(product.title)}
        </h3>
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
