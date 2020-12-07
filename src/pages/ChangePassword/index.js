import React from 'react';
import Logo from '../../image/logo/logo01.png';
import './forgotPassword.css';
function GaCare() {
  return (
    <div className="page">
      <div className="page-forgotPassword">
        <div className="page-header"> หญิงตั้งครรภ์ลืมรหัสผ่าน </div>
        <img src={Logo} alt="logo" className="logo-forgotPassword" />
      </div>
    </div>
  );
}

export default GaCare;
