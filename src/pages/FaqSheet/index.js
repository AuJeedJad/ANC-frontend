import React from 'react';
import Logo from '../../image/logo/logo01.png';
import './faqSheet.css';
function GaCare() {
  return (
    <div className="page">
      <div className="page-faqSheet">
        <div className="page-header"> Q&amp;A</div>
        <img src={Logo} alt="logo" className="logo-faqSheet" />
      </div>
    </div>
  );
}

export default GaCare;
