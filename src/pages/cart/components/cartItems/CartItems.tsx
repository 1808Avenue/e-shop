import { Checkbox, ConfigProvider, Empty } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';

import styles from './CartItems.module.scss';
import routes from '../../../../routes';
import cart from '../../../../store/features/cart/cart';
import { CartItem } from '../cartItem';
import { CartSummary } from '../cartSummary';

import IconBackButton from '/src/assets/images/cart/icon-back-button.svg?react';

export const CartItems = observer(() => {
  const { state } = useLocation();

  const pathFrom =
    state.from === routes.pages.shoppingCartPagePath()
      ? routes.pages.rootPagePath()
      : state.from;

  const allSelectStatus = cart.allSelectStatus;

  const handlerToggleSelectAllItems = (e: CheckboxChangeEvent) => {
    cart.toggleSelectAllItems(e.target.checked);
  };

  return (
    <section className={styles.cart_items}>
      <div className={styles.cart_items__container}>
        <Link className={styles.cart_items__back_button} to={pathFrom}>
          <IconBackButton />
        </Link>
        <h1 className={styles.cart_items__title}>Your Basket</h1>
        {cart.items.length === 0 ? (
          <Empty
            className={styles.cart_items__empty}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Cart is empty"
          />
        ) : (
          <>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#000',
                },
              }}
            >
              <Checkbox
                className={styles.cart_items__subtitle}
                onChange={handlerToggleSelectAllItems}
                checked={allSelectStatus}
              >
                <span>Select all products</span>
              </Checkbox>
            </ConfigProvider>
            <ul className={styles.cart_items__list}>
              {cart.items.map((item) => (
                <CartItem product={item} key={item.id} />
              ))}
            </ul>
            <CartSummary />
            <div className={styles.cart_items__pay}>
              <button className={styles.cart_items__pay_button}>Pay now</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
});
