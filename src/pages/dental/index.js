import { Button, Col, Form, Row, Typography } from 'antd';
import React from 'react';
import Teeth from './component/teeth.js';

function Dental() {
  const { Title } = Typography;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                การตรวจสุขภาพช่องปาก(เจ้าหน้าที่บันทึก)
              </Title>
            </Col>
          </Row>

          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Teeth />
            </Col>
          </Row>
        </Row>

        <Form.Item>
          <Row justify="end">
            <Col>
              <Button type="primary" style={{ width: '150px', marginRight: '8px' }} htmlType="submit">
                บันทึก
              </Button>
              <Button type="primary" style={{ width: '150px' }} danger>
                ยกเลิก
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
}

export default Dental;
