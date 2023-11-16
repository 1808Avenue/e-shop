import { Input, ConfigProvider } from 'antd';
import styles from './Search.module.scss';
import IconSearch from '/src/assets/images/search/search-icon.svg?react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectPageSize } from '../../../../store/features/pagination/selectors';
import { inputStyles } from './consts';
import { fetchFilterProducts } from '../../../../store/features/products/thunks';
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
