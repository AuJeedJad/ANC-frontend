import React from 'react';
// import './IndexAnc.css';
import { Col, Layout, Row, Typography, Form, Input, Table, Space, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const columns = [
  {
    title: 'วันที่ตรวจ',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'น้ำหนัก ก.ก',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'การตรวจปัสสาวะ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'ความดันโลหิต ม.ม.ปรอท',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'ขนาดของมดลูก (cm)',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: 'ท่าเด็กส่วนนำ/การลง',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'เสียงหัวใจเด็ก',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '',
    render: () => (
      <a>
        <SearchOutlined />
      </a>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Anc() {
  return (
    <>
      <Row justify="center">
        <Col
          span={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
            marginTop: '30px',
          }}
        >
          <Title level={3} style={{ textDecoration: 'underline' }}>
            ผลการตรวจอัลตร้าซาวน์วันที่
          </Title>

          <Row>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // backgroundColor: 'green',
            marginTop: '30px',
          }}
        >
          <Title level={3} style={{ textDecoration: 'underline', textAlign: 'center' }}>
            Risk
          </Title>
          <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
            <Input />
          </Form.Item>
          <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
            <Input />
          </Form.Item>
          <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
            <Input />
          </Form.Item>
          <Form.Item label="รายละเอียด" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
      </Row>
    </>
  );
}

export default Anc;
