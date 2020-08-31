
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Layout = lazy(() => import(/* webpackChunkName: "layout" *//* webpackMode: "lazy" */'./Layout'));
const Home = lazy(() => import(/* webpackChunkName: "home-page" *//* webpackMode: "lazy" */'./Pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about-page" *//* webpackMode: "lazy" */'./Pages/About'));
const Legal = lazy(() => import(/* webpackChunkName: "legal-page" *//* webpackMode: "lazy" */'./Pages/Legal'));
const Bookkeeping = lazy(() => import(/* webpackChunkName: "bookkeeping-page" *//* webpackMode: "lazy" */'./Pages/Bookkeeping'));
const Criminal = lazy(() => import(/* webpackChunkName: "criminal-page" *//* webpackMode: "lazy" */'./Pages/Criminal'));
const Personnel = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'./Pages/Personnel'));
const Expertise = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'./Pages/Expertise'));
const Safety = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'./Pages/Safety'));
const Reviews = lazy(() => import(/* webpackChunkName: "consulting-page" *//* webpackMode: "lazy" */'./Pages/Reviews'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" *//* webpackMode: "lazy" */'./Pages/NotFound'));


export default function App() {

  return (
    <Suspense fallback={null}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services/legal" element={<Legal />} />
            <Route path="/services/bookkeeping" element={<Bookkeeping />} />
            <Route path="/services/criminal" element={<Criminal />} />
            <Route path="/services/personnel" element={<Personnel />} />
            <Route path="/services/expertise" element={<Expertise />} />
            <Route path="/services/safety" element={<Safety />} />

            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
};
