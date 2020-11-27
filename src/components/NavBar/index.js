import React, { useState } from 'react';
import './navBar.css';
import SideBar from '../SideBar/index';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const navTab =
    props.role === 'mother'
      ? [
          { name: `เพิ่มเติม`, path: '' },
          { name: `สินค้าสำหรับเด็กอ่อน`, path: '/shopping/baby' },
          { name: `สินค้าสำหรับหญิงตั้งครรภ์`, path: '/shopping/mom' },
          { name: `อ่านบทความ`, path: '/content' },
          { name: `หน้าหลัก`, path: '/' },
        ]
      : props.role === 'staff'
      ? [
          { name: `เพิ่มเติม`, path: '' },
          { name: 'ทันตกรรม', path: '/staff/dental' },
          { name: `ดูแลตามอายุครรภ์`, path: '/staff/' },
          { name: `ผลการตรวจทางห้องปฏิบัติการ`, path: '/staff/lab' },
          { name: `ตรวจครรภ์`, path: '/staff/anc' },
          { name: `หน้าหลักหญิงตั้งครรภ์`, path: '/staff/motherReport' },
        ]
      : [
          { name: `ติดต่อเรา`, path: '/contactUs' },
          { name: `หาสินค้าสำหรับเด็กอ่อน`, path: '/shopping/baby' },
          { name: `หาสินค้าสำหรับหญิงตั้งครรภ์`, path: '/shopping/mom' },
          { name: `เข้าสู่ระบบ`, path: '/' },
          { name: `หน้าหลักบทคาม`, path: '/content' },
        ];

  const navTabCount = navTab.length;
  const navTabWidth = 68 / navTabCount + 32 / (navTabCount - 2);
  const navTabMove = (100 - navTabWidth) / (navTabCount - 1);
  const [tabStatus, setTabStatus] = useState({});
  const [tabSelect, setTabSelect] = useState(navTabCount - 1);

  const setZIndex = (tabNO) => {
    let newTabStatus = {};
    for (let i = 0; i <= navTabCount - 1; i++) {
      newTabStatus = i >= tabNO ? { ...newTabStatus, [i]: tabNO - i + 10 } : { ...newTabStatus, [i]: i - tabNO + 10 };
    }
    setTabStatus(newTabStatus);
  };

  return (
    <nav className="nav-container" onMouseLeave={() => setZIndex(tabSelect)}>
      {navTab.map((topic, ind) => {
        return (
          <Link className="nav-sidebar" to={topic.path}>
            <div
              className={`nav-link ${tabSelect === ind ? 'nav-link--active' : null}`}
              onMouseOver={() => {
                setZIndex(ind);
              }}
              onClick={() => {
                setTabSelect(ind);
                setZIndex(ind);
              }}
              style={{
                left: `${navTabMove * ind}%`,
                zIndex: tabStatus[ind],
                width: `${navTabWidth}%`,
              }}
            >
              {topic.name}
            </div>
            {topic.name === `เพิ่มเติม` ? (
              <SideBar role={props.role} setRole={props.setRole} width={navTabWidth} />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
