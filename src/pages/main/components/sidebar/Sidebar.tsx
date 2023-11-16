import { Drawer } from 'antd';
import { bodyStyles, mainStyles, rootStyles, wrapperStyles } from './consts';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectSidebarStatus } from '../../../../store/features/sidebar/selectors';
import { toggleSidebar } from '../../../../store/features/sidebar/slice';
import IconSidebarClose from '/src/assets/images/sidebar/sidebar-close-icon.svg?react';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectSidebarStatus);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Drawer
      className={styles.sidebar}
      style={bodyStyles}
      styles={mainStyles}
      rootStyle={rootStyles}
      contentWrapperStyle={wrapperStyles}
      closeIcon={<IconSidebarClose />}
      placement="left"
      open={isOpen}
      onClose={handleToggle}
    >
      <h2 className={styles.sidebar__title}>Category</h2>
      <div className={styles.sidebar__list_container}>
        <div>
          <h3 className={styles.sidebar__list_title}>Children</h3>
          <ul className={styles.sidebar__list}>
            <li className={styles.sidebar__list_item}>Category 1</li>
            <li className={styles.sidebar__list_item}>Category 2</li>
            <li className={styles.sidebar__list_item}>Category 3</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sidebar__list_title}>For women</h3>
          <ul className={styles.sidebar__list}>
            <li className={styles.sidebar__list_item}>Category 1</li>
            <li className={styles.sidebar__list_item}>Category 2</li>
            <li className={styles.sidebar__list_item}>Category 3</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sidebar__list_title}>For men</h3>
          <ul className={styles.sidebar__list}>
            <li className={styles.sidebar__list_item}>Category 1</li>
            <li className={styles.sidebar__list_item}>Category 2</li>
            <li className={styles.sidebar__list_item}>Category 3</li>
          </ul>
        </div>
      </div>
    </Drawer>
  );
};
