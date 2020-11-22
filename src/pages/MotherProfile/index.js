import React from 'react';
import { Button, Col, DatePicker, Form, Input, Layout, Row, Select, Tabs, Typography } from 'antd';
import './profile.css';
import PregnantMotherProfile from './components/PregnantMotherProfile';

function MotherProfile() {
  const { Header, Footer, Sider, Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <>
      <Layout style={{ width: '100vw', height: '100vh' }}>
        <Header style={{ backgroundColor: 'khaki' }}>Header</Header>
        <Layout>
          <Sider style={{ backgroundColor: 'darkgrey' }}>Sider</Sider>
          <Content style={{ width: '100%', height: '100%', padding: '16px' }}>
            <div className="card-container">
              <Tabs type="card">
                <TabPane tab="หญิงตั้งครรภ์" key="1">
                  {/* MotherProfile */}
                  <PregnantMotherProfile />
                </TabPane>
                <TabPane tab="สามี" key="2">
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                </TabPane>
                <TabPane tab="ลูก" key="3">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
              </Tabs>
            </div>
          </Content>
        </Layout>
        <Footer style={{ backgroundColor: 'salmon' }}>Footer</Footer>
      </Layout>
    </>
  );
}

export default MotherProfile;
