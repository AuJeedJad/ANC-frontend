import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import CurrentPregContext from '../../../context/CurrentPregContext';

function ChildProfile() {
  const { Title } = Typography;
  const { mother, setMother } = useContext(CurrentPregContext);
  const [child, setChild] = useState({});
  const [form] = Form.useForm();

  const history = useHistory();

  useEffect(() => {
    console.log(child);
    axios.get(`/childProfile?curPregId=${mother.curPregId}`).then((res) => {
      const { firstName, lastName, birthDate, idCard } = res.data;
      form.setFieldsValue({
        firstName,
        lastName,
        birthDate,
        idCard,
      });
      setChild(res.data);
    });
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values, { curPregId: mother.curPregId });
    axios
      .post('/childProfile', {
        firstName: values.firstName,
        lastName: values.lastName,
        birthDate: values.birthDate,
        idCard: values.idCard,
        curPregId: mother.curPregId,
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
                ประวัติส่วนตัว - ลูก
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
                <Form.Item style={{ marginTop: 16, marginBottom: 0 }}>
                  <Row justify="end">
                    <Col>
                      <Button type="primary" style={{ width: '150px', marginRight: '8px' }} htmlType="submit">
                        บันทึก
                      </Button>
                      <Button type="primary" style={{ width: '150px' }} danger onClick={() => history.push('/')}>
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
