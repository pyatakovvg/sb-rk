
import { RadioBoxField, Radio, RangeField, InputField, Button, Header, Text } from '@ui.packages/kit';

import React from 'react';

import Selector from './Selector';

import cn from 'classnames';
import styles from "./default.module.scss";


const TAX_SYSTEM = 'tax-system';

const STS_INCOME = 'sts-income';
const STS_INCOME_EXPENSES = 'sts-income-expenses';
const OSNO = 'osno';
const PATENT = 'patent';


function calculateFinalAmount(data) {
  let amount = 0;
  if (data['organizational-legal-form'] === "individual-entrepreneur") {
    if (data['tax-system'] === "sts-income") {
      if (data['operations'][0] === 0 && data['employees'][0] === 0) {
        return 1500;
      }
      else if (
        (data['operations'][0] >= 0 && data['operations'][0] <= 30) &&
        (data['employees'][0] >= 0 && data['employees'][0] <= 5)
      ) {
        return 5000;
      }
      else if (
        (data['operations'][0] >= 30) &&
        (data['employees'][0] >= 5)
      ) {
        return 10000;
      }
    }
    else if (data['tax-system'] === "sts-income-expenses") {
      if (data['operations'][0] === 0 && data['employees'][0] === 0) {
        return 5000;
      }
      else if (
        (data['operations'][0] >= 0 && data['operations'][0] <= 30) &&
        (data['employees'][0] >= 0 && data['employees'][0] <= 5)
      ) {
        return 12000;
      }
      else if (
        (data['operations'][0] >= 30 && data['operations'][0] <= 100) &&
        (data['employees'][0] >= 5 && data['employees'][0] <= 10)
      ) {
        return 15000;
      }
      else if (
        (data['operations'][0] >= 30) &&
        (data['employees'][0] >= 5)
      ) {
        return 10000;
      }
    }
    else if (data['tax-system'] === "osno") {

    }
    else if (data['tax-system'] === "patent") {

    }
  }
  if (data['organizational-legal-form'] === "limited-liability-corporation") {
    if (data['tax-system'] === "sts-income") {

    }
    else if (data['tax-system'] === "sts-income-expenses") {

    }
    else if (data['tax-system'] === "osno") {

    }
  }
  if (data['organizational-legal-form'] === "nko") {
    if (data['tax-system'] === "sts-income") {

    }
    else if (data['tax-system'] === "sts-income-expenses") {

    }
    else if (data['tax-system'] === "osno") {

    }
  }
  console.log(data)
  return amount;
}

export default function CalculateForm({ handleSubmit, valid, pristine, inProcess, formData, ...props }) {
  const finalAmount = calculateFinalAmount(formData);

  function handleReset() {
    props.reset();
  }

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <div className={styles['controls']}>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <Header level={3}>Организационно-правовая форма</Header>
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
            <Header level={3}>Система налогооблажения</Header>
          </div>
          <RadioBoxField name={TAX_SYSTEM} disabled={inProcess}>
            <Radio name={STS_INCOME}>
              <Selector>УСН (доходы)</Selector>
            </Radio>
            <Radio name={STS_INCOME_EXPENSES}>
              <Selector>УСН (доходы - расходы)</Selector>
            </Radio>
            <Radio name={OSNO}>
              <Selector>ОСНО</Selector>
            </Radio>
            {formData['organizational-legal-form'] === 'individual-entrepreneur' && (
              <Radio name={PATENT}>
                <Selector>ПСО</Selector>
              </Radio>
            )}
          </RadioBoxField>
        </div>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <Header level={3}>Количество операций в месяц</Header>
          </div>
          <RangeField name="operations" min={0} max={150} disabled={inProcess} />
        </div>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <Header level={3}>Количество сотрудников</Header>
          </div>
          <RangeField name="employees" step={1} min={0} max={50} disabled={inProcess} />
        </div>
      </div>
      <div className={styles['content']}>
        <div className={styles['container']}>
          <div className={styles['header']}>
            <Header level={5} className={styles['text-align']}>Ориентировочная стоимость услуг:</Header>
          </div>
          <div className={styles['amount']}>
            <Header level={2}>{ finalAmount } руб.</Header>
          </div>
        </div>
        <div className={cn(styles['container'], styles['contacts'])}>
          <div className={styles['header']}>
            <Header level={3} className={styles['text-align']}>Получить детальный расчет</Header>
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
          <div className={styles['description']}>
            <Text type={Text.TYPE_COMMENT}>Соглашаюсь на обработку персональных данных</Text>
          </div>
        </div>
      </div>
    </form>
  );
}
