
import React from 'react';

import styles from './default.module.scss';


export default function LegalPage() {
  return (
    <article className={styles['wrapper']}>
      <div className={styles['header']}>
        <h3 className={styles['title']}>Юридическое сопровождение</h3>
      </div>
      <div className={styles['content']}>
        <article className={styles['content__block']}>
          <p className="p">Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.</p>
          <p className="p">Часто предприниматель оказывается лицом к лицу со сводом законов, кодексами, уставами и другими нормативно-правовыми актами. В работе потребуется не только их непосредственное знание, но и умение работать с ними: быстро находить нужные нормы, адекватно понимать их значение. Без грамотного юридического сопровождения бизнес ждут суды, штрафы, договорные разногласия, трения с работниками и прочие взыскания. В такой ситуации фирме необходим опытный юрист, способный своевременно и профессионально решать все вопросы.</p>
          <p className="p">Не все компании могут позволить себе содержать нужного специалиста в штате. Решить эту проблему поможет их юридическое обслуживание на основе аутсорсинга. Юристы «ШКОЛА БИЗНЕСА» специализируются на оказании таких услуг.</p>

          <h3 className="h3">В рамках услуги проводятся следующие виды работ:</h3>

          <ul className="ul">
            <li className="li">консультации с предоставлением мотивированного письменного заключения по вопросам деятельности предприятия (в рамках гражданского, процессуального, корпоративного, антимонопольного, трудового, валютного законодательства);</li>
            <li className="li">представление интересов заказчика во всех государственных структурах, включая Федеральную антимонопольную службу;</li>
            <li className="li">проверка актов работодателя и документов отдела кадров на соответствие нормам закона;</li>
            <li className="li">составление договоров;</li>
            <li className="li">участие в переговорах;</li>
            <li className="li">деловая переписка от имени предприятия;</li>
            <li className="li">правовая экспертиза входящей документации и договоров, поступающих от контрагентов;</li>
            <li className="li">регулярный мониторинг изменений в законодательстве;</li>
            <li className="li">информационно-правовое сопровождение бизнеса;</li>
            <li className="li">защита интеллектуальной собственности.</li>
          </ul>

          <p className="p">Отдельной сферой правового обслуживания бизнеса можно назвать претензионно-исковую работу юриста. В нее входят юридическое обслуживание и представительство заказчика в судах Республики Крым, осуществление от его имени и в его интересах всех процессуальных действий, начиная от составления досудебных претензий и заканчивая исполнением решения суда.</p>

          <h3 className="h3">Кроме высококачественного юридического сопровождения бизнеса, клиенты компании получают:</h3>

          <ul className="ul">
            <li className="li">экономию на зарплатных налогах, приобретении электронных правовых баз, оборудовании рабочего места, как это было бы в случае со штатным специалистом;</li>
            <li className="li">возможность спрогнозировать затраты на юридическое обслуживание, так как большая часть услуг, необходимых бизнесу заказчика, уже включена в тариф;</li>
            <li className="li">бесперебойную работу без уходов на больничный, отпусков и увольнений по собственному желанию.</li>
          </ul>

          <p className="p">Особенности предоставления услуги юридического сопровождения бизнеса</p>

          <p className="p">Компания «ШКОЛА БИЗНЕСА» оказывает услуги по сопровождению бизнеса на абонентской основе после заключения соответствующего договора.  Клиенты получают не только всестороннюю юридическую поддержку, но и комплексный правовой анализ деятельности, рекомендации по оптимизации налогообложения и ведению кадрового учета.</p>
        </article>
      </div>
    </article>
  );
};
