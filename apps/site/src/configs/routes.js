
import React from 'react';
import { useRoutes } from "react-router-dom";

import Home from '@modules/home';
import About from '@modules/about';

import Services from /* webpackChunkName: "services-page" *//* webpackMode: "lazy" */'../Pages/Services';
import Legal from /* webpackChunkName: "legal-page" *//* webpackMode: "lazy" */'../Pages/Legal';
import Bookkeeping from /* webpackChunkName: "bookkeeping-page" *//* webpackMode: "lazy" */'../Pages/Bookkeeping';
import Criminal from /* webpackChunkName: "criminal-page" *//* webpackMode: "lazy" */'../Pages/Criminal';
import Personnel from /* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'../Pages/Personnel';
import Expertise from /* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'../Pages/Expertise';
import Safety from /* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'../Pages/Safety';
import Partners from /* webpackChunkName: "partners-page" *//* webpackMode: "lazy" */'../Pages/Partners';
import Reviews from /* webpackChunkName: "consulting-page" *//* webpackMode: "lazy" */'../Pages/Reviews';
import Contacts from /* webpackChunkName: "contacts-page" *//* webpackMode: "lazy" */'../Pages/Contacts';

import NotFound from /* webpackChunkName: "not-found" *//* webpackMode: "lazy" */'../Pages/NotFound';


export default function Routes() {
  return useRoutes([
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
  ]);
}
