import React from 'react';
import { Button, Col, Form, Image, Input, Row, Select, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function PregnantMotherProfile() {
  const { Title } = Typography;
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

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
                    style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 auto' }}
                  >
                    <Input type="date" />
                  </Form.Item>
                  <Form.Item
                    label="เลขบัตรประชาชน"
                    name="idCard"
                    style={{ display: 'inline-block', width: 'calc(70% - 8px)', margin: '0 8px' }}
                  >
                    <Input placeholder="กรุณาใส่เลขบัตรประชาชน 13 หลัก" />
                  </Form.Item>
                </Form.Item>
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="เบอร์โทรศัพท์"
                    name="phoneNumber"
                    style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 auto' }}
                  >
                    <Input placeholder="0XX-XXX-XXXX" />
                  </Form.Item>
                  <Form.Item
                    label="อีเมล"
                    name="email"
                    style={{ display: 'inline-block', width: 'calc(70% - 8px)', margin: '0 8px' }}
                  >
                    <Input type="email" placeholder="abc@mail.com" />
                  </Form.Item>
                </Form.Item>
                <Row>
                  <Col span={24}>
                    <Title level={3} style={{ textDecoration: 'underline' }}>
                      ที่อยู่ปัจจุบัน
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Form.Item style={{ marginBottom: '8px' }}>
                        <Form.Item
                          label="บ้านเลขที่"
                          name="address"
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
                          name="road"
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
                          name="subDistrict"
                          style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px 0 0' }}
                        >
                          <Input placeholder="Please input" />
                        </Form.Item>
                        <Form.Item
                          label="เขต/อำเภอ"
                          name="district"
                          style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px 0 0' }}
                        >
                          <Input placeholder="Please input" />
                        </Form.Item>
                        <Form.Item
                          label="จังหวัด"
                          name="province"
                          style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px 0 0' }}
                        >
                          <Select placeholder="Select province">
                            <Option value="Zhejiang">กรุงเทพมหานคร</Option>
                            <Option value="Jiangsu">เชียงใหม่</Option>
                            <Option value="Jiangsu">เชียงราย</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          label="รหัสไปรษณีย์"
                          name="zipCode"
                          style={{ display: 'inline-block', width: 'calc(20% - 8px)', margin: '0' }}
                        >
                          <Input placeholder="Input street" />
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
                    </Form.Item>
                  </Col>
                </Row>
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
    </>
  );
}

export default PregnantMotherProfile;
