import React from 'react';
import { Button, Col, DatePicker, Form, Image, Input, Row, Select, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function PregnantMotherProfile() {
  const { Title } = Typography;
  const { Option } = Select;
  return (
    <>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ประวัติส่วนตัว - หญิงตั้งครรภ์
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={5}>HN : XXXXXX</Title>
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
        <Col span={12}>
          <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Upload name="logo" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ที่อยู่ปัจจุบัน
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form>
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="บ้านเลขที่"
                    style={{
                      display: 'inline-block',
                      width: 'calc(20% - 8px)',
                      margin: '0 8px 0 0',
                    }}
                  >
                    <Input placeholder="Please input" />
                  </Form.Item>
                  <Form.Item
                    label="ถนน"
                    style={{
                      display: 'inline-block',
                      width: 'calc(30% - 8px)',
                      margin: '0 8px 0 0',
                    }}
                  >
                    <Input placeholder="Please input" />
                  </Form.Item>
                  <Form.Item
                    label="แขวง/ตำบล"
                    style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px 0 0' }}
                  >
                    <Input placeholder="Please input" />
                  </Form.Item>
                  <Form.Item
                    label="เขต/อำเภอ"
                    style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px 0 0' }}
                  >
                    <Input placeholder="Please input" />
                  </Form.Item>
                  <Form.Item
                    label="จังหวัด"
                    style={{ display: 'inline-block', width: 'calc(20% - 8px)', margin: '0 8px 0 0' }}
                  >
                    <Select placeholder="Select province">
                      <Option value="Zhejiang">กรุงเทพมหานคร</Option>
                      <Option value="Jiangsu">เชียงใหม่</Option>
                      <Option value="Jiangsu">เชียงราย</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="รหัสไปรษณีย์"
                    style={{ display: 'inline-block', width: 'calc(20% - 8px)', margin: '0' }}
                  >
                    <Input placeholder="Input street" />
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

export default PregnantMotherProfile;
