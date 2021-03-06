import axios from 'axios';
import React, { useContext } from 'react';
import { notification } from 'antd';
import CurrentPregContext from '../../context/CurrentPregContext';
import Logo from '../../image/logo/logo01.png';
import './forgotPassword.css';
function GaCare() {
  const { mother } = useContext(CurrentPregContext);

  const onClick = () => {
    axios.patch(`/motherProfile`, { idCard: mother.idCard }).then((res) => {
      notification.success({
        description: `เปลี่ยนรหัสผ่านเรียบร้อยแล้ว`,
      });
    });
  };

  return (
    <div className="page">
      <div className="page-forgotPassword">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="page-header">
            หญิงตั้งครรภ์ลืมรหัสผ่าน
            <br /> กดเปลี่ยนรหัสผ่าน
          </div>
          <button onClick={onClick} className="btn-submit">
            เปลี่ยนรหัสผ่าน
          </button>
        </div>
        <img src={Logo} alt="logo" className="logo-forgotPassword" />
      </div>
    </div>
  );
}

export default GaCare;
