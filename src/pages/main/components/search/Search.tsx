import { BaseSyntheticEvent } from 'react';

import { Input, ConfigProvider } from 'antd';

import { inputStyles } from './consts';
import styles from './Search.module.scss';

import IconSearch from '/src/assets/images/search/search-icon.svg?react';

import {
  changeProductsLimitParams,
  changeProductsPageParams,
  changeProductsSearchParams,
} from '../../../../store/features/products/slice';
import { useAppDispatch } from '../../../../store/hooks';
import debounce, { delay } from '../../../../utils/debounce';

export const Search = () => {
  const dispatch = useAppDispatch();

  const defaultPageNumber = '1';
  const defaultPageSize = '10';

  const handlerSearch = debounce((e: BaseSyntheticEvent) => {
    const inputValue: string = e.target.value.trim()
      ? e.target.value.trim()
      : '';

    if (inputValue !== '') {
      dispatch(changeProductsSearchParams(inputValue));
      dispatch(changeProductsPageParams(''));
      dispatch(changeProductsLimitParams(''));
    } else {
      dispatch(changeProductsSearchParams(''));
      dispatch(changeProductsPageParams(defaultPageNumber));
      dispatch(changeProductsLimitParams(defaultPageSize));
    }
  }, delay);

  return (
    <div className={styles.interaction_bar__search}>
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
    </div>
  );
};
