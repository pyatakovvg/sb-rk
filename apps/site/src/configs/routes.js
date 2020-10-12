
import React, { lazy } from 'react';
import { useRoutes } from "react-router-dom";


const Home = lazy(() => import(/* webpackChunkName: "home-page" *//* webpackMode: "lazy" */'../Pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about-page" *//* webpackMode: "lazy" */'../Pages/About'));
const Services = lazy(() => import(/* webpackChunkName: "services-page" *//* webpackMode: "lazy" */'../Pages/Services'));
const Legal = lazy(() => import(/* webpackChunkName: "legal-page" *//* webpackMode: "lazy" */'../Pages/Legal'));
const Bookkeeping = lazy(() => import(/* webpackChunkName: "bookkeeping-page" *//* webpackMode: "lazy" */'../Pages/Bookkeeping'));
const Criminal = lazy(() => import(/* webpackChunkName: "criminal-page" *//* webpackMode: "lazy" */'../Pages/Criminal'));
const Personnel = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'../Pages/Personnel'));
const Expertise = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'../Pages/Expertise'));
const Safety = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'../Pages/Safety'));
const Partners = lazy(() => import(/* webpackChunkName: "partners-page" *//* webpackMode: "lazy" */'../Pages/Partners'));
const Reviews = lazy(() => import(/* webpackChunkName: "consulting-page" *//* webpackMode: "lazy" */'../Pages/Reviews'));
const Contacts = lazy(() => import(/* webpackChunkName: "сontacts-page" *//* webpackMode: "lazy" */'../Pages/Contacts'));

const NotFound = lazy(() => import(/* webpackChunkName: "not-found" *//* webpackMode: "lazy" */'../Pages/NotFound'));


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
