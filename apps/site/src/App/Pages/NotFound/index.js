
import React, { lazy, Suspense, useEffect } from 'react';

// import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function AboutPage() {

  useEffect(() => {
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Partition title="Страница не найдена">

      </Partition>
    </Suspense>
  );
};
