import { observer } from 'mobx-react-lite';

import styles from './CartSummary.module.scss';
import cart from '../../../../store/features/cart/cart';

export const CartSummary = observer(() => {
  const totalCount = cart.items
    .filter((item) => item.selected)
    .reduce((acc, item) => (acc += item.count), 0);
  const totalPrice = cart.items
    .filter((item) => item.selected)
    .reduce((acc, item) => (acc += item.price * item.count), 0);

  return (
    <div className={styles.cart_items__summary}>
      <div className={styles.cart_items__summary_count}>
        <h2 className={styles.cart_items__summary_count_text}>
          Count products:
        </h2>
        <p className={styles.cart_items__summary_count_total}>{totalCount}</p>
      </div>
      <div className={styles.cart_items__summary_price}>
        <h2 className={styles.cart_items__summary_price_text}>Total price:</h2>
        <p className={styles.cart_items__summary_price_total}>$ {totalPrice}</p>
      </div>
    </div>
  );
});
