import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './router/AppRouter';
import './styles/app.scss';

const App = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

export default App;
