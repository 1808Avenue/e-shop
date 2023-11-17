import { useEffect } from 'react';

import { Empty } from 'antd';

import styles from './Products.module.scss';
import {
  selectCurrentPage,
  selectPageSize,
} from '../../../../store/features/pagination/selectors';
import {
  selectLoadingStatus,
  selectProducts,
} from '../../../../store/features/products/selectors';
import {
  fetchProducts,
  fetchTotalQtyProducts,
} from '../../../../store/features/products/thunks';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import LoadingStatus from '../../../../utils/LoadingStatus';
import { Loader } from '../../../common-components/loader';
import { Pagination } from '../pagination';
import { Product } from '../product';

export const Products = () => {
  const dispatch = useAppDispatch();
  const currentLoadingStatus = useAppSelector(selectLoadingStatus);
  const isLoading = currentLoadingStatus === LoadingStatus.Loading;

  const products = useAppSelector(selectProducts);
  const productsPerPage = useAppSelector(selectPageSize);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchTotalQtyProducts()); // Получаем общее количество продуктов
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ currentPage, productsPerPage })); // Получаем определенное количество продуктов
  }, [dispatch, productsPerPage, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="products">
      <div className={styles.products__container}>
        <div className={styles.products__list}>
          {products &&
            products.map((item) => <Product product={item} key={item.id} />)}
        </div>
        {products.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        <Pagination />
      </div>
    </section>
  );
};
