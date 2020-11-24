import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import MedicalHistory from './components/MedicalHistory';
import MensCheck from './components/MensCheck';
import PregnantHistory from './components/PregnantHistory';

function MotherInfomations() {
  const { Title } = Typography;

  return (
    <>
      <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Row style={{ textAlign: 'center' }}>
          <Col span={24}>
            <Title level={3} style={{ textDecoration: 'underline' }}>
              ประวัติสุขภาพของหญิงตั้งครรภ์และครอบครัว
            </Title>
          </Col>
        </Row>
        <Row justify="center" style={{ width: '100%', height: '100%' }}>
          <Col span={20}>
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
            <MedicalHistory />
          </Col>
        </Row>
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

export default MotherInfomations;
