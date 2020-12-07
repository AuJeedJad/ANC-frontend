import React from 'react';
import Logo from '../../image/logo/logo01.png';
import './gaCare.css';
function GaCare() {
  return (
    <div className="page">
      <div className="page-gaCare">
        <div className="page-header"> บริการตามอายุครรภ์</div>
        <img src={Logo} alt="logo" className="logo-gaCare" />
      </div>
    </div>
  );
}

export default GaCare;
