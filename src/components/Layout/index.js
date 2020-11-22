import React from 'react';
import NavBar from '../NavBar/index';

function Layout({ children }) {
  // children เป็น special property ที่บอกว่าเป็น children ที่component นี้คร่อมอยู่เมื่อเรียกใช้ ต้องkeywordนี้เท่านั้น
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
