import axios from 'axios';
import { Button, Col, Form, Row, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import MedicalHistory from './components/MedicalHistory';
import MensCheck from './components/MensCheck';
import PregnantHistory from './components/PregnantHistory';
import UserContext from '../../context/UserContext';

function MotherInfomations() {
  const { Title } = Typography;
  const user = useContext(UserContext);
  const [form] = Form.useForm();
  const [motherCheckState, setMotherIsCheckState] = useState([]);
  const [familyCheckState, setFamilyIsCheckState] = useState([]);

  const includeDisease = [
    'isSeizure',
    'isDiabetes',
    'isHypertension',
    'isHeartDisease',
    'isThyroid',
    'isAnemia',
    'isBirthDefect',
    'isTwin',
    'isMentalRetardation',
    'otherDisease',
  ];

  useEffect(() => {
    axios.get(`/motherInformation/medicalHistory?motherId=${user.id}`).then((res) => {
      let arrMotherMedTemp = [];
      let arrFamilyMedTemp = [];
      for (let key in res.data) {
        if (res.data[key] && includeDisease.includes(key)) {
          arrMotherMedTemp.push(key);
        }
      }
      for (let key in res.data.FamilyMedicalHistory) {
        if (res.data.FamilyMedicalHistory[key] && includeDisease.includes(key)) {
          arrFamilyMedTemp.push(key);
        }
      }
      form.setFieldsValue({
        motherMedicalHistory: arrMotherMedTemp,
        familyMedicalHistory: arrFamilyMedTemp,
      });
      setMotherIsCheckState(arrMotherMedTemp);
      setFamilyIsCheckState(arrFamilyMedTemp);
    });
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="page-antd">
      <Form form={form} onFinish={onFinish}>
        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ประวัติสุขภาพของหญิงตั้งครรภ์และครอบครัว
              </Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <MensCheck />
            </Col>
          </Row>
          <Row style={{ marginBottom: 16 }}>
            <Col span={24}>
              <PregnantHistory />
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <MedicalHistory form={form} />
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
    </div>
  );
}

export default MotherInfomations;
