import { Checkbox, ConfigProvider } from 'antd';
import { observer } from 'mobx-react-lite';

import styles from './CartItem.module.scss';

// import IconProductTransparent from '/src/assets/images/cart/added-product-transparent.svg?react';
import IconProductFill from '/src/assets/images/cart/added-product-fill.svg?react';
import IconMinus from '/src/assets/images/cart/icon-minus.svg?react';
import IconPlus from '/src/assets/images/cart/icon-plus.svg?react';
import IconRemove from '/src/assets/images/cart/icon-remove.svg?react';

import { IProduct } from '../../../../store/api/products';
import cart from '../../../../store/features/cart/cart';

import { useEffect, useState } from 'react';
export const CartItem = observer(({ product }: { product: IProduct }) => {
  const classNameSelected = product.selected ? styles.cart_item__selected : '';

  const { count, totalCount, price, title, selected } = product;

  const [isExceeded, setisExceeded] = useState(false);

  useEffect(() => {
    if (count >= totalCount) {
      setisExceeded(true);
    } else {
      setisExceeded(false);
    }
  }, [count, totalCount]);

  const handlerIncrement = (item: IProduct) => () => {
    cart.increment(item);
  };

  const handlerDecrement = (item: IProduct) => () => {
    cart.decrement(item);
  };

  const handlerRemoveItem = (item: IProduct) => () => {
    cart.removeItem(item);
  };

  const handlerToggleSelect = (item: IProduct) => () => {
    cart.toggleSelectItem(item);
  };

  return (
    <div
      className={`${styles.cart_item} ${classNameSelected}`}
      key={product.id}
    >
      <div className={styles.cart_item__info}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#000',
            },
          }}
        >
          <Checkbox
            onChange={handlerToggleSelect(product)}
            checked={selected}
          />
        </ConfigProvider>
        <IconProductFill className={styles.cart_item__product_img} />
        <h2 className={styles.cart_item__title}>{title}</h2>
        <p className={styles.cart_item__price}>$ {price}</p>
      </div>
      <div className={styles.cart_item__controls}>
        <button
          className={styles.cart_item__minus_button}
          onClick={handlerDecrement(product)}
        >
          <IconMinus />
        </button>
        <span className={styles.cart_item__count}>{count}</span>
        <button
          className={styles.cart_item__plus_button}
          onClick={handlerIncrement(product)}
          disabled={isExceeded}
        >
          <IconPlus />
        </button>
        <p className={styles.cart_item__total_count}>
          of <span>{totalCount}</span>
        </p>
        <p className={styles.cart_item__total_price}>$ {price * count}</p>
        <button
          className={styles.cart_item__remove_button}
          onClick={handlerRemoveItem(product)}
        >
          <IconRemove />
        </button>
      </div>
    </div>
  );
});
