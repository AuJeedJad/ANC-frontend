import React from 'react';
import { Layout } from 'antd';

function PageLayout({ children }) {
  const { Header, Footer, Sider, Content } = Layout;

  const headerStyle = { position: 'fixed', zIndex: '1', width: '100%', backgroundColor: 'khaki' };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={headerStyle}>Header</Header>
      <Layout style={{ marginTop: '64px' }}>
        <Sider style={{ backgroundColor: 'darkgrey' }}>Sider</Sider>
        <Content style={{ padding: '16px' }}>{children}</Content>
      </Layout>
      <Footer style={{ backgroundColor: 'salmon' }}>Footer</Footer>
    </Layout>
  );
}

export default PageLayout;
