
import { PartitionLayout } from '@ui.packages/kit';

import React, { useEffect } from 'react';


export default function AboutPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Страница не найдена';
    // document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <PartitionLayout>
      <p>Not found</p>
    </PartitionLayout>
  );
};
