import { useContext } from 'react';
import './sideBar.css';
import { Link, useHistory } from 'react-router-dom';
import LocalStorage from '../../services/localStorage';
import CurrentPregContext from '../../context/CurrentPregContext';

function Sidebar(props) {
  const sideTabUpper =
    props.role === 'mother'
      ? [
          { name: 'แก้ที่sidebar1', path: '/' },
          { name: 'แก้ที่sidebar2', path: '/' },
          { name: 'แก้ที่sidebar3', path: '/' },
          { name: 'แก้ไขประวัติ', path: '/' },
        ]
      : props.role === 'staff'
      ? [
          { name: 'ประเมินความเสี่ยง', path: '/' },
          { name: 'ทันตกรรม', path: '/' },
          { name: 'หลังคลอด', path: '/' },
          { name: 'ลงทะเบียนหญิงตั้งครรภ์', path: '/staff/motherRegister' },
          { name: 'หญิงตั้งครรภ์ลืมรหัสผ่าน', path: '/' },
        ]
      : [
          { name: 'แก้ที่sidebar1', path: '/' },
          { name: 'แก้ที่sidebar2', path: '/' },
          { name: 'แก้ที่sidebar3', path: '/' },
          { name: 'แก้ที่sidebar4', path: '/' },
        ];

  const sideTabLower =
    props.role === 'mother'
      ? [
          { name: 'กลับหน้าหลักหญิงตั้งครรภ์', action: 'none' },
          { name: 'ออกจากระบบ', action: 'clearToken' },
        ]
      : props.role === 'staff'
      ? [
          { name: 'กลับหน้าหลักโรงพยาบาล', action: 'clearMother' },
          { name: 'ออกจากระบบ', action: 'clearToken' },
        ]
      : [{ name: 'เข้าสู่ระบบ', action: 'none' }];

  const history = useHistory();
  const currentPregContext = useContext(CurrentPregContext);

  return (
    <div className="side-container">
      <div className="sidebar-upper">
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
                  props.setRole('guest');
                }
                if (topic.action === 'clearMother') {
                  currentPregContext.setMother({
                    currentPregId: '',
                    idCard: '',
                    Name: '',
                    lastName: '',
                    GA: 0,
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
