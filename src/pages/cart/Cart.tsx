import { observer } from 'mobx-react-lite';

import { CartItems } from './components/cartItems';
import { Header } from '../common-components/header';

export const Cart = observer(() => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <CartItems />
      </main>
    </div>
  );
});
