import React from 'react';
import './sideBar.css';

const sideTab = ['ประเมินความเสี่ยง', 'ทันตกรรม', 'หลังคลอด', 'หญิงตั้งครรภ์ลืมรหัสผ่าน'];
function Sidebar() {
  return (
    <div className="side-container">
      <div className="sidebar-upper">
        {sideTab.map((topic) => {
          return <button className="btn-sidebar">{topic}</button>;
        })}
      </div>
      <div className="sidebar-lower">
        <button className="btn-logout"> กลับหน้าหลักโรงพยาบาล </button>
        <button className="btn-logout"> ออกจากระบบ </button>
      </div>
    </div>
  );
}

export default Sidebar;
