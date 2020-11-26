import React from 'react';
import Logo from '../../image/logo/logo01.png';
import './notFound.css';

function NotFound() {
  return (
    <div className="page">
      <div className="page-notfound">
        <h1 className="page-header" style={{ width: '30%' }}>
          404 <br />
          Not Found
        </h1>
        <img src={Logo} alt="logo" className="logo-notfound" />
      </div>
    </div>
  );
}

export default NotFound;
