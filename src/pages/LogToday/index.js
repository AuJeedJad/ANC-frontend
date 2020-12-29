import React, { useEffect, useState, useContext } from 'react';
import { Col, Row, Table, Typography } from 'antd';
import { notification } from 'antd';
import Logo from '../../image/logo/logo01.png';
import './logToday.css';
import axios from 'axios';
import UserContext from '../../context/UserContext';

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

function GaCare() {
  const [anc, setAnc] = useState([]);
  const { hospitalId } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`/anc?appointmentDate=${new Date().toISOString()}&checkHospitalId=${hospitalId}&isChecked=1`)
      .then((res) => {
        setAnc(res.data.ancs);
      })
      .catch((err) => {
        console.dir(err);
        notification.error({
          description: `${err}`,
        });
      });
  }, []);

  const fixedData = [];
  for (let i = 0; i < anc.length; i += 1) {
    fixedData.push({
      key: i,
      name: `${anc[i].CurrentPregnancy.MotherProfile.firstName}  ${anc[i].CurrentPregnancy.MotherProfile.lastName}`,
      id: `${anc[i].CurrentPregnancy.MotherProfile.idCard}`,
    });
  }
  return (
    <>
      <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Col span={22} style={{ marginTop: '30px' }}>
          <Title level={3} style={{ textDecoration: 'underline' }}>
            ผลตรวจวันนี้นัดหมายวันนี้
          </Title>
          <Table
            columns={fixedColumns}
            dataSource={fixedData}
            pagination={false}
            //   scroll={{ x: 2000 }}
            bordered
          />
        </Col>
      </Row>
    </>
  );
}

export default GaCare;
