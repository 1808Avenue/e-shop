import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';

const init = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default init;
