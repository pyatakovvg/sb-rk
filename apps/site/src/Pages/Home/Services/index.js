
import { Title } from '@ui.packages/kit';

import React, { lazy, Suspense } from 'react';

import styles from './default.module.scss';


const Item = lazy(() => import(/* webpackChunkName: "home-service" *//* webpackMode: "lazy" */'./Item'));


export default function Services() {

  return (
    <Suspense fallback={null}>
      <article className={styles['wrapper']}>
        <div className={styles['header']}>
          <Title>Предаставляемые услуги</Title>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Item icon="far fa-money-bill-alt" title="Бухгалтерское сопровождение" href="/services/bookkeeping">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['col']}>
            <Item icon="fas fa-balance-scale" title="Юридическое сопровождение" href="/services/legal">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['col']}>
            <Item icon="fas fa-link" title="Сопровождение по уголовным делам" href="/services/criminal">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['col']}>
            <Item icon="fas fa-users" title="Кадровое сопровождение" href="/services/personnel">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['col']}>
            <Item icon="fas fa-percent" title="Независимая оценка и экспертиза" href="/services/expertise">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['col']}>
            <Item icon="fas fa-user-shield" title="Безопасность труда" href="/services/safety">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
        </div>
      </article>
    </Suspense>
  );
}
