import { useContext, useState } from 'react';
import CurrentPregContext from '../../context/CurrentPregContext';
import './terminate.css';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import { notification } from 'antd';

function Terminate() {
  const currentPregContext = useContext(CurrentPregContext);
  const [value, setValue] = useState({ terminateDate: null, isBirth: null, terminateAt: null, gender: null });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .patch('/postnatal/terminate', {
        id: currentPregContext.mother.currentPregId,
        terminateAt: value.terminateAt,
        status: value.birthStatus,
      })
      .then((res) => {
        notification.success({
          description: 'อัพเดทแล้ว สามารถลงทะเบียนครรภ์ใหม่ได้',
        });
        currentPregContext.setMother({
          ...currentPregContext.mother,
          isTerminate: true,
        });
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: err.response.data.message,
        });
      });
  };
  const history = useHistory();
  const onFastTerminateSubmit = (e) => {
    e.preventDefault();
    axios
      .patch('/postnatal/fastTerminate', {
        id: currentPregContext.mother.currentPregId,
        terminateDate: value.terminateDate,
        terminateAt: value.terminateAt,
      })
      .then((res) => {
        notification.success({
          description: 'อัพเดทแล้ว สามารถลงทะเบียนครรภ์ใหม่ได้',
        });
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
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: err.response.data.message,
        });
      });
  };

  return (
    <div className="page">
      <table className="page-terminate">
        <tr>
          <td colspan={2} style={{ textAlign: 'left' }}>
            คุณ:&nbsp;&nbsp;&nbsp;
            {currentPregContext.mother.firstName} {currentPregContext.mother.lastName}
          </td>
        </tr>
        <tr>
          <td colspan={2} style={{ textAlign: 'left' }}>
            <label className="checked-container" for="birth">
              <input
                className="checked-inputCheckbox"
                id="birth"
                type="radio"
                name="isBirth"
                checked={value.isBirth}
                onChange={(e) => setValue({ ...value, isBirth: e.target.checked })}
              />
              <span class="checkmark"></span>
              ให้กำเนิดบุตร
            </label>
            <label className="checked-container" for="death">
              <input
                className="checked-inputCheckbox"
                id="death"
                type="radio"
                name="isBirth"
                checked={!value.isBirth && value.isBirth !== null}
                onChange={(e) => setValue({ ...value, isBirth: !e.target.checked })}
              />
              <span class="checkmark"></span>
              แท้งบุตร
            </label>
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left' }}>
            <label for="terminateDate">คลอดบุตรหรือแท้งเมื่อ: </label>
          </td>
          <td style={{ textAlign: 'right' }}>
            <input
              type="date"
              id="terminateDate"
              value={value.terminateDate}
              onChange={(e) => setValue({ ...value, terminateDate: e.target.value })}
              className="terminateInputBox"
            />
          </td>
        </tr>
        <tr>
          <td
            colspan={2}
            style={{
              textAlign: 'left',
              width: '100%',
            }}
          >
            <p>เพศ</p>
            <label className="checked-container" for="male" style={{ display: 'inline-block', width: '33%' }}>
              <input
                className="checked-inputCheckbox"
                id="male"
                type="radio"
                name="gender"
                checked={value.gender === 'male'}
                onChange={(e) => setValue({ ...value, gender: 'male' })}
              />
              <span class="checkmark"></span>
              ชาย
            </label>
            <label className="checked-container" for="female" style={{ display: 'inline-block', width: '33%' }}>
              <input
                className="checked-inputCheckbox"
                id="female"
                type="radio"
                name="gender"
                checked={value.gender === 'female'}
                onChange={(e) => setValue({ ...value, gender: 'female' })}
              />
              <span class="checkmark"></span>
              หญิง
            </label>
            <label className="checked-container" for="other" style={{ display: 'inline-block', width: '33%' }}>
              <input
                className="checked-inputCheckbox"
                id="other"
                type="radio"
                name="gender"
                checked={value.gender === 'other'}
                onChange={(e) => setValue({ ...value, gender: 'other' })}
              />
              <span class="checkmark"></span>
              อื่นๆ
            </label>
          </td>
        </tr>

        <tr style={{ height: '20vh' }}>
          <td colspan={2}>
            <span style={{ display: 'inline-flex', justifyContent: 'flex-start', width: '50%' }}>
              {currentPregContext.mother.isActive.length === 10 ? (
                <button className="btn-terminate" onClick={onFastTerminateSubmit}>
                  สิ้นสุดการตั้งครรภ์เร่งด่วน
                </button>
              ) : null}
            </span>
            <span style={{ display: 'inline-flex', justifyContent: 'flex-end', width: '50%' }}>
              <button className="btn-terminate" onClick={onSubmit}>
                สิ้นสุดการตั้งครรภ์
              </button>
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Terminate;
