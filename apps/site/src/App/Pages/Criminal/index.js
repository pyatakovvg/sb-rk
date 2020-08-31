
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "criminal-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Criminal() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
