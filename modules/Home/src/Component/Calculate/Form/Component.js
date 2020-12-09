
import { RadioBoxField, Radio, RangeField, InputField, Button, H3, H4, P } from '@ui.packages/kit';

import React from 'react';

import Selector from './Selector';

import cn from 'classnames';
import styles from "./default.module.scss";


const TAX_SYSTEM = 'tax-system';

const STS_INCOME = 'sts-income';
const STS_INCOME_EXPENSES = 'sts-income-expenses';
const OSNO = 'osno';
const PATENT = 'patent';


function calculateTaxSystem(value) {
  switch(value) {
    case STS_INCOME_EXPENSES: return 3000;
    case OSNO: return 5000;
    case PATENT: return 500;
    default: return 1000;
  }
}

function calculateFinalAmount(data) {
  return calculateTaxSystem(data[TAX_SYSTEM]);
}

export default function Header({ handleSubmit, valid, pristine, inProcess, formData, ...props }) {
  const finalAmount = calculateFinalAmount(formData);

  function handleReset() {
    props.reset();
  }

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <div className={styles['controls']}>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <H4>Организационно правовая форма</H4>
          </div>
          <RadioBoxField name="organizational-legal-form" disabled={inProcess}>
            <Radio name="individual-entrepreneur">
              <Selector>ИП</Selector>
            </Radio>
            <Radio name="limited-liability-corporation">
              <Selector>ООО</Selector>
            </Radio>
            <Radio name="nko">
              <Selector>НКО</Selector>
            </Radio>
          </RadioBoxField>
        </div>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <H4>Система налогооблажения</H4>
          </div>
          <RadioBoxField name={TAX_SYSTEM} disabled={inProcess}>
            <Radio name={STS_INCOME}>
              <Selector>УСН доходы</Selector>
            </Radio>
            <Radio name={STS_INCOME_EXPENSES}>
              <Selector>УСН доходы/расходы</Selector>
            </Radio>
            <Radio name={OSNO}>
              <Selector>ОСНО</Selector>
            </Radio>
            <Radio name={PATENT}>
              <Selector>Патент</Selector>
            </Radio>
          </RadioBoxField>
        </div>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <H4>Количество операций в месяц</H4>
          </div>
          <RangeField name="operations" min={10} max={150} marker="до" disabled={inProcess} />
        </div>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <H4>Количество сотрудников</H4>
          </div>
          <RangeField name="employees" step={1} min={0} max={50} disabled={inProcess} />
        </div>
      </div>
      <div className={styles['content']}>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <P className={styles['text-align']}>Ориентировочная стоимость услуг:</P>
          </div>
          <H3>{ finalAmount } руб.</H3>
        </div>
        <div className={cn(styles['container'], styles['contacts'])}>
          <div className={styles['header']}>
            <H4 className={styles['text-align']}>Получить детальный расчет</H4>
          </div>
          <InputField name="name" label="Представтесь" require />
          <InputField name="phone" label="Телефон" require />
          <InputField name="company" label="Компания" />
          <div className={styles['control']}>
            <Button
              type="submit"
              mode="success"
              disabled={ ! valid || pristine || inProcess}
            >Отправить</Button>
            <Button
              type="reset"
              form="context"
              mode="primary"
              disabled={pristine || inProcess}
              onClick={handleReset}
            >Сбросить</Button>
          </div>
          <p className={styles['description']}>Соглашаюсь на обработку персональных данных</p>
        </div>
      </div>
    </form>
  );
}
