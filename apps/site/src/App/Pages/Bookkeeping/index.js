
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "bookkeeping-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Bookkeeping() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
