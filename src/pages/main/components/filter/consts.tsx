import { MenuProps } from 'antd';

import IconArrowUp from '/src/assets/images/search/arrow-up-icon.svg?react';
import IconArrowDown from '/src/assets/images/search/arrow-down-icon.svg?react';

export const menuStyles = {
  borderRadius: 0,
  background: '#fff',
  boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.25)',
  padding: '10px',
};

export const items: MenuProps['items'] = [
  {
    label: 'Date descending',
    key: '0',
    icon: <IconArrowDown />,
  },
  {
    label: 'Date in ascending order',
    key: '1',
    icon: <IconArrowUp />,
  },
  {
    label: 'Name descending',
    key: '2',
    icon: <IconArrowDown />,
  },
  {
    label: 'Name in ascending order',
    key: '3',
    icon: <IconArrowUp />,
  },
  {
    label: 'Price descending',
    key: '4',
    icon: <IconArrowDown />,
  },
  {
    label: 'Price in ascending order',
    key: '5',
    icon: <IconArrowUp />,
  },
  {
    label: 'Popularity descending',
    key: '6',
    icon: <IconArrowDown />,
  },
  {
    label: 'Popularity in ascending order',
    key: '7',
    icon: <IconArrowUp />,
  },
];
