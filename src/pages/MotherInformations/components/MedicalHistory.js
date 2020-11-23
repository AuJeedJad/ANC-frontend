import { Button, Checkbox, Col, Form, Input, Row, Table, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

function MedicalHistory() {
  const { Title } = Typography;
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
      </Form>
    </>
  );
}

export default MedicalHistory;
