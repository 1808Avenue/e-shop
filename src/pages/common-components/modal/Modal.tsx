import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';
import { IProduct } from '../../../store/api/products';
import cart from '../../../store/features/cart/cart';
import { selectModalStatus } from '../../../store/features/modal/selectors';
import { toggleModal } from '../../../store/features/modal/slice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

export const Modal = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectModalStatus);

  const itemToAdd = cart.items.filter(({ id }) => id === cart.itemToAdd?.id)[0];

  const isOutOfStock = itemToAdd?.count >= itemToAdd?.totalCount;

  const hideModal = () => {
    dispatch(toggleModal());
    cart.itemToAdd = null;
  };

  const addItemToCart = (item: IProduct) => () => {
    cart.addItem(item);
    hideModal();
  };

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className={styles.modal}>
        {isOutOfStock ? (
          <>
            <h1>Out of stock</h1>
            <button
              className={`${styles.modal__button} ${styles.modal__button_decline}`}
              onClick={hideModal}
            >
              Decline
            </button>
          </>
        ) : (
          <>
            <h2 className={styles.modal__title}>Add to cart?</h2>
            <button
              className={`${styles.modal__button} ${styles.modal__button_confirm}`}
              onClick={addItemToCart(cart.itemToAdd)}
            >
              Confirm
            </button>
            <button
              className={`${styles.modal__button} ${styles.modal__button_decline}`}
              onClick={hideModal}
            >
              Decline
            </button>
          </>
        )}
      </div>
      <div className={styles.overlay} />
    </>,
    document.getElementById('portal')
  );
};
