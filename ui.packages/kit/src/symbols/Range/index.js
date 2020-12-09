
import React from 'react';
import types from 'prop-types';
import { Range, getTrackBackground } from 'react-range';

import styles from "./default.module.scss";


export default function Ranger({ step, min, max, marker, value, onChange }) {
  return (
    <div className={styles['wrapper']}>
      <Range
        values={value}
        step={step}
        min={min}
        max={max}
        onChange={(values) => onChange && onChange(values)}
        renderTrack={({ props, children }) => (
          <div
            className={styles['track']}
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ ...props['style'] }}
          >
            <div
              ref={props['ref']}
              className={styles['track__plane']}
              style={{
                background: getTrackBackground({
                  values: value,
                  colors: ['#89b7f6', '#ececec'],
                  min: min,
                  max: max,
                }),
              }}
            >{ children }</div>
          </div>
        )}
        renderMark={({ props, index }) => {
          return (
            <div className={styles['marker']} {...props} style={{ ...props.style }}>
              <div className={styles['marker__wrapper']}>
                <div
                  className={styles['marker__line']}
                  style={{ backgroundColor: index * step < value[0] ? '#89b7f6' : '#ececec' }}
                />
                {(((index * step) + min) % 10 === 0 || index === 0) && (
                  <div
                    className={styles['marker__number']}
                    style={{ color: index * step < value[0] ? '#077dee' : '#000' }}
                  >
                    { (index * step) + min }
                  </div>
                )}
              </div>
            </div>
          )
        }}
        renderThumb={({ props }) => (
          <div className={styles['thumb']} { ...props } style={{ ...props['style'] }}>
            <div className={styles['thumb__block']} />
            <div className={styles['thumb__arrow']} />
            <div className={styles['thumb__label']}>{ marker ? marker + ' ' : '' }{ value[0].toFixed(0) }</div>
          </div>
        )}
      />
    </div>
  );
}

Ranger.propTypes = {
  step: types.number,
  min: types.number,
  max: types.number,
  marker: types.string,
  value: types.array,
  onChange: types.func,
};

Ranger.defaultProps = {
  step: 10,
  min: 0,
  max: 100,
  marker: '',
  value: [0],
  onChange: null,
};
