import { useEffect } from 'react';

import { Card, Empty } from 'antd';

import styles from './FavProducts.module.scss';
import {
  IProduct,
  useGetFavoriteProductsQuery,
} from '../../../../store/api/products';
import { selectFavProductsQueryParams } from '../../../../store/features/favProducts/selectors';
import { useAppSelector } from '../../../../store/hooks';
import { Error } from '../../../common-components/error';
import { Loader } from '../../../common-components/loader';
import { Modal } from '../../../common-components/modal';
import { FavPagination } from '../favPagination';
import { FavProduct } from '../favProduct';

export const FavProducts = () => {
  const queryParams = useAppSelector(selectFavProductsQueryParams);

  const { data, isLoading, isFetching, isError, refetch } =
    useGetFavoriteProductsQuery(queryParams);

  useEffect(() => {
    refetch();
  }, [refetch, queryParams]);

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <section className="fav_products">
      <div className={styles.fav_products__container}>
        <div className={styles.fav_products__list}>
          {data &&
            data.products.map((item: IProduct) =>
              isFetching ? (
                <Card
                  key={item.id}
                  className={styles.fav_products__card}
                  loading={isFetching}
                />
              ) : (
                <FavProduct product={item} key={item.id} />
              )
            )}
        </div>
        {data && data.products.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        {data && data.totalCount !== 0 && (
          <FavPagination totalCount={data.totalCount} />
        )}
      </div>
      <Modal />
    </section>
  );
};
