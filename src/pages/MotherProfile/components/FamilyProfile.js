import React from 'react';
import { Button, Col, DatePicker, Form, Image, Input, Row, Select, Typography, Upload } from 'antd';

function FamilyProfile() {
  const { Title } = Typography;

  return (
    <>
      <Row justify="center" style={{ marginBottom: '16px' }}>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ประวัติส่วนตัว - สามี
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form layout="vertical">
                <Form.Item label="ชื่อ" style={{ marginBottom: '8px' }}>
                  <Input placeholder="ชื่อ" />
                </Form.Item>
                <Form.Item label="นามสกุล" style={{ marginBottom: '8px' }}>
                  <Input placeholder="นามสกุล" />
                </Form.Item>
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="วัน/เดือน/ปีเกิด"
                    style={{ display: 'inline-block', width: 'calc(17% - 8px)', margin: '0 auto' }}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    label="เลขบัตรประชาชน"
                    style={{ display: 'inline-block', width: 'calc(83% - 8px)', margin: '0 8px' }}
                  >
                    <Input placeholder="X XXXX XXXXX XX X" />
                  </Form.Item>
                </Form.Item>
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="เบอร์โทรศัพท์"
                    style={{ display: 'inline-block', width: 'calc(20% - 8px)', margin: '0 auto' }}
                  >
                    <Input placeholder="08X-XXX-XXXX" />
                  </Form.Item>
                  <Form.Item
                    label="อีเมล"
                    style={{ display: 'inline-block', width: 'calc(80% - 8px)', margin: '0 8px' }}
                  >
                    <Input placeholder="abc@mail.com" />
                  </Form.Item>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="end">
        <Col>
          <Button type="primary" style={{ width: '150px', marginRight: '8px' }}>
            บันทึก
          </Button>
          <Button type="primary" style={{ width: '150px' }} danger>
            ยกเลิก
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FamilyProfile;
