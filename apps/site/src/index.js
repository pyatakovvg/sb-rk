
import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';

import * as serviceWorker from './serviceWorker';

import './styles/default.module.scss';


const App = lazy(() => import(/* webpackChunkName: "main-app" *//* webpackMode: "lazy" */'./App'));


(async () => {

  ReactDOM.render((
    <Suspense fallback={null}>
      <App />
    </Suspense>
  ), document.getElementById('root'));

  serviceWorker.unregister();
})();


