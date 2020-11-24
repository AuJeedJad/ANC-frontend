import React from 'react';
import './layout.css';
import NavBar from '../NavBar/index';

function Layout({ children }) {
  // children เป็น special property ที่บอกว่าเป็น children ที่component นี้คร่อมอยู่เมื่อเรียกใช้ ต้องkeywordนี้เท่านั้น
  return (
    <>
      <NavBar />
      {children}
      <div className="deco-page">
        <div className="deco-page-left"></div>
        <div className="deco-page-right"></div>
      </div>
    </>
  );
}

export default Layout;
