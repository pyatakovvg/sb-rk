
import { Title } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Title>Бухгалтерское сопровождение</Title>
      </header>
      <article className={styles['content']}>
        <div className={styles['column']}>
          <h2>Бухгалтерские услуги для огранизаций</h2>
          <ul>
            <li>Организация бухгалтерского учета</li>
            <li>Оформление первичных учетных документов</li>
            <li>Начисление заработной платы</li>
            <li>Сопровождение банковских платежей</li>
            <li>Расчет налогов</li>
            <li>Сдача отчетности</li>
            <li>Взаимодействие с контролирующими органами</li>
            <li>Ведение отдельных участков бухгалтерии</li>
          </ul>
        </div>
        <div className={styles['column']}>
          <h2>Бухгалтерские услуги для ИП</h2>
          <ul>
            <li>Организация бухгалтерского учета</li>
            <li>Оформление первичных учетных документов</li>
            <li>Начисление заработной платы</li>
            <li>Сопровождение банковских платежей</li>
            <li>Расчет налогов</li>
            <li>Сдача отчетности</li>
            <li>Взаимодействие с контролирующими органами</li>
          </ul>
        </div>
        <div className={styles['column']}>
          <h2>Налоговая оптимизация</h2>
          <ul>
            <li>Проведение внутренней аудиторской проверки с последующим устранением обнаруженных недостатков, нарушений, ошибок</li>
            <li>Разработка и отбор применимых для организации планов налогообложения, выбор оптимального среди них</li>
            <li>Внедрение разработанного плана налогообложения, включающее в себя корректирование документации и системы учета</li>
            <li>Применение плана налогообложения, контроль над его функционированием</li>
            <li>Предоставление консультаций по любым вопросам налогообложения и налогового учета</li>
            <li>Анализ документации предприятия на предмет налоговых рисков, их устранение</li>
            <li>Экспертный анализ налогообложения, в ходе которого проверяются проекты деятельности организации</li>
            <li>Поддержка при налоговых проверках и заключении договоров — как налоговая, так и правовая</li>
            <li>Взаимодействие с налоговыми органами — проверка обоснованности санкций, представление интересов организации в официальных инстанциях и т.п.</li>
          </ul>
        </div>
        <div className={styles['column']}>
          <h2>Восстановление бухгалтерского учета</h2>
        </div>
      </article>
    </section>
  );
}
