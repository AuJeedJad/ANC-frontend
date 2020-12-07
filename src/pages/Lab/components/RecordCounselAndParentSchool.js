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
        borderTop: '1px solid lightgray',
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
              <Form.Item
                name="coupleCounselingDate1"
                label={<label style={{ fontSize: '20px' }}>ได้รับก่อนตรวจเลือด วันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                name="coupleCounselingDate2"
                label={<label style={{ fontSize: '20px' }}>ได้รับหลังตรวจเลือด วันที่</label>}
              >
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
              <Form.Item
                name="parentSchoolDate1"
                label={<label style={{ fontSize: '20px' }}>ครั้งที่1 เมื่อวันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                name="parentSchoolDate2"
                label={<label style={{ fontSize: '20px' }}>ครั้งที่2 เมื่อวันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
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

export default RecordCounselAndParentSchool;
