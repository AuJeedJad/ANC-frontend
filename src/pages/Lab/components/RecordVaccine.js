import React from 'react';
import { Row, Col, Button, Radio, Form, DatePicker, InputNumber, Select } from 'antd';

const layout = {
  labelCol: { xs: 'auto' },
  wrapperCol: { xs: 'auto' },
};

const onFinish = (values) => {
  console.log(values);
};

function RecordVaccine() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        borderBottom: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
      }}
    >
      <Row>
        <Col xs={24}>
          <h2 style={{ textAlign: 'start', margin: '0' }}>การฉีดวัคซีนที่มีส่วนประกอบของวัคซีนป้องกันโรคบาดทยัก</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Item name="tetanusCountBefore" label="ก่อนตั้งครรภ์เคยฉีดวัคซีนกี่ครั้ง">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item name="lastTetanusHxDate" label="ครั้งสุดท้ายวันที่">
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={18}>
          <Form.Item name="tetausDosePefered" label="ปริมาณวัคซีนในระหว่างตั้งครรภ์">
            <Select>
              <Select.Option value="3Does">รับใหม่ 3 เข็ม</Select.Option>
              <Select.Option value="BootsDose">เข็มกระตุ้น</Select.Option>
              <Select.Option value="NoNeed">ไม่ต้องรับเพิ่ม</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={8}>
          <Form.Item name="firstTetanusDate" label="ครั้งที่ 1 วันที่">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={10}>
          <Form.Item name="firstTDPType" label="ชนิด">
            <Select>
              <Select.Option value="TT">บาดทะยัก</Select.Option>
              <Select.Option value="dT">บาดทะยักและคอตีบ</Select.Option>
              <Select.Option value="Tdap">บาดทะยัก คอตีบ และไอกรน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={8}>
          <Form.Item name="secondTetanusDate" label="ครั้งที่ 2 วันที่">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={10}>
          <Form.Item name="secondTDPType" label="ชนิด">
            <Select>
              <Select.Option value="TT">บาดทะยัก</Select.Option>
              <Select.Option value="dT">บาดทะยักและคอตีบ</Select.Option>
              <Select.Option value="Tdap">บาดทะยัก คอตีบ และไอกรน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={8}>
          <Form.Item name="thirdTetanusDate" label="ครั้งที่ 3 วันที่">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={10}>
          <Form.Item name="thirdTDPType" label="ชนิด">
            <Select>
              <Select.Option value="TT">บาดทะยัก</Select.Option>
              <Select.Option value="dT">บาดทะยักและคอตีบ</Select.Option>
              <Select.Option value="Tdap">บาดทะยัก คอตีบ และไอกรน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={20}>
          <h2 style={{ textAlign: 'start', margin: '0' }}>
            การฉีดวัคซีนป้องกันโรคไข้หวัดใหญ่ตามฤดูกาลเมื่ออายุครรภ์ 4 เดือนขึ้นไป ในช่วงรณรงค์
          </h2>
          <Form.Item name="influenzaDate" label="ฉีดวัคซีน 1 ครั้ง เมื่ออายุครรภ์4 เดือนขึ้นไป วันที่">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={4} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <Button type="primary" htmlType="submit" style={{}}>
              อัพเดท
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default RecordVaccine;
