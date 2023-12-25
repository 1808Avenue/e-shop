import styles from './Menu.module.scss';
import { toggleProductsSidebar } from '../../../../store/features/products/slice';
import { useAppDispatch } from '../../../../store/hooks';

export const Menu = () => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleProductsSidebar());
  };

  return (
    <button className={styles.interaction_bar__menu_button}>
      <img
        className={styles.interaction_bar__menu_icon}
        onClick={handleToggle}
        src="/src/assets/images/search/menu-burger-icon.svg"
        alt="menu"
        draggable="false"
      />
    </button>
  );
};
