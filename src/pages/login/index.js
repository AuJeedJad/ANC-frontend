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
    <div className="page">
      <div className="pageBody">
        <div className="card">
          <div className="cardSelect">
            <img className="logo" src={logo} alt="logo" />
            <button className="selectRole" onClick={() => setRole('mother')}>
              {' '}
              มารดา{' '}
            </button>
            <button className="selectRole" onClick={() => setRole('staff')}>
              {' '}
              โรงพยาบาล{' '}
            </button>
          </div>
          {role === 'mother' ? (
            <form>
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
            <form>
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

      <div className="pageDeco">
        <div className="pageDecoLeft"></div>
        <div className="pageDecoRight"></div>
      </div>

      <div className="pageFooter">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare est dolor. Nam eros eros, molestie eget
          nisl nec, ultricies facilisis turpis. In hac habitasse platea dictumst. Morbi libero dui, euismod vitae odio
          sed, maximus pellentesque felis. Pellentesque blandit felis sed nibh maximus sagittis. Maecenas convallis
        </div>
      </div>
    </div>
  );
}

export default Login;
