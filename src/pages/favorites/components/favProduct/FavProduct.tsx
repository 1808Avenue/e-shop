import styles from './FavProduct.module.scss';
import {
  IProduct,
  useRemoveFavoriteProductMutation,
} from '../../../../store/api/products';

import FavoriteProductIcon from '/src/assets/images/products/product-favorite-icon-fill.svg?react';

import cart from '../../../../store/features/cart/cart';
import { toggleModal } from '../../../../store/features/modal/slice';
import { useAppDispatch } from '../../../../store/hooks';

export const FavProduct = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  const [removeFavoriteProduct] = useRemoveFavoriteProductMutation();

  const favoriteClassName = `${styles.fav_products__item_favorite}`;

  const handlerRemoveFavorite = async (currentProduct: IProduct) => {
    await removeFavoriteProduct({
      ...currentProduct,
      favorite: !currentProduct.favorite,
    });
  };

  const showModal = (item: IProduct) => () => {
    cart.itemToAdd = item;
    dispatch(toggleModal());
  };

  return (
    <div className={styles.fav_products__item}>
      <div className={styles.fav_products__item_title_img}>
        <button
          className={`${styles.fav_products__item_fav_btn} ${favoriteClassName}`}
          onClick={() => handlerRemoveFavorite(product)}
        >
          <FavoriteProductIcon className={styles.products__item_fav_img} />
        </button>
      </div>
      <div className={styles.fav_products__item_description}>
        <h3 className={styles.fav_products__item_name}>{product.title}</h3>
        <p className={styles.fav_products__item_price}>$ {product.price}</p>
        <button
          className={styles.fav_products__item_shopping_cart}
          onClick={showModal(product)}
        >
          <img
            src="/src/assets/images/header/shopping-cart.svg"
            draggable="false"
            alt="shopping-cart"
          />
        </button>
      </div>
    </div>
  );
};
