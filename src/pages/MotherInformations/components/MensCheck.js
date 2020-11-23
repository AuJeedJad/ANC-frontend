import { DatePicker, Form, Input, Radio, Select } from 'antd';
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
      <Form>
        <Form.Item label="ก่อนตั้งครรภ์คุมกำเนิดวิธี" style={{ width: '50%', marginBottom: 8 }}>
          <Input placeholder="เช่น กินยาคุมกำเนิด" />
        </Form.Item>
        <Form.Item label="เป็นระยะเวลา" style={{ display: 'inline-flex', margin: '0 8px 8px 0' }}>
          <DatePicker picker="month" placeholder="ปี-เดือน" />
        </Form.Item>
        <Form.Item
          label="หยุดคุมกำเนิดครั้งหลังสุดก่อนตั้งครรภ์ ระยะเวลา"
          style={{ display: 'inline-flex', marginBottom: 8 }}
        >
          <DatePicker picker="month" placeholder="ปี-เดือน" />
        </Form.Item>
        <Form.Item label="ประวัติประจำเดือนสม่ำเสมอหรือไม่" style={{ marginBottom: 8 }}>
          <Radio.Group>
            <Radio value="a">สม่ำเสมอ</Radio>
            <Radio value="b">ไม่สม่ำเสมอ</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="มาทุกกี่วัน" style={{ width: '20%' }}>
          <Select placeholder="จำนวนวัน">{option()}</Select>
        </Form.Item>
      </Form>
    </>
  );
}

export default MensCheck;
