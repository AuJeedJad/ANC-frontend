import React from 'react';
import Logo from '../../image/logo/logo01.png';
import './logToday.css';
function GaCare() {
  return (
    <div className="page">
      <div className="page-logToday">
        <div className="page-header"> การตรวจวันนี้</div>
        <img src={Logo} alt="logo" className="logo-logToday" />
      </div>
    </div>
  );
}

export default GaCare;
