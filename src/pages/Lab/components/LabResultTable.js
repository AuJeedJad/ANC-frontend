import { Button } from 'antd';
import React from 'react';

function LabResultTable({ setLabResult }) {
  const editLabResult = (type, no) => {
    setLabResult({ active: true, type, no });
  };
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
            onClick={() => editLabResult('mother', 1)}
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
            onClick={() => editLabResult('mother', 2)}
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
            onClick={() => editLabResult('father', 1)}
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
            onClick={() => editLabResult('father', 2)}
          >
            แก้ไข
          </Button>
        </td>
      </tr>
      <tr>
        <td className="headTable" align="right" style={{ paddingRight: '10px' }}>
          Date
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          Blood gr/Rh
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          Hct/Hb
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          OF/MCV, MCH
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          DCIP
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          Hb typing
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          PCR
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          ไวรัสตับอักเสบ บี
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          ซิฟิลิส
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="headTable" align="left" style={{ paddingLeft: '10px' }}>
          ตรวจหาเชื้อเอช ไอ วี
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
}

export default LabResultTable;
