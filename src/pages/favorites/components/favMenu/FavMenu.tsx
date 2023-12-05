import styles from './FavMenu.module.scss';
import { toggleFavProductsSidebar } from '../../../../store/features/favProducts/slice';
import { useAppDispatch } from '../../../../store/hooks';

export const FavMenu = () => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleFavProductsSidebar());
  };

  return (
    <button className={styles.fav_interaction_bar__menu_button}>
      <img
        className={styles.fav_interaction_bar__menu_icon}
        onClick={handleToggle}
        src="/src/assets/images/search/menu-burger-icon.svg"
        alt="menu"
        draggable="false"
      />
    </button>
  );
};
