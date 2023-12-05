import { Pagination as AntdPagination, ConfigProvider, Select } from 'antd';

import IconPaginationArrow from '/src/assets/images/products/pagination-arrow-icon.svg?react';

import {
  dropdownStyles,
  paginationStyles,
  selectOptions,
  selectStyles,
} from './consts';
import styles from './Pagination.module.scss';
import { selectProductsQueryParams } from '../../../../store/features/products/selectors';
import {
  changeProductsLimitParams,
  changeProductsPageParams,
} from '../../../../store/features/products/slice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export const Pagination = ({ totalCount }: { totalCount: number }) => {
  const dispatch = useAppDispatch();

  const params = useAppSelector(selectProductsQueryParams);
  const pageNumber = Number(params._page);
  const pageSize = Number(params._limit);

  const handlerChangePageNumber = (newPageNumber: number) => {
    dispatch(changeProductsPageParams(newPageNumber));
  };

  const handlerChangePageSize = (newPageSize: number) => {
    if (pageNumber * newPageSize > totalCount) {
      dispatch(changeProductsPageParams(Math.ceil(totalCount / newPageSize)));
      dispatch(changeProductsLimitParams(newPageSize));
    } else {
      dispatch(changeProductsLimitParams(newPageSize));
    }
  };

  return (
    <div className={styles.products__pagination}>
      <p className={styles.products__pagination_text}>Products per on page:</p>
      <ConfigProvider theme={selectStyles}>
        <Select
          popupClassName={styles.products__pagination_dropdown}
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
