import { useContext, useState } from 'react';
import CurrentPregContext from '../../context/CurrentPregContext';
import './terminate.css';

function Terminate() {
  const currentPregContext = useContext(CurrentPregContext);
  const [value, setValue] = useState({ terminateDate: '', dischargeDate: '', terminateAt: '' });

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
              <td style={{ textAlign: 'left' }}>
                <label for="terminateAt">สถานที่คลอดหรือแท้ง: </label>
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
              <button className="btn-terminate"> ดูข้อมูลครรภ์นี้ </button>
            </span>
            <span style={{ display: 'inline-flex', justifyContent: 'flex-end', width: '50%' }}>
              <button className="btn-terminate">
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
