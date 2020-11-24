import React, { useState, useEffect } from 'react';
import './motherRegister.css';
import InputField from '../../components/InputField/index';

function MotherRegister() {
  const [existIdCard, setExistIdCard] = useState(false);
  // ค่าตั้งต้น  false เจอ true ไม่เจอ false
  const [value, setValue] = useState({ IdCard: '', FirstName: '', LastName: '', PhoneNumber: '' });
  const [validate, setValidate] = useState({ IdCard: false, FirstName: false, LastName: false, PhoneNumber: false });

  const valueGet = (fieldValue, field, isAlert) => {
    setValue({ ...value, [field]: fieldValue });
    isAlert ? setValidate({ ...validate, [field]: false }) : setValidate({ ...validate, [field]: true });
  };

  useEffect(() => {
    if (validate.IdCard) {
      alert('find');
    }
  }, [value.IdCard]);

  return (
    <div className="page">
      <div className="page-body">
        <div className="card-id">
          <InputField
            fieldName="IdCard"
            fieldLabel="รหัสประจำตัวประชาชน"
            type="text"
            valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
            valueFormat="number"
            valueLengthMax={13}
            valueLengthMin={13}
          />
        </div>
        <form className="card">
          {existIdCard === null ? (
            <p className="page-header"> ลงทะเบียนครรภ์ใหม่ </p>
          ) : existIdCard ? (
            <div>
              <p className="message">เลขประจำตัวประชาชน {value.IdCard} เคยลงทะเบียนหญิงตั้งครรภ์ในระบบแล้ว</p>
              <p className="message">ชื่อ ... สกุล ...</p>
              <p className="message--alert">
                ลงทะเบียนตั้งครรภ์ครั้งล่าสุดในปี...เดือน...(ยังไม่พบข้อมูลการคลอดหรือแท้ง)
              </p>
              <p className="message">กด "เพิ่มครรภ์ใหม่" หากต้องการยืนยันลงทะเบียนครรภ์ใหม่</p>
            </div>
          ) : (
            <div>
              <InputField
                fieldName="FirstName"
                fieldLabel="ชื่อ"
                type="text"
                valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
                valueLengthMin={3}
              />
              <InputField
                fieldName="LastName"
                fieldLabel="นามสกุล"
                valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
                valueLengthMin={3}
              />
              <InputField
                fieldName="PhoneNumber"
                fieldLabel="เบอร์โทร"
                type="tel"
                valueGet={(value, field, isAlert) => valueGet(value, field, isAlert)}
                valueFormat="number"
                valueLengthMax={10}
                valueLengthMin={10}
              />
            </div>
          )}
        </form>
      </div>

      <div className="page-footer">
        {existIdCard === null ? (
          <div>
            ลงทะเบียนเพื่อเพิ่มข้อมูลการตั้งครรภ์ปัจจุบัน หลังกดส่งข้อมูล ครรภ์ใหม่จะถูกสร้างทันที
            <br />
            กรอกเลขประจำตัวประชาชนครบ13หลัก ระบบจะตรวจสอบว่าหญิงตั้งครรภ์เคยมีบัญชีมารดาหรือไม่
            <br />
            หากมีบัญชีมารดาแล้ว ระบบจะแจ้งชื่อและข้อความเตือนอื่นๆในกล่อง ตรวจสอบความถูกต้องก่อนส่งข้อมูล
            <br />
            หากยังไม่เคยมีบัญชีมารดา กรอกข้อมูลให้ครบถ้วน ระบบจะสร้างบัญชีมารดา พร้อมสร้างครรภ์ปัจจุบัน
            <br />
            รหัสผ่านเริ่มต้นคือ เลขประจำตัวประชาชน ให้หญิงตั้งครรรภ์เข้าระบบเพื่อเปลี่ยนรหัส และกรอกประวัติด้วยตนเอง
          </div>
        ) : existIdCard ? (
          <div>
            <button className="btn-submit">ยกเลิกการลงทะเบียน</button>
            <button disabled={!validate.IdCard} className="btn-submit">
              เพิ่มครรภ์ใหม่
            </button>
          </div>
        ) : (
          <div>
            <button className="btn-submit">ยกเลิกการลงทะเบียน</button>
            <button
              disabled={!validate.IdCard || !validate.FirstName || !validate.LastName || !validate.PhoneNumber}
              className="btn-submit"
            >
              ลงทะเบียนหญิงตั้งครรภ์ และ เพิ่มครรภ์ใหม่
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MotherRegister;
