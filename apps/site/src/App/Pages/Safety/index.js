
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "safety-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Safety() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
