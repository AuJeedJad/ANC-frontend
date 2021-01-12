import { useContext, useState } from 'react';
import CurrentPregContext from '../../context/CurrentPregContext';
import './terminate.css';
import axios from '../../config/axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';

function Terminate() {
  const currentPregContext = useContext(CurrentPregContext);
  const [value, setValue] = useState({ terminateDate: '', terminateAt: '' });
  const history = useHistory();

  const onTerminateSubmit = (e) => {
    e.preventDefault();
    axios
      .patch('/postnatal/fastTerminate', {
        id: currentPregContext.mother.currentPregId,
        terminateDate: value.terminateDate,
        terminateAt: value.terminateAt,
        status: value.birthStatus,
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
          <td style={{ textAlign: 'left' }}> คุณ: </td>
          <td style={{ textAlign: 'left', paddingLeft: '10%' }}>
            {currentPregContext.mother.firstName} {currentPregContext.mother.lastName}
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left' }}>ลงทะเบียนครรภ์ล่าสุดเมื่อ: </td>
          <td style={{ textAlign: 'left', paddingLeft: '10%' }}> {currentPregContext.mother.isActive}</td>
        </tr>

        {currentPregContext.mother.isActive ? (
          <>
            <tr>
              <td colspan={2} style={{ color: 'var(--thirdaryDarkest-color)', fontSize: '24px' }}>
                ยังไม่ได้ทำเรื่องสิ้นสุดการตั้งครรภ์
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
                <p>สถานะทารก</p>
                <label className="checked-container" for="live" style={{ display: 'inline-block', width: '33%' }}>
                  <input
                    className="checked-inputCheckbox"
                    id="live"
                    type="radio"
                    name="birthStatus"
                    checked={value.birthStatus === 'live'}
                    onChange={(e) => setValue({ ...value, birthStatus: 'live' })}
                  />
                  <span class="checkmark"></span>
                  คลอดมีชีวิต
                </label>
                <label className="checked-container" for="death" style={{ display: 'inline-block', width: '33%' }}>
                  <input
                    className="checked-inputCheckbox"
                    id="death"
                    type="radio"
                    name="birthStatus"
                    checked={value.birthStatus === 'death'}
                    onChange={(e) => setValue({ ...value, birthStatus: 'death' })}
                  />
                  <span class="checkmark"></span>
                  แท้ง/ตายคลอด
                </label>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>
                <label for="terminateDate">สิ้นสุดการตั้งครรภ์เมื่อ: </label>
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
              <td style={{ textAlign: 'left' }}>
                <label for="terminateAt">สถานที่สิ้นสุดการตั้งครรภ์: </label>
              </td>
              <td style={{ textAlign: 'right', width: '20vw' }}>
                <input
                  type="text"
                  id="terminateAt"
                  value={value.terminateAt}
                  onChange={(e) => setValue({ ...value, terminateAt: e.target.value })}
                  className="terminateInputBox"
                />
              </td>
            </tr>
          </>
        ) : null}
        <tr style={{ height: '20vh' }}>
          <td colspan={2}>
            <span style={{ display: 'inline-flex', justifyContent: 'flex-start', width: '50%' }}>
              <button className="btn-terminate" onClick={() => history.push('/staff/motherReport')}>
                ดูข้อมูลครรภ์นี้
              </button>
            </span>
            <span style={{ display: 'inline-flex', justifyContent: 'flex-end', width: '50%' }}>
              <button className="btn-terminate" onClick={onTerminateSubmit}>
                อัพเดทข้อมูล
                <br />
                เพื่อสิ้นสุดการตั้งครรภ์
              </button>
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Terminate;
