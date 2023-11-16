import { toggleSidebar } from '../../../../store/features/sidebar/slice';
import { useAppDispatch } from '../../../../store/hooks';
import styles from './Menu.module.scss';

export const Menu = () => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
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
