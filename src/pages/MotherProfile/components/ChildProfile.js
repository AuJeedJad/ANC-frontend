import React from 'react';
import { Button, Col, Form, Input, Row, Typography } from 'antd';

function ChildProfile() {
  const { Title } = Typography;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <>
      <Row justify="center">
        <Col span={14}>
          <Row>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ประวัติส่วนตัว - ลูก
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="ชื่อ" name="name" style={{ marginBottom: '8px' }}>
                  <Input placeholder="ชื่อ" />
                </Form.Item>
                <Form.Item label="นามสกุล" name="lastname" style={{ marginBottom: '8px' }}>
                  <Input placeholder="นามสกุล" />
                </Form.Item>
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="วัน/เดือน/ปีเกิด"
                    name="birthDate"
                    style={{ display: 'inline-block', width: 'calc(17% - 8px)', margin: '0 auto' }}
                  >
                    <Input type="date" />
                  </Form.Item>
                  <Form.Item
                    label="เลขบัตรประชาชน"
                    name="idCard"
                    style={{ display: 'inline-block', width: 'calc(83% - 8px)', margin: '0 8px' }}
                  >
                    <Input placeholder="กรุณาใส่เลขบัตรประชาชน 13 หลัก" />
                  </Form.Item>
                </Form.Item>
                <Form.Item style={{ marginTop: 16, marginBottom: 0 }}>
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
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ChildProfile;
