
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Layout = lazy(() => import(/* webpackChunkName: "layout" *//* webpackMode: "lazy" */'./Layouts/Main'));

const Home = lazy(() => import(/* webpackChunkName: "home-page" *//* webpackMode: "lazy" */'./Pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about-page" *//* webpackMode: "lazy" */'./Pages/About'));
const Services = lazy(() => import(/* webpackChunkName: "services-page" *//* webpackMode: "lazy" */'./Pages/Services'));
const Legal = lazy(() => import(/* webpackChunkName: "legal-page" *//* webpackMode: "lazy" */'./Pages/Legal'));
const Bookkeeping = lazy(() => import(/* webpackChunkName: "bookkeeping-page" *//* webpackMode: "lazy" */'./Pages/Bookkeeping'));
const Criminal = lazy(() => import(/* webpackChunkName: "criminal-page" *//* webpackMode: "lazy" */'./Pages/Criminal'));
const Personnel = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'./Pages/Personnel'));
const Expertise = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'./Pages/Expertise'));
const Safety = lazy(() => import(/* webpackChunkName: "personnel-page" *//* webpackMode: "lazy" */'./Pages/Safety'));
const Partners = lazy(() => import(/* webpackChunkName: "partners-page" *//* webpackMode: "lazy" */'./Pages/Partners'));
const Reviews = lazy(() => import(/* webpackChunkName: "consulting-page" *//* webpackMode: "lazy" */'./Pages/Reviews'));
const Contacts = lazy(() => import(/* webpackChunkName: "сontacts-page" *//* webpackMode: "lazy" */'./Pages/Contacts'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" *//* webpackMode: "lazy" */'./Pages/NotFound'));


export default function App() {

  return (
    <Suspense fallback={null}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services">
              <Route path="/" element={<Services />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/bookkeeping" element={<Bookkeeping />} />
              <Route path="/criminal" element={<Criminal />} />
              <Route path="/personnel" element={<Personnel />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/safety" element={<Safety />} />
            </Route>

            <Route path="/partners" element={<Partners />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
};
