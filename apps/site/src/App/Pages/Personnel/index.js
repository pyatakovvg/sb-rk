
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "personnel-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Personnel() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
