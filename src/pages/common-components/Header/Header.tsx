import type { MenuProps } from 'antd';
import { Dropdown, Button, ConfigProvider } from 'antd';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import routes from '../../../routes';
import UserIcon from '/src/assets/images/header/user-icon.svg?react';
import FavoriteIcon from '/src/assets/images/header/favorite-icon.svg?react';
import LogoutIcon from '/src/assets/images/header/logout-icon.svg?react';

const menuStyles = {
  borderRadius: 0,
  minWidth: '208px',
  background: '#fff',
  boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.25)',
  padding: '12px',
};

export const Header = () => {
  const { user, logOut } = useAuth();

  const items: MenuProps['items'] = [
    {
      label: <Link to={routes.userPagePath()}>Profile</Link>,
      key: '0',
      icon: <UserIcon />,
    },
    {
      label: <Link to={routes.favProductsPagePath()}>Favorite product</Link>,
      key: '1',
      icon: <FavoriteIcon />,
    },
    {
      label: 'Log Out',
      key: '2',
      onClick() {
        logOut();
      },
      icon: <LogoutIcon />,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link className={styles.header__logo} to={routes.rootPagePath()}>
              <img
                className={styles.header__logo_img}
                src="/src/assets/images/header/logo.svg"
                draggable="false"
                alt="logo"
              />
              <h1 className={styles.header__logo_title}>E’Shop</h1>
        </Link>
        <nav className={styles.header__nav}>
            <Link className={styles.header__shopping_cart} to={routes.shoppingCartPagePath()}>
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
};
