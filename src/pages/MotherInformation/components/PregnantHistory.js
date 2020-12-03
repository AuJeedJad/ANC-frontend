import axios from 'axios';
import { Button, Table } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

function PregnantHistory() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/motherInformation/pregnantHistory?motherId=1').then((res) => {
      setData({ dataSource: res.data, count: res.data.length });
    });
  }, []);

  const columns = [
    {
      title: 'ครรภ์ที่',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ว/ด/ป คลอด/แท้ง',
      dataIndex: 'deliverDate',
      key: 'deliverDate',
    },
    {
      title: 'อายุครรภ์ (สัปดาห์)',
      dataIndex: 'birthAtGa',
      key: 'birthAtGa',
    },
    {
      title: 'วิธีคลอด/แท้ง',
      dataIndex: 'deliverMethod',
      key: 'deliverMethod',
    },
    {
      title: 'น้ำหนักทารก',
      dataIndex: 'childWeight',
      key: 'childWeight',
    },
    {
      title: 'เพศ',
      dataIndex: 'childGender',
      key: 'childGender',
    },
    {
      title: 'สถานที่คลอด/แท้ง',
      dataIndex: 'birthPlace',
      key: 'birthPlace',
    },
    {
      title: 'ภาวะแทรกซ้อน',
      dataIndex: 'complication',
      key: 'complication',
    },
    {
      title: 'สภาพทารกปัจจุบัน',
      dataIndex: 'childStatus',
      key: 'childStatus',
    },
  ];

  const handleAdd = () => {
    const { count, dataSource } = data;
    const newData = {
      id: count + 1,
      deliverDate: '17-11-2019',
      birthAtGa: '32',
      deliverMethod: 'คลอดธรรมชาติ',
      childWeight: '330',
      childGender: 'ชาย',
      birthPlace: 'โรงพยาบาลกรุงเทพ',
      complication: '-',
      childStatus: 'มีชีวิตอยู่',
    };
    setData({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  return (
    <>
      <Button
        icon={<PlusCircleOutlined />}
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        ประวัติการตั้งครรภ์
      </Button>
      <Table bordered dataSource={data.dataSource} columns={columns} pagination={false} />
    </>
  );
}

export default PregnantHistory;
