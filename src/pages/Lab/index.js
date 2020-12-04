import React, { useContext, useState, useEffect, useRef } from 'react';
import { Row, Col, Table, Input, Button, Radio, Form } from 'antd';

const rows = [
  {
    title: 'หญิงตั้งครรภ์/สามี',
    dataIndex: 'role',
  },
  {
    title: 'Blood gr/Rh',
    dataIndex: 'bloodGroup',
  },
  {
    title: 'Hct/Hb',
    dataIndex: 'hctHb',
  },
  {
    title: 'OF/MCV, MCH',
    dataIndex: 'ofMcvMch',
  },
  {
    title: 'DCIP',
    dataIndex: 'dcip',
  },
  {
    title: 'Hb typing',
    dataIndex: 'hbTyping',
  },
  {
    title: 'PCR',
    dataIndex: 'pcr',
  },
  {
    title: 'ไวรัสตับอักเสบ บี',
    dataIndex: 'hepatitisBVirus',
  },
  {
    title: 'ซิฟิลิส',
    dataIndex: 'syphilis',
  },
  {
    title: 'ตรวจหาเชื้อเอช ไอ วี',
    dataIndex: 'hiv',
  },
];

const layout = {
  labelCol: { xs: 7 },
  wrapperCol: { xs: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={23}>
          <Row style={{ backgroundColor: '#9accc8', padding: '1em 0 0 0' }}>
            <Col xs={12} style={{ borderRight: '1px solid #ebf9cc' }}>
              <Form.Item name="downsyndromeScreen" label="การคัดกรองดาวน์ซินโดรม">
                <Radio.Group name="radiogroup" defaultValue={1}>
                  <Radio value={true}>
                    <span style={{ fontSize: '2em' }}>คัดกรองดาวน์ซินโดรม</span>
                  </Radio>
                  <Radio value={false}>ไม่ได้คัดกรองดาวน์ซินโดรม</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="riskEvaluate" label="ความเสี่ยง" style={{ justifyContent: 'flex-start' }}>
                <Radio.Group name="radiogroup" defaultValue={1}>
                  <Radio value={'High'}>เสี่ยงสูง</Radio>
                  <Radio value={'Low'}>เสี่ยงต่ำ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="amniocentesis" label="เจาะน้ำคร่ำ ผล">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item name="otherLabResult" label="Other Lab Result">
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

function lab() {
  return (
    <div className="page">
      <div style={{ height: '2.3%' }}></div>
      <Row style={{ backgroundColor: 'pink', width: '100%', height: '100%' }}>
        <Col xs={24} md={14} style={{ backgroundColor: '#FFFCCC', width: '50%' }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={23}>
              <h1
                style={{
                  color: '#52938E',
                  fontWeight: 'bold',
                  padding: '0.12em',
                  borderStyle: 'dashed',
                  borderWidth: '2px',
                  borderColor: '#66A39E',
                  margin: '0.5em 0',
                }}
              >
                ผลตรวจจากห้องปฏิบัติการ
              </h1>
            </Col>
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={23} style={{}}>
              <Table />
              {/* <table>
                <tr style={{}}>
                  <th>หญิงตั้งครรภ์/สามี</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Blood gr/Rh</th>
                </tr>
                <tr>
                  <th>Hct/Hb</th>
                </tr>
                <tr>
                  <th>OF/MCV, MCH</th>
                </tr>
                <tr>
                  <th>DCIP</th>
                </tr>
                <tr>
                  <th>Hb typing</th>
                </tr>
                <tr>
                  <th>PCR</th>
                </tr>
                <tr>
                  <th>ไวรัสตับอักเสบ บี</th>
                </tr>
                <tr>
                  <th>ซิฟิลิส</th>
                </tr>
                <tr>
                  <th>ตรวจหาเชื้อเอช ไอ วี</th>
                </tr>
              </table> */}
            </Col>
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Col xs={24} style={{ margin: '1em 0' }}>
              <Demo />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={10} style={{ backgroundColor: '#FFE3DD' }}>
          {' '}
          Col-2{' '}
        </Col>
      </Row>
    </div>
  );
}

export default lab;
