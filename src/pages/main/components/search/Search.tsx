import { Input, ConfigProvider } from 'antd';

import { inputStyles } from './consts';
import styles from './Search.module.scss';

import IconSearch from '/src/assets/images/search/search-icon.svg?react';

import { selectPageSize } from '../../../../store/features/pagination/selectors';

import { BaseSyntheticEvent } from 'react';

import { fetchFilterProducts } from '../../../../store/features/products/thunks';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import debounce, { delay } from '../../../../utils/debounce';

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
    <form className={styles.interaction_bar__search}>
      <ConfigProvider
        theme={{
          token: inputStyles,
        }}
      >
        <Input
          placeholder="Search"
          prefix={<IconSearch />}
          onChange={handlerSearch}
        />
      </ConfigProvider>
    </form>
  );
};
