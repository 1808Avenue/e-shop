import { Pagination as AntdPagination, ConfigProvider, Select } from 'antd';
import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  changeCurrentPage,
  changePageSize,
} from '../../../../store/features/pagination/slice';
import { selectTotalProducts } from '../../../../store/features/products/selectors';
import IconPaginationArrow from '/src/assets/images/products/pagination-arrow-icon.svg?react';
import {
  dropdownStyles,
  paginationStyles,
  selectOptions,
  selectStyles,
} from './const';
import {
  selectCurrentPage,
  selectPageSize,
} from '../../../../store/features/pagination/selectors';
import { useCallback } from 'react';

export const Pagination = () => {
  const dispatch = useAppDispatch();

  const totalProductsCount = useAppSelector(selectTotalProducts);
  const pageNumber = useAppSelector(selectCurrentPage);
  const pageSize = useAppSelector(selectPageSize);

  const handleCurrentPage = (newPageNumber: number) => {
    dispatch(changeCurrentPage(newPageNumber));
  };

  const handlePageSize = useCallback(
    (newPageSize: number) => {
      if (pageNumber * newPageSize > totalProductsCount) {
        dispatch(
          changeCurrentPage(Math.ceil(totalProductsCount / newPageSize))
        );
      }
      dispatch(changePageSize(newPageSize));
    },
    [dispatch, pageNumber, totalProductsCount]
  );

  return (
    <div className={styles.products__pagination}>
      <p className={styles.products__pagination_text}>Products per on page:</p>
      <ConfigProvider theme={selectStyles}>
        <Select
          popupClassName={styles.products__pagination_dropdown}
          onChange={handlePageSize}
          defaultValue={pageSize}
          options={selectOptions}
          dropdownStyle={dropdownStyles}
          suffixIcon={<IconPaginationArrow />}
        />
      </ConfigProvider>
      <ConfigProvider theme={paginationStyles}>
        <AntdPagination
          current={pageNumber}
          pageSize={pageSize}
          total={totalProductsCount}
          showSizeChanger={false}
          onChange={handleCurrentPage}
          responsive
        />
      </ConfigProvider>
    </div>
  );
};
