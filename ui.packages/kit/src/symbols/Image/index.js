
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

  console.log(imageRatio, containerRatio, !!img.src)

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


export default function Image({ src, size }) {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  const [isLoadingState, setLoadingState] = useState(true);
  const [isError, setError] = useState(false);

  function handleError(err) {
    setLoadingState(false);
    setError(true);
  }

  function handleLoaded() {
    const { current: imageElement } = imageRef;
    const { current: wrapperElement } = wrapperRef;

    switch (size) {
      case COVER_SIZE: setCoverImageSize(imageElement, wrapperElement); break;
      default: setProportionalImageSize(imageElement, wrapperElement);
    }

    setLoadingState(false);
  }

  useEffect(() => {
    const { current: imageElement } = imageRef;

    imageElement.addEventListener('load', handleLoaded);
    imageElement.addEventListener('error', handleError);
    return () => {
      imageElement.removeEventListener('load', handleLoaded);
      imageElement.removeEventListener('error', handleError);
    };
  }, [src, size]);

  const imageClassName = cn(styles['image'], {
    [styles['image--visible']]: ! isLoadingState,
  });

  return (
    <div className={styles['wrapper']}>
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
  src: types.string,
  size: types.oneOf([COVER_SIZE, null]),
};

Image.defaultProps = {
  src: null,
  size: null,
};
