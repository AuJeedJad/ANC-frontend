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
        <div>
          <div className="page-header"> ต้องการเปลี่ยนรหัสผ่านใ่ช้หรือมั้ย </div>
          <div>
            <button onClick={onClick} className="btn-submit">
              เปลี่ยนรหัสผ่าน
            </button>
          </div>
        </div>
        <img src={Logo} alt="logo" className="logo-forgotPassword" />
      </div>
    </div>
  );
}

export default GaCare;
