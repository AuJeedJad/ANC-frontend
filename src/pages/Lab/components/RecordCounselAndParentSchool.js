import React from 'react';
import { Row, Col, Button, Form, DatePicker } from 'antd';

const layout = {
  labelCol: { xs: 14 },
  wrapperCol: { xs: 12 },
};

const onFinish = (values) => {
  console.log(values);
};

function RecordCounselAndParentSchool() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        borderBottom: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'start',
      }}
    >
      <Row style={{ width: '100%' }}>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <h2 style={{ textAlign: 'start', margin: '0' }}>การให้คำปรึกษาแบบคู่</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Item name="coupleCounselingDate1" label="ได้รับก่อนตรวจเลือด วันที่">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item name="coupleCounselingDate2" label="ได้รับหลังตรวจเลือด วันที่">
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <h2 style={{ textAlign: 'start', margin: '0' }}>การเข้าร่วมกิจกรรมโรงเรียนพ่อแม่</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Item name="parentSchoolDate1" label="ครั้งที่1 เมื่อวันที่">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item name="parentSchoolDate2" label="ครั้งที่2 เมื่อวันที่">
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
        <Col xs={10}></Col>
        <Col xs={10}></Col>
        <Col xs={4} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <Button type="primary" htmlType="submit">
              อัพเดท
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default RecordCounselAndParentSchool;
