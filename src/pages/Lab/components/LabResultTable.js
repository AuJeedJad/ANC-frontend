import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CurrentPregContext from '../../../context/CurrentPregContext';

function LabResultTable({ setLabResult }) {
  const history = useHistory();
  const { mother } = useContext(CurrentPregContext);
  const [dataLabResultMother, setDataLabResultMother] = useState([]);
  const [dataLabResultFather, setDataLabResultFather] = useState([]);

  const editLabResult = (type, no, labResultId) => {
    setLabResult({ active: true, type, no, labResultId });
  };

  useEffect(() => {
    axios
      .get(`/labResult/byCurPreg/${mother.currentPregId}`)
      .then((res) => {
        if (!res.data) {
          return history.push('/notFound');
        }
        setDataLabResultMother(res.data.allLabResultMother);
        setDataLabResultFather(res.data.allLabResultFather);
      })
      .catch((err) => {});
  }, []);

  return (
    <table>
      <tr>
        <td className="headTable" rowspan="2" style={{ width: '25%' }}>
          รายงานการตรวจเลือด
        </td>
        <td className="headTable" colspan="2">
          หญิงตั้งครรภ์
        </td>
        <td className="headTable" colspan="2">
          สามี
        </td>
      </tr>
      <tr>
        <td className="headTable" align="center">
          <div>ครั้งที่ 1</div>
          <Button
            primary
            style={{
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '-0.5px -0.5px #52938e',
            }}
            onClick={() =>
              editLabResult('mother', 1, dataLabResultMother[0] === undefined ? null : dataLabResultMother[0].id)
            }
          >
            แก้ไข
          </Button>
        </td>
        <td className="headTable" align="center">
          <div>ครั้งที่ 2</div>
          <Button
            primary
            style={{
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '-0.5px -0.5px #52938e',
            }}
            onClick={() =>
              editLabResult('mother', 2, dataLabResultMother[1] === undefined ? null : dataLabResultMother[1].id)
            }
          >
            แก้ไข
          </Button>
        </td>
        <td className="headTable" align="center">
          <div>ครั้งที่ 1</div>
          <Button
            primary
            style={{
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '-0.5px -0.5px #52938e',
            }}
            onClick={() =>
              editLabResult('father', 1, dataLabResultFather[0] === undefined ? null : dataLabResultFather[0].id)
            }
          >
            แก้ไข
          </Button>
        </td>
        <td className="headTable" align="center">
          <div>ครั้งที่ 2</div>
          <Button
            primary
            style={{
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '-0.5px -0.5px #52938e',
            }}
            onClick={() =>
              editLabResult('father', 2, dataLabResultFather[1] === undefined ? null : dataLabResultFather[1].id)
            }
          >
            แก้ไข
          </Button>
        </td>
      </tr>
      <tr>
        <td className="headTable" align="right" style={{ paddingRight: '10px' }}>
          Date
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].date}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].date}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].date}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].date}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          Blood gr/Rh
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].bloodGroup}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].bloodGroup}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].bloodGroup}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].bloodGroup}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          Hct/Hb
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].hctHb}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].hctHb}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].hctHb}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].hctHb}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          OF/MCV, MCH
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].ofMcvMch}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].ofMcvMch}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].ofMcvMch}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].ofMcvMch}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          DCIP
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].dcip}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].dcip}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].dcip}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].dcip}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          Hb typing
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].hbTyping}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].hbTyping}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].hbTyping}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].hbTyping}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          PCR
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].pcr}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].pcr}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].pcr}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].pcr}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          ไวรัสตับอักเสบ บี
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].hepatitisBVirus}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].hepatitisBVirus}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].hepatitisBVirus}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].hepatitisBVirus}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          ซิฟิลิส
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].syphilis}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].syphilis}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].syphilis}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].syphilis}</td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          ตรวจหาเชื้อเอช ไอ วี
        </td>
        <td>{dataLabResultMother[0] === undefined ? ' ' : dataLabResultMother[0].hiv}</td>
        <td>{dataLabResultMother[1] === undefined ? ' ' : dataLabResultMother[1].hiv}</td>
        <td>{dataLabResultFather[0] === undefined ? ' ' : dataLabResultFather[0].hiv}</td>
        <td>{dataLabResultFather[1] === undefined ? ' ' : dataLabResultFather[1].hiv}</td>
      </tr>
    </table>
  );
}

export default LabResultTable;
