import { Button, Checkbox, Col, Form, Input, Row, Typography, Radio } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';

const layout = {
  labelCol: { xl: 12 },
  wrapperCol: { xl: 12 },
};

function Teeth(props) {
  const { Title } = Typography;

  const [serviceForm, setServiceForm] = useState([]);
  const [numForm, setNumForm] = useState(0);

  const handleService = () => {
    setServiceForm([...serviceForm, serviceForm1]);
    setNumForm(numForm + 1);
  };

  const serviceForm1 = (
    <Form.Item style={{ marginBottom: 4 }}>
      <Form.Item label="ครั้งที่" style={{ display: 'inline-flex', marginRight: 4 }}>
        <Input name={`amount-${numForm}`} onChange={props.onChangeDentalAppointment} />
      </Form.Item>

      <Form.Item label="วันที่" style={{ display: 'inline-flex', marginRight: 4 }}>
        <Input
          type="date"
          placeholder="ปี-เดือน"
          name={`dates-${numForm}`}
          onChange={props.onChangeDentalAppointment}
        />
      </Form.Item>

      <Form.Item label="ผู้ให้บริการ" style={{ display: 'inline-flex', marginRight: 4 }}>
        <Input name={`dentist-${numForm}`} onChange={props.onChangeDentalAppointment} />
      </Form.Item>

      <Form.Item label="ให้บริการ" style={{ display: 'inline-flex', marginRight: 4 }}>
        <Input name={`details-${numForm}`} onChange={props.onChangeDentalAppointment} />
      </Form.Item>
    </Form.Item>
  );

  return (
    <>
      <Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ผลการตรวจ
        </Title>

        <Form.Item name="toothDecay" label="ฟันผุ" {...layout}>
          <Radio.Group
            name="toothDecay"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
            onChange={props.onChange}
          >
            <Row justify="start">
              <Col span={8}>
                <Radio value="1" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Radio>
              </Col>
              <Col span={8}>
                <Radio value="0" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="gingivitis" label="เหงือกอักเสบ" {...layout}>
          <Radio.Group
            name="gingivitis"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
            onChange={props.onChange}
          >
            <Row justify="start">
              <Col span={8}>
                <Radio value="1" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Radio>
              </Col>
              <Col span={8}>
                <Radio value="0" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="calculus" label="หินน้ำลาย" {...layout}>
          <Radio.Group
            name="calculus"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
            onChange={props.onChange}
          >
            <Row justify="start">
              <Col span={8}>
                <Radio value="1" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Radio>
              </Col>
              <Col span={8}>
                <Radio value="0" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="อื่นๆ" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input name="other" onChange={props.onChange} />
        </Form.Item>

        <Form.Item>
          <Form.Item label="ผู้ตรวจ" style={{ display: 'inline-flex', marginRight: 4 }}>
            <Input name="examBy" onChange={props.onChange} />
          </Form.Item>

          <Form.Item label="วันที่" name="date" style={{ display: 'inline-flex', marginRight: 4 }}>
            <Input type="date" placeholder="ปี-เดือน" name="date" onChange={props.onChange} />
          </Form.Item>
        </Form.Item>

        <Title level={3} style={{ textDecoration: 'underline' }}>
          เเนะนำ/ฝึกทักษะ
        </Title>
        <Form.Item>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  name="isMouthCare"
                  onChange={props.onChangeDentalCare}
                  value="isMouthCare"
                  style={{ lineHeight: '32px' }}
                >
                  เเนะนำการกินเเละการดูเเลช่องปาก
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  name="isBrushPractice"
                  onChange={props.onChangeDentalCare}
                  value="isBrushPractice"
                  style={{ lineHeight: '32px' }}
                >
                  ฝึกแปรงฟัน
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  name="isDryedBrush"
                  onChange={props.onChangeDentalCare}
                  value="isDryedBrush"
                  style={{ lineHeight: '32px' }}
                >
                  ฝึกแปรงฟันโดยย้อมคราบจุลินทรีย์
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  name="isFloss"
                  onChange={props.onChangeDentalCare}
                  value="isFloss"
                  style={{ lineHeight: '32px' }}
                >
                  ฝึกใช้ไหมขัดฟัน
                </Checkbox>
              </Col>

              <Form.Item label="อื่นๆ" style={{ display: 'inline-flex', marginRight: 4 }}>
                <Input name="otherAdvise" onChange={props.onChangeDentalCare} />
              </Form.Item>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button
            disabled={serviceForm.length > 1}
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
        <Form.Item>{serviceForm}</Form.Item>
      </Form.Item>
    </>
  );
}

export default Teeth;
