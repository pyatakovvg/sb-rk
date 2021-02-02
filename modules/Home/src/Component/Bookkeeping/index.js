
import { Header, UL, LI } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Бухгалтерское сопровождение</Header>
      </header>
      <article className={styles['content']}>
        <div className={styles['column']}>
          <div className={styles['block']}>
            <div className={styles['title']}>
              <Header level={3}>1. Восстановление бухгалтерского учета</Header>
            </div>
          </div>
          <div className={styles['block']}>
            <div className={styles['title']}>
              <Header level={3}>2. Бухгалтерские услуги для огранизаций</Header>
            </div>
            <div className={styles['list']}>
              <UL>
                <LI>Организация бухгалтерского учета</LI>
                <LI>Оформление первичных учетных документов</LI>
                <LI>Начисление заработной платы</LI>
                <LI>Сопровождение банковских платежей</LI>
                <LI>Расчет налогов</LI>
                <LI>Сдача отчетности</LI>
                <LI>Взаимодействие с контролирующими органами</LI>
                <LI>Ведение отдельных участков бухгалтерии</LI>
              </UL>
            </div>
          </div>
          <div className={styles['block']}>
            <div className={styles['title']}>
              <Header level={3}>3. Бухгалтерские услуги для ИП</Header>
            </div>
            <div className={styles['list']}>
              <UL>
                <LI>Организация бухгалтерского учета</LI>
                <LI>Оформление первичных учетных документов</LI>
                <LI>Начисление заработной платы</LI>
                <LI>Сопровождение банковских платежей</LI>
                <LI>Расчет налогов</LI>
                <LI>Сдача отчетности</LI>
                <LI>Взаимодействие с контролирующими органами</LI>
              </UL>
            </div>
          </div>
        </div>
        <div className={styles['column']}>
          <div className={styles['block']}>
            <div className={styles['title']}>
              <Header level={3}>4. Налоговая оптимизация</Header>
            </div>
            <div className={styles['list']}>
              <UL>
                <LI>Проведение внутренней аудиторской проверки с последующим устранением обнаруженных недостатков, нарушений, ошибок</LI>
                <LI>Разработка и отбор применимых для организации планов налогообложения, выбор оптимального среди них</LI>
                <LI>Внедрение разработанного плана налогообложения, включающее в себя корректирование документации и системы учета</LI>
                <LI>Применение плана налогообложения, контроль над его функционированием</LI>
                <LI>Предоставление консультаций по любым вопросам налогообложения и налогового учета</LI>
                <LI>Анализ документации предприятия на предмет налоговых рисков, их устранение</LI>
                <LI>Экспертный анализ налогообложения, в ходе которого проверяются проекты деятельности организации</LI>
                <LI>Поддержка при налоговых проверках и заключении договоров — как налоговая, так и правовая</LI>
                <LI>Взаимодействие с налоговыми органами — проверка обоснованности санкций, представление интересов организации в официальных инстанциях и т.п.</LI>
              </UL>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
