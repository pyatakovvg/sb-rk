
import { MenuContext, RoutesContext } from '@ui.packages/contexts';

import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';

import * as serviceWorker from './serviceWorker';

import './styles/default.module.scss';

import menuConfig from './configs/menu.json';
import RoutesConfig from './configs/routes';


const App = lazy(() => import(/* webpackChunkName: "main-app" *//* webpackMode: "lazy" */'./App'));


(async () => {

  ReactDOM.render((
    <Suspense fallback={null}>
      <RoutesContext.Provider value={RoutesConfig}>
        <MenuContext.Provider value={menuConfig}>
          <App />
        </MenuContext.Provider>
      </RoutesContext.Provider>
    </Suspense>
  ), document.getElementById('root'));

  serviceWorker.unregister();
})();


