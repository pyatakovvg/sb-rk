
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "reviews-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Reviews() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
