
import { RoutesContext } from '@ui.packages/contexts';

import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  const Routes = useContext(RoutesContext);

  return (
    <Router>
      <Routes />
    </Router>
  );
};
