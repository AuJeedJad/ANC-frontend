import { Button, Col, DatePicker, Form, Input, Layout, Radio, Row, Select, Space, Typography } from 'antd';
import React from 'react';
import MedicalHistory from './components/MedicalHistory';
import MensCheck from './components/MensCheck';
import PregnantHistory from './components/PregnantHistory';

function MotherInfomations() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ position: 'fixed', zIndex: '1', width: '100%', backgroundColor: 'khaki' }}>Header</Header>
        <Layout style={{ marginTop: '64px' }}>
          <Sider style={{ backgroundColor: 'darkgrey' }}>Sider</Sider>
          <Content style={{ padding: '16px' }}>
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
          </Content>
        </Layout>
        <Footer style={{ backgroundColor: 'salmon' }}>Footer</Footer>
      </Layout>
    </>
  );
}

export default MotherInfomations;
