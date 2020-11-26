import React from 'react';
import './profile.css';
import { Tabs } from 'antd';
import PregnantMotherProfile from './components/PregnantMotherProfile';
import FamilyProfile from './components/FamilyProfile';
import ChildProfile from './components/ChildProfile';

function MotherProfile() {
  const { TabPane } = Tabs;

  return (
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
  );
}

export default MotherProfile;
