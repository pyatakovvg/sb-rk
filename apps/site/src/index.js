
import { MenuContext, RoutesContext } from '@ui.packages/contexts';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/configureStore';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './styles/default.module.scss';

import menuConfig from './configs/menu.json';
import routesConfig from './configs/routes';


(async () => {
  ReactDOM.render((
    <Provider store={store}>
      <RoutesContext.Provider value={routesConfig}>
        <MenuContext.Provider value={menuConfig}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MenuContext.Provider>
      </RoutesContext.Provider>
    </Provider>
  ), document.getElementById('root'));

  serviceWorker.unregister();
})();


