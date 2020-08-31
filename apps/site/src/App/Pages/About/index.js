
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "about-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function About() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
