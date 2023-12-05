import { Drawer } from 'antd';

import {
  bodyStyles,
  categories,
  mainStyles,
  rootStyles,
  wrapperStyles,
} from './consts';
import styles from './FavSidebar.module.scss';

import IconSidebarClose from '/src/assets/images/sidebar/sidebar-close-icon.svg?react';

import {
  selectFavProductsQueryParams,
  selectFavProductsSidebarStatus,
} from '../../../../store/features/favProducts/selectors';
import {
  changeFavProductsFilterParams,
  toggleFavProductsSidebar,
} from '../../../../store/features/favProducts/slice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export const FavSidebar = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectFavProductsSidebarStatus);
  const activeCategory = useAppSelector(
    selectFavProductsQueryParams
  ).category_like;
  const defaultCategory = '';

  const activeClassName = styles.fav_sidebar__list_item_active;

  const handlerToggle = () => {
    dispatch(toggleFavProductsSidebar());
  };

  const handlerFilter = (category: string) => () => {
    dispatch(
      changeFavProductsFilterParams({ key: 'category', value: category })
    );
  };

  return (
    <Drawer
      className={styles.fav_sidebar}
      style={bodyStyles}
      styles={mainStyles}
      rootStyle={rootStyles}
      contentWrapperStyle={wrapperStyles}
      closeIcon={<IconSidebarClose />}
      placement="left"
      open={isOpen}
      onClose={handlerToggle}
    >
      <h2 className={styles.fav_sidebar__title}>Category</h2>
      <div className={styles.fav_sidebar__list_container}>
        <div>
          <h3 className={styles.fav_sidebar__list_title}>Children</h3>
          <ul className={styles.fav_sidebar__list}>
            <li
              className={`${styles.fav_sidebar__list_item} ${
                activeCategory === defaultCategory
                  ? activeClassName
                  : defaultCategory
              }`}
            >
              <button
                className={styles.fav_sidebar__list_button}
                onClick={handlerFilter(defaultCategory)}
              >
                Default
              </button>
            </li>
            {categories.map((category) => (
              <li
                className={`${styles.fav_sidebar__list_item} ${
                  activeCategory === category ? activeClassName : ''
                }`}
                key={category}
              >
                <button
                  className={styles.fav_sidebar__list_button}
                  onClick={handlerFilter(category)}
                >
                  Category {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.fav_sidebar__list_title}>For women</h3>
          <ul className={styles.fav_sidebar__list}>
            {categories.map((category) => (
              <li className={styles.fav_sidebar__list_item} key={category}>
                <button
                  className={styles.fav_sidebar__list_button}
                  onClick={handlerFilter(category)}
                >
                  Category {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.fav_sidebar__list_title}>For men</h3>
          <ul className={styles.fav_sidebar__list}>
            {categories.map((category) => (
              <li className={styles.fav_sidebar__list_item} key={category}>
                <button
                  className={styles.fav_sidebar__list_button}
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
