import type { MenuProps } from 'antd';
import { Dropdown, Button, ConfigProvider } from 'antd';
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';
import { useAuth } from '../../../contexts/AuthContext';
import routes from '../../../routes';

import IconUser from '/src/assets/images/header/user-icon.svg?react';
import IconFavorite from '/src/assets/images/header/favorite-icon.svg?react';
import IconLogout from '/src/assets/images/header/logout-icon.svg?react';

import cart from '../../../store/features/cart/cart';

const menuStyles = {
  borderRadius: 0,
  minWidth: '208px',
  background: '#fff',
  boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.25)',
  padding: '12px',
};

export const Header = observer(() => {
  const { user, logOut } = useAuth();

  const { pathname } = useLocation();

  const items: MenuProps['items'] = [
    {
      label: <Link to={routes.pages.userPagePath()}>Profile</Link>,
      key: '0',
      icon: <IconUser />,
    },
    {
      label: (
        <Link to={routes.pages.favoritesPagePath()}>Favorite product</Link>
      ),
      key: '1',
      icon: <IconFavorite />,
    },
    {
      label: 'Log Out',
      key: '2',
      onClick() {
        logOut();
      },
      icon: <IconLogout />,
    },
  ];

  const totalCartItems = cart.items.reduce(
    (acc, item) => (acc += item.count),
    0
  );
  const classNameTotalCartItems = totalCartItems
    ? styles.header__total_count_active
    : styles.header__total_count_disable;

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link className={styles.header__logo} to={routes.pages.rootPagePath()}>
          <img
            className={styles.header__logo_img}
            src="/src/assets/images/header/logo.svg"
            draggable="false"
            alt="logo"
          />
          <h1 className={styles.header__logo_title}>E’Shop</h1>
        </Link>
        <nav className={styles.header__nav}>
          <span className={classNameTotalCartItems}>{totalCartItems}</span>
          <Link
            className={styles.header__shopping_cart}
            to={routes.pages.shoppingCartPagePath()}
            state={{ from: pathname }}
          >
            <img
              src="/src/assets/images/header/shopping-cart.svg"
              draggable="false"
              alt="shopping-cart"
            />
          </Link>

          <div className={styles.header__dropdown}>
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
                placement="bottomLeft"
                trigger={['click']}
              >
                <Button>
                  {user?.username}
                  <img
                    className={styles.header__dropdown_arrow}
                    src="/src/assets/images/header/arrow-down.svg"
                    draggable="false"
                    alt="arrow-down"
                  />
                </Button>
              </Dropdown>
            </ConfigProvider>
          </div>
        </nav>
      </div>
    </header>
  );
});
