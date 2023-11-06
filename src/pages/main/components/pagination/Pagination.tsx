import { Pagination as AntdPagination, ConfigProvider, Select } from 'antd';
import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../slices/hooks';
import {
  changeCurrentPage,
  changePageSize,
  selectCurrentPage,
  selectPageSize,
  selectTotalProducts,
} from '../../../../slices/productsSlice';
import IconPaginationArrow from '/src/assets/images/products/pagination-arrow-icon.svg?react';

const selectOptions = [...Array(5)].map((_, i) => {
  const step = 5;
  return { value: step * (i + 1) };
});

const dropdownStyles = {
  border: '1px solid rgba(0, 0, 0, 0.20)',
  background: '#FFF',
  padding: 0,
};

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const totalProductsCount = useAppSelector(selectTotalProducts);
  const pageNumber = useAppSelector(selectCurrentPage);
  const pageSize = useAppSelector(selectPageSize);

  const onChangeCurrentPage = (newPageNumber: number) => {
    dispatch(changeCurrentPage(newPageNumber));
  };

  const onChangePageSize = (newPageSize: number) => {
    if (pageNumber * newPageSize > totalProductsCount) {
      dispatch(changeCurrentPage(Math.ceil(totalProductsCount / newPageSize)));
    }
    dispatch(changePageSize(newPageSize));
  };

  return (
    <div className={styles.pagination__container}>
      <p className={styles.pagination__text}>Products per on page:</p>
      <ConfigProvider
        theme={{
          token: {
            motionDurationMid: '0',
            colorPrimary: '#00000014',
            colorPrimaryHover: '#0000004d',
            controlItemBgHover: 'rgba(124, 40, 145, 0.8)',
            fontFamily: 'Raleway',
            lineHeight: 1.2,
            controlOutline: '0',
            borderRadius: 0,
          },
          components: {
            Select: {
              optionActiveBg: 'rgba(0, 0, 0, 0.06)',
              optionSelectedBg: 'rgba(0, 0, 0, 0.20)',
              optionFontSize: 18,
              optionHeight: 36,
              optionSelectedFontWeight: 400,
              borderRadius: 4,
            },
          },
        }}
      >
        <Select
          className={styles.pagination__select}
          popupClassName={styles.pagination__dropdown}
          onChange={(newPageSize: number) => onChangePageSize(newPageSize)}
          defaultValue={pageSize}
          options={selectOptions}
          dropdownStyle={dropdownStyles}
          suffixIcon={<IconPaginationArrow />}
        />
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00000014',
            motionDurationMid: '0',
          },
          components: {
            Pagination: {
              itemActiveBg: '#000000cc',
              colorBgTextHover: '#00000014',
              colorPrimaryHover: '0',
            },
          },
        }}
      >
        <AntdPagination
          current={pageNumber}
          pageSize={pageSize}
          total={totalProductsCount}
          showSizeChanger={false}
          onChange={(newPageNumber) => onChangeCurrentPage(newPageNumber)}
          responsive
        />
      </ConfigProvider>
    </div>
  );
};
