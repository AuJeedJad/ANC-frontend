import { Button, Checkbox, Col, Form, Input, Row, Typography, Radio } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';

const layout = {
  labelCol: { xl: 12 },
  wrapperCol: { xl: 12 },
};

function Teeth() {
  const { Title } = Typography;
  const [service, setService] = useState(0);
  const arrService = [];

  const handleService = () => {
    setService(service + 1);
  };

  for (let i = 0; i < service; i++) {
    arrService.push(
      <Form.Item style={{ marginBottom: 4 }}>
        <Form.Item label="ครั้งที่" name="amount" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="วันที่" name="date" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input type="date" placeholder="ปี-เดือน" />
        </Form.Item>
        <Form.Item label="ผู้ให้บริการ" name="dentist" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="ให้บริการ" name="details" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
      </Form.Item>
    );
  }

  return (
    <>
      <Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ผลการตรวจ
        </Title>

        <Form.Item name="toothDecay" label="ฟันผุ" {...layout}>
          <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Radio value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Radio>
              </Col>
              <Col span={8}>
                <Radio value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="gingivitis" label="เหงือกอักเสบ" {...layout}>
          <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Radio value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Radio>
              </Col>
              <Col span={8}>
                <Radio value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="calculus" label="หินน้ำลาย" {...layout}>
          <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Radio value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Radio>
              </Col>
              <Col span={8}>
                <Radio value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="อื่นๆ" name="other" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Form.Item label="ผู้ตรวจ" name="examBy" style={{ display: 'inline-flex', marginRight: 4 }}>
            <Input />
          </Form.Item>
          <Form.Item label="วันที่" name="date" style={{ display: 'inline-flex', marginRight: 4 }}>
            <Input type="date" placeholder="ปี-เดือน" />
          </Form.Item>
        </Form.Item>

        <Title level={3} style={{ textDecoration: 'underline' }}>
          เเนะนำ/ฝึกทักษะ
        </Title>
        <Form.Item>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="isMouthCare" style={{ lineHeight: '32px' }}>
                  เเนะนำการกินเเละการดูเเลช่องปาก
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isBrushPractice" style={{ lineHeight: '32px' }}>
                  ฝึกแปรงฟัน
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isDryedBrush" style={{ lineHeight: '32px' }}>
                  ฝึกแปรงฟันโดยย้อมคราบจุลินทรีย์
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isFloss" style={{ lineHeight: '32px' }}>
                  ฝึกใช้ไหมขัดฟัน
                </Checkbox>
              </Col>

              <Form.Item label="อื่นๆ" name="other" style={{ display: 'inline-flex', marginRight: 4 }}>
                <Input />
              </Form.Item>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={handleService}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            การให้บริการเเละการนัด
          </Button>
        </Form.Item>
        <Form.Item>{arrService}</Form.Item>
      </Form.Item>
    </>
  );
}

export default Teeth;
