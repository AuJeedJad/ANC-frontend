import React from 'react';
// import './IndexAnc.css';
import { Col, Layout, Row, Typography, Form, Input, Table, Space, Tag, Button, Empty, Checkbox } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

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
            marginTop: '30px',
          }}
        >
          <Title level={3} style={{ textDecoration: 'underline' }}>
            ผลการตรวจอัลตร้าซาวน์วันที่
          </Title>

          <Row>
            <Form.Item label="BPD" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="FL" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="HC" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="AC" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="AFI" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Placenta" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="EFW" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
              <Input />
            </Form.Item>
            <Form.Item label="อายุครรภ์" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
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
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <Title level={3} style={{ textDecoration: 'underline', textAlign: 'center' }}>
            Risk
          </Title>
          <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Table columns={columns} dataSource={data} pagination={false} style={{ width: '75%', marginTop: '20px' }} />
        </Col>
        <Col
          span={18}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '15px',
            marginBottom: '20px',
          }}
        >
          <Button type="primary" style={{ borderRadius: '50px' }}>
            เพิ่มบันทึกผลการตรวจวันนี้ <PlusCircleOutlined />
          </Button>
        </Col>
        <Row style={{ width: '100%' }}>
          <Col span={8}>
            <Empty />
          </Col>
          <Col span={8}>
            <Empty />
          </Col>
          <Col span={8}>
            <Title level={3} style={{ textDecoration: 'underline', textAlign: 'center' }}>
              คัดกรอง
            </Title>
            <Form>
              <Form.Item
                label="รายละเอียด"
                name="description"
                style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="รายละเอียด"
                name="description"
                style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
              >
                <Input />
              </Form.Item>
              <Form.Item label="รายละเอียด" style={{ display: 'inline-flex' }}>
                <Checkbox.Group onChange={onChange}>
                  <Row justify="center" style={{ width: '100%' }}>
                    <Col>
                      <Checkbox value="A">ปกติ</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="B">สั้น</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="C">บุ๋ม</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="C">บอด</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Anc;
