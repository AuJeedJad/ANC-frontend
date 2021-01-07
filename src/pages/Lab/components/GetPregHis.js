import React from 'react';
import { Row, Col, Button, Form, DatePicker, InputNumber } from 'antd';

const layout = {
  labelCol: { xs: 22 },
  wrapperCol: { xs: 24 },
};

const onFinish = (values) => {
  console.log(values);
};

function GetPregHis() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        borderTop: '1px solid lightgray',
      }}
    >
      <Row style={{ marginTop: '1em' }}>
        <Col xs={8}>
          <label for="nest-messages_countCurPreg" style={{ textAlign: 'left', fontSize: '20px' }}>
            ครรภ์ที่
          </label>
          <Form.Item name="countCurPreg">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_lastDateOf" style={{ textAlign: 'left', fontSize: '20px' }}>
            ประจำเดือนครั้งสุดท้าย
          </label>
          <Form.Item name="lastDateOf">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_birthDate" style={{ textAlign: 'left', fontSize: '20px' }}>
            คะเนกำหนดการคลอด
          </label>
          <Form.Item name="birthDate">
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <label for="nest-messages_count" style={{ textAlign: 'left', fontSize: '20px' }}>
            จำนวนครั้งที่เคยผ่าตัดคลอด
          </label>
          <Form.Item name="count">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_countChild" style={{ textAlign: 'left', fontSize: '20px' }}>
            จำนวนบุตรที่มีชีวิต
          </label>
          <Form.Item name="countChild">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_child" style={{ textAlign: 'left', fontSize: '20px' }}>
            อายุบุตรคนสุดท้าย
          </label>
          <Form.Item name="child">
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <label for="nest-messages_beforePregWeight" style={{ textAlign: 'left', fontSize: '20px' }}>
            น้ำหนักก่อนตั้งครรภ์ (กิโลกรัม)
          </label>
          <Form.Item name="beforePregWeight">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_beforePregHeight" style={{ textAlign: 'left', fontSize: '20px' }}>
            ส่วนสูง (เซนติเมตร)
          </label>
          <Form.Item name="beforePregHeight">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_bmi" style={{ textAlign: 'left', fontSize: '20px' }}>
            ค่า BMI ก่อนตั้งครรภ์
          </label>
          <Form.Item name="bmi">
            <InputNumber disabled={true} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: '0 3em' }}>
          <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              อัพเดท
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default GetPregHis;
