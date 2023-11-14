const apiPath = 'http://localhost:3001';

export default {
  api: {
    productsPath: (pageNumber: number, pageSize: number) =>
      [apiPath, `products?_page=${pageNumber}&_limit=${pageSize}`].join('/'),
    productsTotalCount: () => [apiPath, 'totalCount'].join('/'),
    productsFilterPath: (key: string, inputValue: string, pageSize: number) =>
      [apiPath, `products?${key}_like=${inputValue}&_limit=${pageSize}}`].join(
        '/'
      ),
  },
  pages: {
    rootPagePath: () => '/',
    loginPagePath: () => '/login',
    signupPagePath: () => '/signup',
    userPagePath: () => '/user',
    favProductsPagePath: () => '/favorite-products',
    shoppingCartPagePath: () => '/shopping-cart',
  },
};
