import React, { useState } from 'react';

import styles from './Product.module.scss';

import FavoriteProductIcon from '/src/assets/images/products/product-favorite-icon-fill.svg?react';

import {
  IProduct,
  useUpdateProductMutation,
} from '../../../../store/api/products';
import cart from '../../../../store/features/cart/cart';
import { toggleModal } from '../../../../store/features/modal/slice';
import { useAppDispatch } from '../../../../store/hooks';

export const Product = React.memo(({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  const [updateProduct] = useUpdateProductMutation();
  const [isFavorite, setIsFavorite] = useState(product?.favorite);

  const favoriteClassName = isFavorite
    ? `${styles.products__item_favorite}`
    : null;

  const handlerToggleFavorite = async (currentProduct: IProduct) => {
    setIsFavorite(!isFavorite);

    await updateProduct({ ...currentProduct, favorite: !isFavorite });
  };

  const showModal = (item: IProduct) => () => {
    cart.itemToAdd = item;
    dispatch(toggleModal());
  };

  return (
    <div className={styles.products__item} key={product.id}>
      <div className={styles.products__item_title_img}>
        <button
          className={`${styles.products__item_fav_btn} ${favoriteClassName}`}
          onClick={() => handlerToggleFavorite(product)}
        >
          <FavoriteProductIcon className={styles.products__item_fav_img} />
        </button>
      </div>
      <div className={styles.products__item_description}>
        <h3 className={styles.products__item_name}>{product.title}</h3>
        <p className={styles.products__item_price}>$ {product.price}</p>
        <button
          className={styles.products__item_shopping_cart}
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
});
