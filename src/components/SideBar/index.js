import { useContext, useState } from 'react';
import './sideBar.css';
import { Link, useHistory } from 'react-router-dom';
import LocalStorage from '../../services/localStorage';
import CurrentPregContext from '../../context/CurrentPregContext';

function Sidebar(props) {
  const currentPregContext = useContext(CurrentPregContext);
  const sideTabUpper =
    props.role === 'mother'
      ? [
          { name: 'แก้ไขข้อมูลส่วนตัว', path: '/mother/profile' },
          { name: 'ข้อมูลครรภ์ปัจจุบัน', path: '/mother/information' },
          { name: 'แก้ไขรหัสผ่าน', path: '/mother/passwordChange' },
        ]
      : props.role === 'staff'
      ? currentPregContext.mother.isActive === false
        ? [
            { name: `วิธีการใช้งาน`, path: '/staff/faq' },
            { name: `อ่านบทความ`, path: '/content' },
          ]
        : currentPregContext.mother.isTerminate === true
        ? [
            { name: 'ดูแลหลังคลอด', path: '/staff/postnatal' },
            { name: 'หญิงตั้งครรภ์กลับบ้าน', path: '/staff/postnatal/discharge' },
            { name: 'หญิงตั้งครรภ์ลืมรหัสผ่าน', path: '/staff/motherPasswordReset' },
          ]
        : [
            { name: 'ประเมินความเสี่ยง', path: '/staff/risk' },
            { name: 'คลอด/แท้งแล้ว', path: '/staff/terminate' },
            { name: 'หญิงตั้งครรภ์ลืมรหัสผ่าน', path: '/staff/motherPasswordReset' },
          ]
      : [];

  const sideTabLower =
    props.role === 'mother'
      ? props.page === '/'
        ? [{ name: 'ออกจากระบบ', action: 'clearToken' }]
        : [
            { name: 'กลับหน้าหลัก', action: 'none' },
            { name: 'ออกจากระบบ', action: 'clearToken' },
          ]
      : props.role === 'staff'
      ? currentPregContext.mother.currentPregId === ''
        ? [{ name: 'ออกจากระบบ', action: 'clearToken' }]
        : [
            { name: 'กลับหน้าหลักโรงพยาบาล', action: 'clearMother' },
            { name: 'ออกจากระบบ', action: 'clearToken' },
          ]
      : [];

  const history = useHistory();

  return (
    <div
      className={`side-container ${props.show ? 'nav-sidebar--onclick' : null}`}
      style={{ width: `${props.width}%` }}
    >
      <div className="sidebar-upper" onClick={() => props.setShow(false)}>
        {sideTabUpper.map((topic) => {
          return (
            <Link className="btn-sidebar" to={topic.path} style={{ maxHeight: '10%' }}>
              {topic.name}
            </Link>
          );
        })}
      </div>
      <div className="sidebar-lower">
        {sideTabLower.map((topic) => {
          return (
            <button
              className="btn-logout"
              onClick={() => {
                if (topic.action === 'clearToken') {
                  LocalStorage.clearToken();
                  currentPregContext.setMother({
                    currentPregId: '',
                    id: '',
                    idCard: '',
                    firstName: '',
                    lastName: '',
                    GA: '',
                    createdAt: '',
                    isTerminate: false,
                    isActive: false,
                  });
                  props.setRole('guest');
                }
                if (topic.action === 'clearMother') {
                  currentPregContext.setMother({
                    currentPregId: '',
                    id: '',
                    idCard: '',
                    firstName: '',
                    lastName: '',
                    GA: '',
                    createdAt: '',
                    isTerminate: false,
                    isActive: false,
                  });
                }
                history.push('/');
              }}
            >
              {topic.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
