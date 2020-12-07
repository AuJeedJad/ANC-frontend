import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import './IndexStaff.css';
import axios from 'axios';
import { Col, Row, Button, Input, Form, Table, Typography, Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CurrentPregContext from '../../context/CurrentPregContext';

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

function IndexStaff() {
  const [anc, setAnc] = useState([]);
  const [idCard, setIdcard] = useState('');
  const { mother, setMother } = useContext(CurrentPregContext);

  const history = useHistory();

  function onClickInstantCheck() {
    axios
      .get(`staff/motherAccount/motherFind?idCard=${idCard}`)
      .then((res) => {
        setMother({
          currentPregId: res.data.curPregId,
          idCard: idCard,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          GA: res.data.GA,
          isTerminate: res.data.isTerminate,
          isActive: !!res.data.isActive,
        });
        history.push('/staff/motherReport');
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: `${err}`,
        });
      });
  }

  const onChangeidCard = (e) => {
    setIdcard(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/anc?appointmentDate=${new Date()}&checkHospitalId=1&idCard=${idCard}`)
      .then((res) => {
        setAnc(res.data.ancs);
        console.log(res);
      })
      .catch((err) => {});
  }, [idCard]);

  console.log(idCard);

  const { Title } = Typography;

  const fixedColumns = [
    {
      title: 'ชื่อ - นามสกุล',
      dataIndex: 'name',
      fixed: true,
      width: 300,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'รหัสบัตรประชาชน',
      dataIndex: 'id',
      fixed: true,
      width: 300,
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  const fixedData = [];
  for (let i = 0; i < anc.length; i += 1) {
    fixedData.push({
      key: i,
      name: `${anc[i].CurrentPregnancy.MotherProfile.firstName}  ${anc[i].CurrentPregnancy.MotherProfile.lastName}`,
      id: `${anc[i].CurrentPregnancy.MotherProfile.idCard}`,
    });
  }

  // const fixedDat = anc.map((item, index) => ({
  //   key: index,
  //   name: `${item.CurrentPregnancy.MotherProfile.firstName} ${item.CurrentPregnancy.MotherProfile.lastName}`,
  //   id: item.CurrentPregnancy.MotherProfile.idCard,
  // }));

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">ตัวอักษร</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Col span={21}>
          <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => history.push('/staff/motherRegister')}
                type="primary"
                style={{
                  marginTop: '45px',
                  width: '100%',
                  height: '50px',
                  borderRadius: '50px',
                  backgroundColor: 'var(--thirdary-color)',
                  color: 'var(--secondaryDarkest-color)',
                  border: '3px solid var(--secondaryDarkest-color)',
                  fontWeight: '900',
                  fontSize: '14px',
                }}
              >
                ลงทะเบียนครรภ์ใหม่ (วินิฉัยการตั้งครรภ์ครั้งแรก / เพิ่มครรภ์ปัจจุบันเข้าฐานข้อมูล)
              </Button>
            </Col>
          </Row>
          <div style={{ height: '3vh' }}></div>
          <Row>
            <Col
              span={16}
              style={{
                display: 'flex',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}
            >
              <Form layout="vertical" style={{ padding: '5px', width: '100%' }}>
                <Form.Item
                  label="กรอกเลขบัตรประชาชน"
                  name="idCard"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  onChange={onChangeidCard}
                >
                  <Input value={idCard || ''} placeholder="เลขบัตรประชาชน" style={{ height: '35px' }} />
                </Form.Item>
              </Form>
            </Col>
            <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button
                style={{
                  padding: '5px',
                  width: '40%',
                  height: '40px',
                  borderRadius: '50px',
                  marginRight: '5%',
                }}
              >
                เพิ่มคิว
              </Button>
              <Button
                onClick={onClickInstantCheck}
                style={{
                  padding: '5px',
                  width: '40%',
                  height: '40px',
                  borderRadius: '50px',
                }}
              >
                ตรวจทันที
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              span={20}
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
            <Col span={4} style={{ marginTop: '80px', paddingLeft: '25px', width: '50px' }}>
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
