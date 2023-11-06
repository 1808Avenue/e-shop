import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../slices/hooks';
import {
  fetchProducts,
  selectCurrentPage,
  selectLoadingStatus,
  selectProducts,
  selectPageSize,
  fetchTotalCountProducts,
} from '../../../../slices/productsSlice';
import styles from './Products.module.scss';
import { Loader } from '../../../common-components/loader';
import { Product } from '../product';
import { Pagination } from '../pagination';
import LoadingStatus from '../../../../utils/LoadingStatus';

export const Products = () => {
  const dispatch = useAppDispatch();
  const currentLoadingStatus = useAppSelector(selectLoadingStatus);
  const isLoading = currentLoadingStatus === LoadingStatus.Loading;

  const products = useAppSelector(selectProducts);
  const productsPerPage = useAppSelector(selectPageSize);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchTotalCountProducts()); // Получаем общее количество продуктов
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ currentPage, productsPerPage })); // Получаем определенное количество продуктов
  }, [dispatch, productsPerPage, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <section className={styles.products}>
        <div className={styles.products__container}>
          <div className={styles.products__list}>
            {products &&
              products.map((item) => <Product product={item} key={item.id} />)}
          </div>
          <Pagination />
        </div>
      </section>
    </main>
  );
};
