import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <button className={styles.interaction_bar__menu_button}>
      <img
        className={styles.interaction_bar__menu_icon}
        src="/src/assets/images/search/menu-burger-icon.svg"
        alt="menu"
        draggable="false"
      />
    </button>
  );
};
