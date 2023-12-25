import { ConfigProvider, Select } from 'antd';

import { dropdownStyles, selectOptions, selectStyles } from './consts';
import styles from './Sort.module.scss';

import IconButtonArrowDown from '/src/assets/images/search/button-arrow-down-icon.svg?react';

import { changeProductsSortParams } from '../../../../store/features/products/slice';
import { useAppDispatch } from '../../../../store/hooks';

export const Sort = () => {
  const dispatch = useAppDispatch();

  const handlerChange = (value: string) => {
    const [key, order] = value === 'default' ? ['', ''] : value.split('&');

    dispatch(changeProductsSortParams({ key, order }));
  };

  return (
    <div className={styles.interaction_bar__sort}>
      <p className={styles.interaction_bar__sort_text}>Sort by</p>
      <div className={styles.interaction_bar__select}>
        <ConfigProvider theme={selectStyles}>
          <Select
            defaultValue={'default'}
            options={selectOptions}
            dropdownStyle={dropdownStyles}
            suffixIcon={<IconButtonArrowDown />}
            placement="bottomRight"
            virtual={false}
            onChange={(value) => handlerChange(value)}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};
