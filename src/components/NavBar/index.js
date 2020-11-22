import React, { useState, useContext } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-sidebar">
        <div className="nav-link" style={{ left: '0%' }}>
          โรงพยาบาล
        </div>
        <div className="side-container">ง่วงแล้ว ยังไม่เสร็จนะ</div>
      </div>
      <div className="nav-link" style={{ left: '10%' }}>
        ประเมิน
        <br />
        ความเสี่ยง
      </div>
      <div className="nav-link" style={{ left: '20%' }}>
        หลังคลอด
      </div>
      <div className="nav-link" style={{ left: '30%' }}>
        ทันตกรรม
      </div>
      <div className="nav-link" style={{ left: '40%' }}>
        ดูแล
        <br />
        ตามอายุครรภ์
      </div>
      <div className="nav-link--active" style={{ left: '50%' }}>
        ผลการตรวจ
        <br />
        ทางห้องปฏิบัติการ
      </div>
      <div className="nav-link" style={{ left: '60%' }}>
        ตรวจครรภ์
      </div>
      <div className="nav-link" style={{ left: '70%' }}>
        หน้าหลัก
        <br />
        หญิงตั้งครรภ์
      </div>
    </nav>
  );
}

export default NavBar;
