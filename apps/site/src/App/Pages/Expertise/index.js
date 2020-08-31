
import React, { lazy, Suspense } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "expertise-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Expertise() {

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
