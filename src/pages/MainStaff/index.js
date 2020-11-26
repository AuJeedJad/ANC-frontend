import React, { useEffect, useState } from 'react';
import './IndexStaff.css';
import axios from 'axios';
import { Col, Layout, Row, Button, Input, Form, Table, Typography, Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

function IndexStaff() {
  const [anc, setAnc] = useState([]);
  console.log(anc);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/anc?appointmentDate=${new Date()}&&checkHospitalId=1`)
      .then((res) => {
        setAnc(res.data.ANC);
        console.log(res);
      })
      .catch((err) => {});
  }, []);

  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;

  const fixedColumns = [
    {
      title: 'ชื่อ - นามสกุล / รหัสหญิงตั้งครรภ์',
      dataIndex: 'name',
      fixed: true,
      width: 300,
    },
  ];

  const fixedData = [];
  for (let i = 0; i < anc.length; i += 1) {
    fixedData.push({
      key: i,
      name: `${anc[i].CurrentPregnancy.MotherProfile.firstName}  ${anc[i].CurrentPregnancy.MotherProfile.lastName}`,
    });
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">ตัวอักษร</Menu.Item>
      <Menu.Item key="2">รหัสหญิงตั้งครรภ์</Menu.Item>
      <Menu.Item key="3">เวลานัด</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="primary" style={{ marginTop: '45px', width: '70%', height: '50px', borderRadius: '50px' }}>
                ลงทะเบียนครรภ์ใหม่ (วินิฉัยการตั้งครรภ์ครั้งแรก / เพิ่มครรภ์ปัจจุบันเข้าฐานข้อมูล)
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={16} style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
              <Form layout="vertical" style={{ padding: '5px', width: '70%', marginLeft: '140px' }}>
                <Input placeholder="เลขบัตรประชาชน" style={{ height: '35px' }} />
              </Form>
            </Col>
            <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '25px' }}>
              <Button
                style={{
                  padding: '5px',
                  width: '25%',
                  height: '40px',
                  borderRadius: '50px',
                  marginRight: '5px',
                }}
              >
                เพิ่มคิว
              </Button>
              <Button
                style={{
                  padding: '5px',
                  width: '25%',
                  height: '40px',
                  borderRadius: '50px',
                  marginRight: '200px',
                }}
              >
                ตรวจทันที
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              span={16}
              style={{
                marginTop: '15px',
                marginBottom: '60px',
                paddingLeft: '190px',
                width: '50px',
              }}
            >
              <Title level={3} style={{ textDecoration: 'underline' }}>
                นัดหมายวันนี้
              </Title>
              <Table
                columns={fixedColumns}
                dataSource={fixedData}
                pagination={false}
                //   scroll={{ x: 2000 }}
                bordered
                //   summary={() => (
                //     <Table.Summary.Row>
                //       <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
                //       <Table.Summary.Cell index={1}>This is a summary content</Table.Summary.Cell>
                //     </Table.Summary.Row>
                //   )}
              />
            </Col>
            <Col span={8} style={{ marginTop: '80px', paddingLeft: '25px', width: '50px' }}>
              <div id="components-dropdown-demo-dropdown-button">
                <Dropdown overlay={menu}>
                  <Button style={{ borderRadius: '50px', width: '160px', height: '40px' }}>
                    จัดเรียงตาม <DownOutlined />
                  </Button>
                </Dropdown>{' '}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default IndexStaff;
