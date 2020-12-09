
import { MenuContext, RoutesContext } from '@ui.packages/contexts';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { lazy, Suspense } from 'react';

import store from './redux/configureStore';
import * as serviceWorker from './serviceWorker';

import './styles/default.module.scss';

import menuConfig from './configs/menu.json';
import RoutesConfig from './configs/routes';


const App = lazy(() => import(/* webpackChunkName: "main-app" *//* webpackMode: "lazy" */'./App'));


(async () => {

  ReactDOM.render((
    <Suspense fallback={null}>
      <Provider store={store}>
        <RoutesContext.Provider value={RoutesConfig}>
          <MenuContext.Provider value={menuConfig}>
            <App />
          </MenuContext.Provider>
        </RoutesContext.Provider>
      </Provider>
    </Suspense>
  ), document.getElementById('root'));

  serviceWorker.unregister();
})();


