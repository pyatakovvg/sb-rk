
import React from 'react';

import Home from '@modules/home';
import About from '@modules/about';
import Services from '@modules/services';
import Legal from '@modules/legal';
import Bookkeeping from '@modules/bookkeeping';
import Criminal from '@modules/criminal';
import Personnel from '@modules/personnel';
import Expertise from '@modules/expertise';
import Safety from '@modules/safety';
import Partners from '@modules/partners';
import Reviews from '@modules/reviews';
import Contacts from '@modules/contacts';

import NotFound from '@modules/not-found';


const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/services',
    children: [
      {
        path: '/',
        element: <Services />,
      },
      {
        path: '/legal',
        element: <Legal />,
      },
      {
        path: '/bookkeeping',
        element: <Bookkeeping />,
      },
      {
        path: '/criminal',
        element: <Criminal />,
      },
      {
        path: '/personnel',
        element: <Personnel />,
      },
      {
        path: '/expertise',
        element: <Expertise />,
      },
      {
        path: '/safety',
        element: <Safety />,
      }
    ]
  },
  {
    path: '/partners',
    element: <Partners />,
  },
  {
    path: '/reviews',
    element: <Reviews />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
];

export default routes;
