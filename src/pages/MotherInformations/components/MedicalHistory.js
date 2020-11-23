import { Button, Checkbox, Col, Form, Input, Row, Table, Typography } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

function MedicalHistory() {
  const { Title } = Typography;
  const [cesarean, setCesarean] = useState(0);
  const [drugAllergy, setDrugAllergy] = useState(0);
  const arrCesarean = [];
  const arrDrugAllergy = [];

  const handleCesarean = () => {
    setCesarean(cesarean + 1);
  };

  const handleDrugAllergy = () => {
    setDrugAllergy(drugAllergy + 1);
  };

  for (let i = 0; i < cesarean; i++) {
    arrCesarean.push(
      <Form.Item style={{ marginBottom: 4 }}>
        <Form.Item label="รายละเอียด" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="เมื่อ พ.ศ." style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="โรงพยาบาล" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
      </Form.Item>
    );
  }

  for (let i = 0; i < drugAllergy; i++) {
    arrDrugAllergy.push(
      <Form.Item style={{ marginBottom: 4 }}>
        <Form.Item label="ชื่อยา" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="อาการแพ้ยา" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
      </Form.Item>
    );
  }

  return (
    <>
      <Form>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ประวัติเจ็บป่วยหญิงตั้งครรภ์
        </Title>
        <Form.Item>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                  เบาหวาน
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B" style={{ lineHeight: '32px' }}>
                  ความดันโลหิตสูง
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C" style={{ lineHeight: '32px' }}>
                  โรคหัวใจ
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D" style={{ lineHeight: '32px' }}>
                  ไทรอยด์
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E" style={{ lineHeight: '32px' }}>
                  โรคโลหิตจาง
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="other" style={{ lineHeight: '32px' }}>
                  อื่นๆ
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ประวัติการเจ็บป่วยของบุคคลในครอบครัว
        </Title>
        <Form.Item>
          <Checkbox.Group>
            <Row>
              <Col span={6}>
                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                  โรคชัก
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="B" style={{ lineHeight: '32px' }}>
                  เบาหวาน
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="C" style={{ lineHeight: '32px' }}>
                  ความดันโลหิตสูง
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="D" style={{ lineHeight: '32px' }}>
                  พิการแต่กำเนิด
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="E" style={{ lineHeight: '32px' }}>
                  ครรภ์แฝด
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="other" style={{ lineHeight: '32px' }}>
                  ปัญญาอ่อน
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="other" style={{ lineHeight: '32px' }}>
                  อื่นๆ
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={handleCesarean}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            ประวัติการตั้งครรภ์
          </Button>
        </Form.Item>
        {arrCesarean}
        <Form.Item>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={handleDrugAllergy}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            ประวัติแพ้ยา
          </Button>
        </Form.Item>
        {arrDrugAllergy}
      </Form>
    </>
  );
}

export default MedicalHistory;
