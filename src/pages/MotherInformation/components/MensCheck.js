import { Form, Input, Radio, Select } from 'antd';
import React from 'react';

function MensCheck() {
  const { Option } = Select;

  const option = () => {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
      arr.push(<Option value={i}>{i}</Option>);
    }
    return arr;
  };

  return (
    <>
      <Form.Item>
        <Form.Item label="ก่อนตั้งครรภ์คุมกำเนิดวิธี" name="contraMethod">
          <Input placeholder="เช่น กินยาคุมกำเนิด" />
        </Form.Item>
        <Form.Item label="เป็นระยะเวลา" name="contraYear-Month">
          <Input type="date" placeholder="ปี-เดือน" />
        </Form.Item>
        <Form.Item label="หยุดคุมกำเนิดครั้งหลังสุดก่อนตั้งครรภ์ ระยะเวลา" name="stopContraYear-Month">
          <Input type="date" placeholder="ปี-เดือน" />
        </Form.Item>
        <Form.Item label="ประวัติประจำเดือนสม่ำเสมอหรือไม่" name="isRegularMensPeriod">
          <Radio.Group>
            <Radio value="1">สม่ำเสมอ</Radio>
            <Radio value="0">ไม่สม่ำเสมอ</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="มาทุกกี่วัน" name="mensInterval">
          <Select placeholder="จำนวนวัน">{option()}</Select>
        </Form.Item>
      </Form.Item>
    </>
  );
}

export default MensCheck;
