import React, { useState } from 'react';
import './login.css';
import InputField from '../../components/InputField/index';
import logo from '../../image/logo/logo01.png';

function Login() {
  const [role, setRole] = useState('mother');
  const [value, setValue] = useState({});

  const valueGet = (fieldValue, field) => {
    setValue({ ...value, [field]: fieldValue });
  };

  return (
    <div className="page-login">
      <div className="page-body">
        <h1 className="header-login">สมุดฝากครรภ์ออนไลน์</h1>
        <div className="card">
          <div className="card-select">
            <img className="logo-login" src={logo} alt="logo" />
            <div className="box-role--select">
              <button className="role--select" onClick={() => setRole('mother')}>
                มารดา
              </button>
              <button className="role--select" onClick={() => setRole('staff')}>
                โรงพยาบาล
              </button>
            </div>
          </div>
          {role === 'mother' ? (
            <form style={{ position: 'relative', top: '13%' }}>
              <InputField
                fieldName="IdCard"
                fieldLabel="รหัสประจำตัวประชาชน"
                type="text"
                valueGet={(value, field) => valueGet(value, field)}
              />
              <InputField
                fieldName="Password"
                fieldLabel="กรอกรหัสผ่าน"
                type="password"
                valueGet={(value, field) => valueGet(value, field)}
              />
              <button type="submit">เข้าสู่ระบบ</button>
            </form>
          ) : (
            <form style={{ position: 'relative', top: '13%' }}>
              <InputField
                fieldName="Username"
                fieldLabel="username"
                type="text"
                valueGet={(value, field) => valueGet(value, field)}
              />
              <InputField
                fieldName="Password"
                fieldLabel="password"
                type="password"
                valueGet={(value, field) => valueGet(value, field)}
              />
              <button type="submit">LOGIN</button>
            </form>
          )}
        </div>
      </div>

      <div className="page-footer">
        <div style={{ width: '60%' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare est dolor. Nam eros eros, molestie eget
          nisl nec, ultricies facilisis turpis. In hac habitasse platea dictumst. Morbi libero dui, euismod vitae odio
          sed, maximus pellentesque felis. Pellentesque blandit felis sed nibh maximus sagittis. Maecenas convallis
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '30%', height: '100%' }}>
          <button className="btn-content">อ่านบทความ</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
