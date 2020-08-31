
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "home-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Home() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
