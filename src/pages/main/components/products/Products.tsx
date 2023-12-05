import { Card, Empty } from 'antd';

import styles from './Products.module.scss';
import { IProduct, useGetProductsQuery } from '../../../../store/api/products';
import { selectProductsQueryParams } from '../../../../store/features/products/selectors';
import { useAppSelector } from '../../../../store/hooks';
import { Error } from '../../../common-components/error';
import { Loader } from '../../../common-components/loader';
import { Pagination } from '../pagination';
import { Product } from '../product';

export const Products = () => {
  const queryParams = useAppSelector(selectProductsQueryParams);

  const { data, isLoading, isFetching, isError } =
    useGetProductsQuery(queryParams);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="products">
      <div className={styles.products__container}>
        <div className={styles.products__list}>
          {data &&
            data.products.map((item: IProduct) =>
              isFetching ? (
                <Card
                  key={item.id}
                  className={styles.products__card}
                  loading={isFetching}
                />
              ) : (
                <Product product={item} key={item.id} />
              )
            )}
        </div>
        {data && data.products.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        {data && data.totalCount !== 0 && (
          <Pagination totalCount={data.totalCount} />
        )}
      </div>
    </section>
  );
};
