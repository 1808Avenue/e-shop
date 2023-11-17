import { ConfigProvider, Dropdown, Button } from 'antd';

import styles from './Filter.module.scss';
import { items, menuStyles } from './consts';

import IconButtonArrowDown from '/src/assets/images/search/button-arrow-down-icon.svg?react';

export const Filter = () => {
  return (
    <div className={styles.interaction_bar__filter}>
      <p className={styles.interaction_bar__filter_text}>Filtering by</p>
      <div className={styles.interaction_bar__dropdown}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#999a1c',
            },
          }}
        >
          <Dropdown
            menu={{
              items,
              style: menuStyles,
            }}
            placement="bottomRight"
            trigger={['click']}
          >
            <Button icon={<IconButtonArrowDown />} />
          </Dropdown>
        </ConfigProvider>
      </div>
    </div>
  );
};
