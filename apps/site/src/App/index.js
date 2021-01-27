
import { RoutesContext } from '@ui.packages/contexts';

import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';


export default function App() {
  const routes = useContext(RoutesContext);

  return useRoutes(routes);
}
