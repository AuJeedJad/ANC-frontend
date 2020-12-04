import React from 'react';
import './ultrasoundResult.css';
import ImageModal from '../ImageModal/index';

function UltrasoundResult(props) {
  return (
    <>
      <ImageModal onCloseClick={() => props.setUltrasoundResult(null)} />
    </>
  );
}

export default UltrasoundResult;
