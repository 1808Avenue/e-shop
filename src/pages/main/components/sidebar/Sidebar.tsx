import { Drawer } from 'antd';

import {
  bodyStyles,
  categories,
  mainStyles,
  rootStyles,
  wrapperStyles,
} from './consts';
import styles from './Sidebar.module.scss';

import IconSidebarClose from '/src/assets/images/sidebar/sidebar-close-icon.svg?react';

import {
  selectProductsQueryParams,
  selectProductsSidebarStatus,
} from '../../../../store/features/products/selectors';
import {
  changeProductsFilterParams,
  toggleProductsSidebar,
} from '../../../../store/features/products/slice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectProductsSidebarStatus);
  const activeCategory = useAppSelector(
    selectProductsQueryParams
  ).category_like;
  const defaultCategory = '';

  const activeClassName = styles.sidebar__list_item_active;

  const handlerToggle = () => {
    dispatch(toggleProductsSidebar());
  };

  const handlerFilter = (category: string) => () => {
    dispatch(changeProductsFilterParams({ key: 'category', value: category }));
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
      onClose={handlerToggle}
    >
      <h2 className={styles.sidebar__title}>Category</h2>
      <div className={styles.sidebar__list_container}>
        <div>
          <h3 className={styles.sidebar__list_title}>Children</h3>
          <ul className={styles.sidebar__list}>
            <li
              className={`${styles.sidebar__list_item} ${
                activeCategory === defaultCategory
                  ? activeClassName
                  : defaultCategory
              }`}
            >
              <button
                className={styles.sidebar__list_button}
                onClick={handlerFilter(defaultCategory)}
              >
                Default
              </button>
            </li>
            {categories.map((category) => (
              <li
                className={`${styles.sidebar__list_item} ${
                  activeCategory === category ? activeClassName : ''
                }`}
                key={category}
              >
                <button
                  className={styles.sidebar__list_button}
                  onClick={handlerFilter(category)}
                >
                  Category {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.sidebar__list_title}>For women</h3>
          <ul className={styles.sidebar__list}>
            {categories.map((category) => (
              <li className={styles.sidebar__list_item} key={category}>
                <button
                  className={styles.sidebar__list_button}
                  onClick={handlerFilter(category)}
                >
                  Category {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.sidebar__list_title}>For men</h3>
          <ul className={styles.sidebar__list}>
            {categories.map((category) => (
              <li className={styles.sidebar__list_item} key={category}>
                <button
                  className={styles.sidebar__list_button}
                  onClick={handlerFilter(category)}
                >
                  Category {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Drawer>
  );
};
