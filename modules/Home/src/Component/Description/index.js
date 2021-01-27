
import { Header, Block } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Преимущество наших услуг</Header>
      </header>
      <article className={styles['content']}>
        <div className={styles['columns']}>
          <div className={styles['column']}>
            <Block
              title="снижение издержек"
              content="связанных с созданием и обслуживанием рабочих мест"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="Экономия денежных ресурсов"
              content="сокращение штата и экономия затрат на налогообложение заработной платы"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="делегирование вспомогатетльных процессов"
              content="позволяет менеджерам концентрироваться на основной деятельности"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="гарантии качества"
              content="услуги предоставляются заведомо качественно т.к. этим занимаются профессионалы"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="инвестиции в стратегически важные направления"
              content="предприятие перестает инвистировать средства в инфраструктуру, оплачивая только услуги аутсорсинговой фирмы"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="консультации экспертов"
              content="аутсорсеры - группа профессионалов, которая принимает коллегиальное решение по важным производственным вопросам"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="повышение эффективности управления предприятием"
              content="позволяет повысить эфективность управления предприятием в условиях изменений внешней среды"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="конфеденциальность"
              content="при оказании услуг, подписывается соглашение о неразглашении коммерческой тайны"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
