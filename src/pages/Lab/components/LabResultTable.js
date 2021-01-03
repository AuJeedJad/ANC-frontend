import { Button } from 'antd';
import React from 'react';

function LabResultTable() {
  return (
    <table border="1" cellPadding="10" width="100%" style={{ fontSize: '20px' }}>
      <tr>
        <td rowspan="2">รายงานการตรวจเลือด</td>
        <td colspan="2">หญิงตั้งครรภ์</td>
        <td colspan="2">สามี</td>
      </tr>
      <tr>
        <td align="center" style={{ padding: '5px 0px' }}>
          <div>ครั้งที่ 1</div>
          <Button
            type="primary"
            style={{ fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            แก้ไข
          </Button>
        </td>
        <td align="center" style={{ padding: '5px 0px' }}>
          <div>ครั้งที่ 2</div>
          <Button
            type="primary"
            style={{ fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            แก้ไข
          </Button>
        </td>
        <td align="center" style={{ padding: '5px 0px' }}>
          <div>ครั้งที่ 1</div>
          <Button
            type="primary"
            style={{ fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            แก้ไข
          </Button>
        </td>
        <td align="center" style={{ padding: '5px 0px' }}>
          <div>ครั้งที่ 2</div>
          <Button
            type="primary"
            style={{ fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            แก้ไข
          </Button>
        </td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          Blood gr/Rh
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          Hct/Hb
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          OF/MCV, MCH
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          DCIP
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          Hb typing
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          PCR
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          ไวรัสตับอักเสบ บี
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
          ซิฟิลิส
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td align="left" style={{ paddingLeft: '10px' }}>
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
