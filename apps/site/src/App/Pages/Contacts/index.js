
import React, { lazy, Suspense } from 'react';

// import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function ContactsPage() {
  return (
    <Suspense fallback={null}>
      <Partition title="Контакты">

      </Partition>
    </Suspense>
  );
};
