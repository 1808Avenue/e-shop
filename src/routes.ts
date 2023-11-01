const apiPath = 'https://fakestoreapi.com';

export default {
  api: {
    productsPath: () => [apiPath, 'products'].join('/'),
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
