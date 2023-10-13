import { useRoutes } from 'react-router-dom';
import './App.scss';
import { routes } from './constants/routes';

function App () {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
