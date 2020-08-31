
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "not-found-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function NotFound() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
