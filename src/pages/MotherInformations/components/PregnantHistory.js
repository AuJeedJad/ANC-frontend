import { Button, Table } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

function PregnantHistory() {
  const [data, setData] = useState({
    dataSource: [
      {
        key: '1',
        deliverDate: '17/11/2019',
        ga: '32',
        deliverMethod: 'คลอดธรรมชาติ',
        childWeight: '330',
        childGender: 'ชาย',
        birthPlace: 'โรงพยาบาลกรุงเทพ',
        complication: '-',
        childStatus: 'ปกติ',
      },
    ],
    count: 1,
  });
  const columns = [
    {
      title: 'ครรภ์ที่',
      dataIndex: 'key',
    },
    {
      title: 'ว/ด/ป คลอด/แท้ง',
      dataIndex: 'deliverDate',
    },
    {
      title: 'อายุครรภ์ (สัปดาห์)',
      dataIndex: 'ga',
    },
    {
      title: 'วิธีคลอด/แท้ง',
      dataIndex: 'deliverMethod',
    },
    {
      title: 'น้ำหนักทารก',
      dataIndex: 'childWeight',
    },
    {
      title: 'เพศ',
      dataIndex: 'childGender',
    },
    {
      title: 'สถานที่คลอด/แท้ง',
      dataIndex: 'birthPlace',
    },
    {
      title: 'ภาวะแทรกซ้อน',
      dataIndex: 'complication',
    },
    {
      title: 'สภาพทารกปัจจุบัน',
      dataIndex: 'childStatus',
    },
  ];

  const handleAdd = () => {
    const { count, dataSource } = data;
    const newData = {
      key: count + 1,
      deliverDate: '17/11/2019',
      ga: '32',
      deliverMethod: 'คลอดธรรมชาติ',
      childWeight: '330',
      childGender: 'ชาย',
      birthPlace: 'โรงพยาบาลกรุงเทพ',
      complication: '-',
      childStatus: 'ปกติ',
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
