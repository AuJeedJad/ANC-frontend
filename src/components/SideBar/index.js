import React from 'react';
import './sideBar.css';

function Sidebar(role) {
  const sideTabUpper =
    role === 'mother'
      ? [
          { name: 'แก้ที่sidebar1', path: '/' },
          { name: 'แก้ที่sidebar2', path: '/' },
          { name: 'แก้ที่sidebar3', path: '/' },
          { name: 'แก้ที่sidebar4', path: '/' },
        ]
      : role === 'staff'
      ? [
          { name: 'ประเมินความเสี่ยง', path: '/' },
          { name: 'ทันตกรรม', path: '/' },
          { name: 'หลังคลอด', path: '/' },
          { name: 'หญิงตั้งครรภ์ลืมรหัสผ่าน', path: '/' },
        ]
      : [
          { name: 'แก้ที่sidebar1', path: '/' },
          { name: 'แก้ที่sidebar2', path: '/' },
          { name: 'แก้ที่sidebar3', path: '/' },
          { name: 'แก้ที่sidebar4', path: '/' },
        ];

  const sideTabLower =
    role === 'mother'
      ? [
          { name: 'กลับหน้าหลักหญิงตั้งครรภ์', path: '/' },
          { name: 'ออกจากระบบ', path: '/' },
        ]
      : role === 'staff'
      ? [
          { name: 'กลับหน้าหลักโรงพยาบาล', path: '/' },
          { name: 'ออกจากระบบ', path: '/' },
        ]
      : [{ name: 'เข้าสู่ระบบ', path: '/' }];

  return (
    <div className="side-container">
      <div className="sidebar-upper">
        {sideTabUpper.map((topic) => {
          return <button className="btn-sidebar">{topic.name}</button>;
        })}
      </div>
      <div className="sidebar-lower">
        {sideTabLower.map((topic) => {
          return <button className="btn-logout">{topic.name}</button>;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
