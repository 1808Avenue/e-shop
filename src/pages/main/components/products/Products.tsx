import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../slices/hooks';
import {
  fetchProducts,
  loadingProcess,
  selectLoadingStatus,
  selectProducts,
} from '../../../../slices/productsSlice';
import styles from './Products.module.scss';
import { Loader } from '../../../common-components/loader';
import { Product } from '../product';

export const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const isLoading = loadingStatus === loadingProcess.LOADING;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <section className={styles.products}>
        <div className={styles.products__container}>
          <div className={styles.products__list}>
            {products.map((item) => (
              <Product product={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
