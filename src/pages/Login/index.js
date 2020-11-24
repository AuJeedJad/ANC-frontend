import React, { useState, useEffect } from 'react';
import './login.css';
import InputField from '../../components/InputField/index';
import logo from '../../image/logo/logo01.png';

function Login() {
  const [role, setRole] = useState('mother');
  const [value, setValue] = useState({ IdCard: '', PasswordM: '', Username: '', PasswordS: '' });
  const [clearValue, setClearValue] = useState(false);
  const [validate, setValidate] = useState({ IdCard: false, PasswordM: false, Username: false, PasswordS: false });

  useEffect(() => {
    setValue({ IdCard: '', PasswordM: '', Username: '', PasswordS: '' });
    setClearValue(true);
    setValidate({ IdCard: false, PasswordM: false, Username: false, PasswordS: false });
  }, [role]);

  const valueGet = (fieldValue, field, isAlert) => {
    setValue({ ...value, [field]: fieldValue });
    setClearValue(false);
    isAlert ? setValidate({ ...validate, [field]: false }) : setValidate({ ...validate, [field]: true });
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
                valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
                valueFormat="number"
                valueLengthMax={13}
                valueLengthMin={13}
                clear={clearValue}
              />
              <InputField
                fieldName="PasswordM"
                fieldLabel="กรอกรหัสผ่าน"
                type="password"
                valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
                valueLengthMin={6}
                clear={clearValue}
              />
              <button disabled={!validate.IdCard || !validate.PasswordM} type="submit">
                เข้าสู่ระบบ
              </button>
            </form>
          ) : (
            <form style={{ position: 'relative', top: '13%' }}>
              <InputField
                fieldName="Username"
                fieldLabel="ชื่อผู้ใช้"
                type="text"
                valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
                valueLengthMin={1}
                clear={clearValue}
              />
              <InputField
                fieldName="PasswordS"
                fieldLabel="กรอกรหัสผ่าน"
                type="password"
                valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
                valueLengthMin={6}
                clear={clearValue}
              />
              <button disabled={!validate.Username || !validate.PasswordS} type="submit">
                เข้าสู่ระบบ
              </button>
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
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '25%', height: '100%' }}
        >
          <button className="btn-content">อ่านบทความ</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
