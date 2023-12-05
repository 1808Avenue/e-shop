import { Link } from 'react-router-dom';

import styles from './FavProduct.module.scss';
import {
  IProduct,
  useRemoveFavoriteProductMutation,
} from '../../../../store/api/products';

import FavoriteProductIcon from '/src/assets/images/products/product-favorite-icon-fill.svg?react';

export const FavProduct = ({ product }: { product: IProduct }) => {
  const [removeFavoriteProduct] = useRemoveFavoriteProductMutation();

  const favoriteClassName = `${styles.products__item_favorite}`;

  const handlerRemoveFavorite = async (currentProduct: IProduct) => {
    await removeFavoriteProduct({
      ...currentProduct,
      favorite: !currentProduct.favorite,
    });
  };

  return (
    <div className={styles.products__item}>
      <div className={styles.products__item_title_img}>
        <button
          className={`${styles.products__item_fav_btn} ${favoriteClassName}`}
          onClick={() => handlerRemoveFavorite(product)}
        >
          <FavoriteProductIcon className={styles.products__item_fav_img} />
        </button>
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
