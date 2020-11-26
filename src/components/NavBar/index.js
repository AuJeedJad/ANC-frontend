import React, { useState, useContext } from 'react';
import './navBar.css';
import SideBar from '../SideBar/index';

function NavBar({ role }) {
  const navTab =
    role === 'mother'
      ? [
          { name: `เพิ่มเติม`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
        ]
      : role === 'stuff'
      ? [
          { name: `เพิ่มเติม`, path: '' },
          { name: `ดูแลตามอายุครรภ์`, path: '' },
          { name: `ผลการตรวจทางห้องปฏิบัติการ`, path: '' },
          { name: `ตรวจครรภ์`, path: '' },
          { name: `หน้าหลักหญิงตั้งครรภ์`, path: '' },
        ]
      : [
          { name: `เพิ่มเติม`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
          { name: `แก้ที่NavBar`, path: '' },
        ];
  const [tabStatus, setTabStatus] = useState({});
  const [tabSelect, setTabSelect] = useState(navTab.length - 1);
  const setZIndex = (tabNO) => {
    let newTabStatus = {};
    for (let i = 0; i <= navTab.length - 1; i++) {
      // if (i === tabSelect) {
      //   newTabStatus = { ...newTabStatus, [i]: 11 };
      //   continue;
      // }
      // if (i === tabNO) {
      //   if (tabSelect - tabNO === 1 || tabSelect - tabNO === -1) {
      //     newTabStatus = { ...newTabStatus, [i]: 12 };
      //     continue;
      //   }
      // }
      newTabStatus = i >= tabNO ? { ...newTabStatus, [i]: tabNO - i + 10 } : { ...newTabStatus, [i]: i - tabNO + 10 };
    }
    setTabStatus(newTabStatus);
  };
  return (
    <nav className="nav-container" onMouseLeave={() => setZIndex(tabSelect)}>
      {navTab.map((topic, ind) => {
        return (
          <div className="nav-sidebar">
            <div
              className={`nav-link ${tabSelect === ind ? 'nav-link--active' : null}`}
              onMouseOver={() => {
                setZIndex(ind);
              }}
              onClick={() => {
                setTabSelect(ind);
                setZIndex(ind);
              }}
              style={{ left: `${15 * ind}%`, zIndex: tabStatus[ind] }}
            >
              {topic.name}
            </div>
            {ind === 0 ? <SideBar role={role} /> : null}
          </div>
        );
      })}
    </nav>
  );
}

export default NavBar;
