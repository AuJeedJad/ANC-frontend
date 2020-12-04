import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import CurrentPregContext from '../../../context/CurrentPregContext';

const { Title } = Typography;

function FamilyProfile() {
  const { mother, setMother } = useContext(CurrentPregContext);
  const [form] = Form.useForm();

  useEffect(() => {
    axios.get(`/fatherProfile?id=${mother.curPregId}`).then((res) => {
      form.setFieldsValue({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        birthDate: res.data.birthDate,
        idCard: res.data.idCard,
        phoneNumber: res.data.phoneNumber,
        email: res.data.email,
      });
      setMother(res.data);
    });
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
    axios
      .post('/fatherProfile', {
        firstName: values.firstName,
        lastName: values.lastName,
        birthDate: values.birthDate,
        idCard: values.idCard,
        phoneNumber: values.phoneNumber,
        email: values.email,
      })
      .then((res) => {
        notification.success({
          description: 'แก้ไขข้อมูลสำเร็จ',
        });
      });
  };

  return (
    <>
      <Row justify="center">
        <Col span={16}>
          <Row>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ประวัติส่วนตัว - สามี
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item label="ชื่อ" name="firstName" style={{ marginBottom: '8px' }}>
                  <Input placeholder="ชื่อ" />
                </Form.Item>
                <Form.Item label="นามสกุล" name="lastName" style={{ marginBottom: '8px' }}>
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
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="เบอร์โทรศัพท์"
                    name="phoneNumber"
                    style={{ display: 'inline-block', width: 'calc(20% - 8px)', margin: '0 auto' }}
                  >
                    <Input placeholder="0XX-XXX-XXXX" />
                  </Form.Item>
                  <Form.Item
                    label="อีเมล"
                    name="email"
                    style={{ display: 'inline-block', width: 'calc(80% - 8px)', margin: '0 8px' }}
                  >
                    <Input placeholder="abc@mail.com" type="email" />
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

export default FamilyProfile;
