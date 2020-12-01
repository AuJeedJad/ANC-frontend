import React, { useState, useEffect, useContext } from 'react';
import axios from '../../config/axios';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import InputField from '../../components/InputField';
import './motherRegister.css';
import CurrentPregContext from '../../context/CurrentPregContext';

function MotherRegister(props) {
  const currentPregContext = useContext(CurrentPregContext);
  const [value, setValue] = useState({ IdCard: '', FirstName: '', LastName: '', PhoneNumber: '' });
  const [existIdCard, setExistIdCard] = useState(null);
  const [existIdMom, setExistIdMom] = useState({
    id: '',
    firstName: '',
    lastName: '',
    createAt: '',
    isActive: '',
    curPregId: '',
    GA: '',
    isTerminate: '',
  });
  const [validate, setValidate] = useState({ IdCard: false, FirstName: false, LastName: false, PhoneNumber: false });

  const valueGet = (fieldValue, field, isAlert) => {
    setValue({ ...value, [field]: fieldValue });
    isAlert ? setValidate({ ...validate, [field]: false }) : setValidate({ ...validate, [field]: true });
  };

  const history = useHistory();

  useEffect(() => {
    if (validate.IdCard) {
      axios
        .get(`/staff/motherAccount/motherFind?idCard=${value.IdCard}`)
        .then((res) => {
          notification.success({
            description: 'พบบัญชีหญิงตั้งครรภ์เดิม',
          });
          setExistIdCard(true);
          setExistIdMom(res.data);
        })
        .catch((err) => {
          if (err.response.data.message === 'เลขประจำตัวประชาชนนี้ยังไม่เคยลงทะเบียน') {
            notification.success({
              description: err.response.data.message,
            });
            setExistIdCard(false);
            setExistIdMom({
              id: '',
              firstName: '',
              lastName: '',
              createdAt: '',
              isActive: '',
              curPregId: '',
              GA: '',
              isTerminate: '',
            });
          } else {
            notification.error({
              description: `${err}`,
            });
          }
        });
    } else {
      setExistIdCard(null);
      setExistIdMom({
        id: '',
        firstName: '',
        lastName: '',
        createdAt: '',
        isActive: '',
        curPregId: '',
        GA: '',
        isTerminate: '',
      });
    }
  }, [value.IdCard]);

  const newBaby = (e) => {
    e.preventDefault();
    axios
      .post('/staff/motherAccount/createCurrentPregnancy', {
        id: existIdMom.id,
      })
      .then((res) => {
        notification.success({
          description: 'สร้างครรภ์ใหม่ให้หญิงตั้งครรภ์แล้ว',
        });
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: err.response.data.message,
        });
      });
  };

  const newMother = (e) => {
    e.preventDefault();
    axios
      .post('/staff/motherAccount/motherRegister', {
        idCard: value.IdCard,
        firstName: value.FirstName,
        lastName: value.LastName,
        phoneNumber: value.PhoneNumber,
      })
      .then((res) => {
        notification.success({
          description: 'สร้างบัญชีหญิงตั้งครรภ์แล้ว รหัสผ่าน=เลขประจำตัวประชาชน',
        });
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: err.response.data.message,
        });
      });
  };

  const toTerminate = () => {
    currentPregContext.setMother({
      currentPregId: existIdMom.curPregId,
      id: existIdMom.id,
      idCard: value.IdCard,
      firstName: existIdMom.firstName,
      lastName: existIdMom.lastName,
      GA: existIdMom.GA,
      isTerminate: existIdMom.isTerminate,
      isActive: existIdMom.isActive,
    });

    history.push('/staff/terminate');
  };
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
            <>
              <p className="message">
                คุณ {existIdMom.firstName} {existIdMom.lastName}
                <br /> เคยลงทะเบียนหญิงตั้งครรภ์ในระบบแล้ว
                <br /> ครรภ์ล่าสุดเมื่อ {existIdMom.createdAt.substr(0, 10)}
                {existIdMom.isActive ? (
                  <>
                    <br />
                    <span className="message--alert">และยังไม่ได้ทำเรื่องสิ้นสุดการตั้งครรภ์</span>
                    <br /> "สิ้นสุดการตั้งครรภ์เดิม" -&gt; ยกเลิกครรภ์เดิม
                    <br /> "ยกเลิกการลงทะเบียน" -&gt; หากเป็นครรภ์เดียวกัน
                  </>
                ) : null}
              </p>
            </>
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
                valueLengthMin={9}
              />
            </div>
          )}
        </form>
      </div>

      <div className="page-footer">
        {existIdCard === null ? (
          <div>
            กรอกเลขประจำตัวประชาชนครบ13หลัก ระบบจะตรวจสอบว่าหญิงตั้งครรภ์เคยมีบัญชีมารดาหรือไม่
            <br />
            หากมีบัญชีมารดาแล้ว ระบบจะแจ้งชื่อและข้อความเตือนอื่นๆในกล่อง ตรวจสอบความถูกต้องก่อนส่งข้อมูล
            <br />
            หากยังไม่เคยมีบัญชีมารดา กรอกข้อมูลให้ครบถ้วน ระบบจะสร้างบัญชีมารดา พร้อมสร้างครรภ์ปัจจุบัน
            <br />
            รหัสผ่านเริ่มต้นคือ เลขประจำตัวประชาชน ให้หญิงตั้งครรรภ์เข้าระบบเพื่อเปลี่ยนรหัส และกรอกประวัติด้วยตนเอง
          </div>
        ) : existIdCard ? (
          existIdMom.isActive ? (
            <div>
              <button className="btn-submit" onClick={() => history.push('/')}>
                ยกเลิกการลงทะเบียน
              </button>
              <button disabled={!validate.IdCard} className="btn-submit" onClick={toTerminate}>
                สิ้นสุดการตั้งครรภ์เดิมในระบบ
              </button>
            </div>
          ) : (
            <div>
              <button className="btn-submit" onClick={() => history.push('/')}>
                ยกเลิกการลงทะเบียน
              </button>
              <button disabled={!validate.IdCard} className="btn-submit" onClick={newBaby}>
                เพิ่มครรภ์ใหม่
              </button>
            </div>
          )
        ) : (
          <div>
            <button className="btn-submit" onClick={() => history.push('/')}>
              ยกเลิกการลงทะเบียน
            </button>
            <button
              disabled={!validate.IdCard || !validate.FirstName || !validate.LastName || !validate.PhoneNumber}
              className="btn-submit"
              onClick={newMother}
            >
              ลงทะเบียนหญิงตั้งครรภ์ และ เพิ่มครรภ์ใหม่
            </button>
          </div>
        )}
      </div>
      <div className="deco-page">
        <div className="deco-page-left"></div>
        <div className="deco-page-right"></div>
      </div>
    </div>
  );
}

export default MotherRegister;
