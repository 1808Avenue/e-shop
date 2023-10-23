import { BrowserRouter } from 'react-router-dom';
import App from './App';

const init = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default init;
