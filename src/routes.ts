const apiPath = 'http://localhost:3000';

export default {
  api: {
    productsPath: (pageNumber: number, pageSize: number) =>
      [apiPath, `products?_page=${pageNumber}&_limit=${pageSize}`].join('/'),
    productsTotalCount: () => [apiPath, 'totalCount'].join('/'),
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
