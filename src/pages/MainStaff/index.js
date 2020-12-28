import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import './IndexStaff.css';
import axios from 'axios';
import { Col, Row, Button, Input, Form, Table, Typography } from 'antd';
import CurrentPregContext from '../../context/CurrentPregContext';
import UserContext from '../../context/UserContext';

const { Title } = Typography;

// function handleMenuClick(e) {
//   message.info('Click on menu item.');
//   console.log('click', e);
// }

// const menu = (
//   <Menu onClick={handleMenuClick}>
//     <Menu.Item key="1">ตัวอักษร</Menu.Item>
//   </Menu>
// );

function IndexStaff() {
  const [anc, setAnc] = useState([]);
  const [idCard, setIdcard] = useState('');
  const { setMother } = useContext(CurrentPregContext);
  const { hospitalId } = useContext(UserContext);

  const history = useHistory();

  const fetchAnc = () => {
    axios
      .get(`/anc?appointmentDate=${new Date().toISOString()}&checkHospitalId=${hospitalId}&idCard=${idCard}`)
      .then((res) => {
        setAnc(res.data.ancs);
      })
      .catch((err) => {
        console.dir(err);
        notification.error({
          description: `${err}`,
        });
      });
  };

  useEffect(() => {
    fetchAnc();
  }, [idCard]);

  const setSelectedCheck = (selectedIdCard) => {
    const queryIdcard = selectedIdCard || idCard;
    axios
      .get(`staff/motherAccount/motherFind?idCard=${queryIdcard}`)
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
        localStorage.setItem(
          'currentPreg',
          JSON.stringify({
            currentPregId: res.data.curPregId,
            idCard: idCard,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            GA: res.data.GA,
            isTerminate: res.data.isTerminate,
            isActive: !!res.data.isActive,
          })
        );
        history.push('/staff/motherReport');
      })
      .catch((err) => {
        console.dir(err);
        notification.error({
          description: `${err}`,
        });
      });
  };

  const onClickInstantCheck = () => {
    setSelectedCheck();
  };

  const onClickAddQue = async () => {
    try {
      const {
        data: { motherProfile },
      } = await axios.post('/anc', {
        idCard,
        checkHospitalId: hospitalId,
      });
      notification.success({
        description: `เพิ่มคิวการตรวจของคุณ${motherProfile.firstName} ${motherProfile.lastName} สำเร็จ`,
      });
      fetchAnc();
    } catch (err) {
      console.dir(err);
      notification.error({
        description: `${err}`,
      });
    }
  };

  const onClickCheck = (selectedIdCard) => {
    setSelectedCheck(selectedIdCard);
  };

  const onChangeidCard = (e) => {
    setIdcard(e.target.value);
  };

  const fixedData = [];
  for (let i = 0; i < anc.length; i += 1) {
    fixedData.push({
      key: i,
      name: `${anc[i].CurrentPregnancy.MotherProfile.firstName}  ${anc[i].CurrentPregnancy.MotherProfile.lastName}`,
      id: `${anc[i].CurrentPregnancy.MotherProfile.idCard}`,
    });
  }

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
    {
      title: 'จัดการ',
      fixed: true,
      width: 300,
      render: (text, record) => {
        return <a onClick={() => onClickCheck(record.id)}>ตรวจ</a>;
      },
    },
  ];

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
              }}
            >
              <Form layout="vertical" style={{ padding: '5px', width: '100%' }}>
                <Form.Item
                  label="กรอกเลขบัตรประชาชน"
                  name="idCard"
                  rules={[{ required: true, message: 'กรุณากรอกเลขบัตรประชาชน' }]}
                  onChange={onChangeidCard}
                >
                  <Input value={idCard || ''} placeholder="เลขบัตรประชาชน" style={{ height: '35px' }} />
                </Form.Item>
              </Form>
            </Col>
            <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button
                onClick={onClickAddQue}
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
              span={24}
              style={{
                marginTop: '15px',
                marginBottom: '60px',
                width: '50px',
              }}
            >
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ตารางนัดหมายวันนี้
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
            {/* <Col span={4} style={{ marginTop: '80px', paddingLeft: '25px', width: '50px' }}>
              <div id="components-dropdown-demo-dropdown-button">
                <Dropdown overlay={menu}>
                  <Button style={{ borderRadius: '50px', width: '160px', height: '40px' }}>
                    จัดเรียงตาม <DownOutlined />
                  </Button>
                </Dropdown>{' '}
              </div>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default IndexStaff;
