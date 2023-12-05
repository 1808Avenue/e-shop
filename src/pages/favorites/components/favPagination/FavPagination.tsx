import { Pagination as AntdPagination, ConfigProvider, Select } from 'antd';

import IconPaginationArrow from '/src/assets/images/products/pagination-arrow-icon.svg?react';

import {
  dropdownStyles,
  paginationStyles,
  selectOptions,
  selectStyles,
} from './consts';
import styles from './FavPagination.module.scss';
import { selectFavProductsQueryParams } from '../../../../store/features/favProducts/selectors';
import {
  changeFavProductsLimitParams,
  changeFavProductsPageParams,
} from '../../../../store/features/favProducts/slice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export const FavPagination = ({ totalCount }: { totalCount: number }) => {
  const dispatch = useAppDispatch();

  const params = useAppSelector(selectFavProductsQueryParams);
  const pageNumber = Number(params._page);
  const pageSize = Number(params._limit);

  const handlerChangePageNumber = (newPageNumber: number) => {
    dispatch(changeFavProductsPageParams(newPageNumber));
  };

  const handlerChangePageSize = (newPageSize: number) => {
    if (pageNumber * newPageSize > totalCount) {
      dispatch(
        changeFavProductsPageParams(Math.ceil(totalCount / newPageSize))
      );
      dispatch(changeFavProductsLimitParams(newPageSize));
    } else {
      dispatch(changeFavProductsLimitParams(newPageSize));
    }
  };

  return (
    <div className={styles.fav_products__pagination}>
      <p className={styles.fav_products__pagination_text}>
        Products per on page:
      </p>
      <ConfigProvider theme={selectStyles}>
        <Select
          popupClassName={styles.fav_products__pagination_dropdown}
          onChange={handlerChangePageSize}
          defaultValue={pageSize}
          options={selectOptions}
          dropdownStyle={dropdownStyles}
          suffixIcon={<IconPaginationArrow />}
          getPopupContainer={(trigger) => trigger.parentElement}
        />
      </ConfigProvider>
      <ConfigProvider theme={paginationStyles}>
        <AntdPagination
          current={pageNumber}
          pageSize={pageSize}
          total={totalCount}
          showSizeChanger={false}
          onChange={handlerChangePageNumber}
          responsive
        />
      </ConfigProvider>
    </div>
  );
};
