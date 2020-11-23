import React from 'react';
import './profile.css';
import { Layout, Tabs } from 'antd';
import PregnantMotherProfile from './components/PregnantMotherProfile';
import FamilyProfile from './components/FamilyProfile';
import ChildProfile from './components/ChildProfile';

function MotherProfile() {
  const { Header, Footer, Sider, Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ position: 'fixed', zIndex: '1', width: '100%', backgroundColor: 'khaki' }}>Header</Header>
        <Layout style={{ marginTop: '64px' }}>
          <Sider style={{ backgroundColor: 'darkgrey' }}>Sider</Sider>
          <Content style={{ padding: '16px' }}>
            <div className="card-container">
              <Tabs type="card">
                <TabPane tab="หญิงตั้งครรภ์" key="1">
                  {/* MotherProfile */}
                  <PregnantMotherProfile style={{ height: '100%' }} />
                </TabPane>
                <TabPane tab="สามี" key="2">
                  {/* FamilyProfile */}
                  <FamilyProfile style={{ height: '100%' }} />
                </TabPane>
                <TabPane tab="ลูก" key="3">
                  {/* ChildProfile */}
                  <ChildProfile style={{ height: '100%' }} />
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
