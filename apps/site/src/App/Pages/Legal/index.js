
import React, { lazy, Suspense, useEffect } from 'react';


const Page = lazy(() => import(/* webpackChunkName: "legal-page-component" *//* webpackMode: "lazy" */'./Page'));


export default function Legal() {

  useEffect(() => {
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
};
