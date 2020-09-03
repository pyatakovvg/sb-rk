
import types from 'prop-types';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


const COVER_SIZE = 'cover';

const BOTH_DIRECTION = 'both';
const PORTRAIT_DIRECTION = 'portrait';
const LANDSCAPE_DIRECTION = 'landscape';


function getRation(el) {
  const RECT = el.getBoundingClientRect();
  return RECT['height'] / RECT['width'];
}

function getDirection(img, container) {
  const imageRatio = getRation(img);
  const containerRatio = getRation(container);

  if (imageRatio < containerRatio) {
    return LANDSCAPE_DIRECTION;
  }
  else if (imageRatio > containerRatio) {
    return PORTRAIT_DIRECTION;
  }
  return BOTH_DIRECTION;
}

function setProportionalImageSize(img, container) {
  const direction = getDirection(img, container);
  const containerRECT = container.getBoundingClientRect();

  if (direction === LANDSCAPE_DIRECTION) {
    img.width = containerRECT['width'];
  }
  else if (direction === PORTRAIT_DIRECTION) {
    img.height = containerRECT['height'];
  }
  else {
    img.width = containerRECT['width'];
    img.height = containerRECT['height'];
  }
}

function setCoverImageSize(img, container) {
  const direction = getDirection(img, container);
  const containerRECT = container.getBoundingClientRect();

  if (direction === LANDSCAPE_DIRECTION) {
    img.height = containerRECT['height'];
  }
  else if (direction === PORTRAIT_DIRECTION) {
    img.width = containerRECT['width'];
  }
  else {
    img.width = containerRECT['width'];
    img.height = containerRECT['height'];
  }
}


export default function Image({ className, src, size, isResize }) {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  const [isLoadingState, setLoadingState] = useState(true);
  const [isError, setError] = useState(false);

  function calculateProportions() {
    const { current: imageElement } = imageRef;
    const { current: wrapperElement } = wrapperRef;

    switch (size) {
      case COVER_SIZE: setCoverImageSize(imageElement, wrapperElement); break;
      default: setProportionalImageSize(imageElement, wrapperElement);
    }
  }

  function handleError() {
    setError(true);
    setLoadingState(false);
  }

  function handleLoaded() {
    calculateProportions();
    setLoadingState(false);
  }

  function handleResize() {
    calculateProportions();
  }

  useEffect(() => {
    const { current: imageElement } = imageRef;

    if (isResize) {
      window.addEventListener('resize', handleResize);
    }

    imageElement.addEventListener('load', handleLoaded);
    imageElement.addEventListener('error', handleError);

    return () => {
      if (isResize) {
        window.removeEventListener('resize', handleResize);
      }

      imageElement.removeEventListener('load', handleLoaded);
      imageElement.removeEventListener('error', handleError);
    };
  }, [src, size]);

  const wrapperClassName = cn(styles['wrapper'], className);
  const imageClassName = cn(styles['image'], {
    [styles['image--visible']]: ! isLoadingState,
  });

  return (
    <div className={wrapperClassName}>
      <div ref={wrapperRef} className={imageClassName}>
        <img ref={imageRef} src={src} alt="" />
      </div>
      {isLoadingState && (
        <div className={styles['loading']}>
          <span className={cn(styles['icon'], 'fas fa-circle-notch')} />
        </div>
      )}
      {isError && (
        <div className={styles['error']}>
          <span className={cn(styles['icon'], 'fas fa-exclamation-circle')} />
        </div>
      )}
    </div>
  );
}

Image.propTypes = {
  className: types.string,
  src: types.string,
  size: types.oneOf([COVER_SIZE, null]),
  isResize: types.bool,
};

Image.defaultProps = {
  className: '',
  src: null,
  size: null,
  isResize: false,
};
