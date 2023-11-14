import { Input, Button, Dropdown, ConfigProvider } from 'antd';
import styles from './Search.module.scss';
import IconSearch from '/src/assets/images/search/search-icon.svg?react';
import IconButtonArrowDown from '/src/assets/images/search/button-arrow-down-icon.svg?react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectPageSize } from '../../../../store/slices/pagination/selectors';
import { inputStyles, items, menuStyles } from './utils';
import { fetchFilterProducts } from '../../../../store/slices/products/thunks';
import debounce, { delay } from '../../../../utils/debounce';
import { BaseSyntheticEvent } from 'react';

export const Search = () => {
  const dispatch = useAppDispatch();

  const currentPageSize = useAppSelector(selectPageSize);

  const handlerSearch = debounce((e: BaseSyntheticEvent) => {
    const key = 'title';
    const inputValue: string = e.target.value.trim();
    const pageSize = currentPageSize;

    dispatch(fetchFilterProducts({ key, inputValue, pageSize }));
  }, delay);

  return (
    <section className={styles.search}>
      <div className={styles.search__container}>
        <div className={styles.search__nav}>
          <img
            className={styles.search__menu_icon}
            src="/src/assets//images/search/menu-burger-icon.svg"
            alt="menu"
          />
          <form>
            <ConfigProvider
              theme={{
                token: inputStyles,
              }}
            >
              <Input
                className={styles.search__input}
                placeholder="Search"
                prefix={<IconSearch />}
                onChange={handlerSearch}
              />
            </ConfigProvider>
          </form>
        </div>
        <div className={styles.search__filter}>
          <p className={styles.search__filter_text}>Filtering by</p>
          <div className={styles.search__dropdown}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#999a1c',
                },
              }}
            >
              <Dropdown
                menu={{
                  items,
                  style: menuStyles,
                }}
                placement="bottomRight"
                trigger={['click']}
              >
                <Button icon={<IconButtonArrowDown />} />
              </Dropdown>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </section>
  );
};
