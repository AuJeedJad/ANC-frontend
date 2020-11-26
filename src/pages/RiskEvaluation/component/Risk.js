import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const layout = {
  labelCol: { xl: 16 },
  wrapperCol: { xl: 16 },
};

function RiskEvaluation() {
  const { Title } = Typography;
  const [present, setPresent] = useState(0);
  const [medicine, setMedicine] = useState(0);
  const arrPresent = [];
  const arrMedicine = [];

  const handlePresent = () => {
    setPresent(present + 1);
  };

  const handleMedicine = () => {
    setMedicine(medicine + 1);
  };

  for (let i = 0; i < present; i++) {
    arrPresent.push(
      <Form.Item>
        <Form.Item name="ครรภ์แฝด" label="ครรภ์แฝด" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="อายุ < 17 ปี (นับถึง EDC)" label="อายุ < 17 ปี (นับถึง EDC)" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="อายุ > 35 ปี (นับถึง EDC)" label="อายุ > 35 ปี (นับถึง EDC)" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="Rh Negative " label="Rh Negative " {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="เลือดออกทางช่องคลอด" label="เลือดออกทางช่องคลอด" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="มีก้อนในอุ้งเชิงกราน" label="มีก้อนในอุ้งเชิงกราน" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="ความดันโลหิต Diastolic >= 90 mmHG" label="ความดันโลหิต Diastolic >= 90 mmHG" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="BMI < 18.5 กก./ตรม." label="BMI < 18.5 กก./ตรม." {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
      </Form.Item>
    );
  }

  for (let i = 0; i < medicine; i++) {
    arrMedicine.push(
      <Form.Item>
        <Form.Item name="โลหิตจาง" label="โลหิตจาง" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="โรคเบาหวาน" label="โรคเบาหวาน" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="โรคไต" label="โรคไต" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="โรคหัวใจ" label="โรคหัวใจ" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          name="ติดยาเสพติด ติดสุรา สูบบุหรี่ คนใกล้ชิดบุหรี่"
          label="ติดยาเสพติด ติดสุรา สูบบุหรี่ คนใกล้ชิดบุหรี่"
          {...layout}
        >
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="อื่นๆ" label="อื่นๆ" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <Row>
            <Form.Item label="ถ้ามี อื่นๆ โปรดระบุ" name="specify">
              <Input />
            </Form.Item>
          </Row>
        </Col>
      </Form.Item>
    );
  }

  return (
    <>
      <Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ประวัติอดีต
        </Title>
        <Form.Item
          name=" เคยมีทารกตายในครรภ์หรือเสียชีวิตเเรกเกิด ( 1 เดือนเเรก )"
          label=" เคยมีทารกตายในครรภ์หรือเสียชีวิตเเรกเกิด ( 1 เดือนเเรก )"
          {...layout}
        >
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          name="เคยเเท้ง 3 ครั้ง ติดต่อกันหรือมากกว่าติดต่อกัน"
          label="เคยเเท้ง 3 ครั้ง ติดต่อกันหรือมากกว่าติดต่อกัน"
          {...layout}
        >
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          name="เคยคลอดบุตรน้ำหนักน้อยกว่า 2500 กรัม หรือคลอดเมื่ออายุครรภ์น้อยกว่า 37 สัปดาห์"
          label="เคยคลอดบุตรน้ำหนักน้อยกว่า 2500 กรัม หรือคลอดเมื่ออายุครรภ์น้อยกว่า 37 สัปดาห์"
          {...layout}
        >
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="เคยคลอดบุตรน้ำหนักมากกว่า 4000 กรัม" label="เคยคลอดบุตรน้ำหนักมากกว่า 4000 กรัม" {...layout}>
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          name="เคยเข้ารับการรักษาพยาบาลความดันโลหิตสูงระหว่างตั้งครรภ์หรือครรภ์เป็นพิษ"
          label="เคยเข้ารับการรักษาพยาบาลความดันโลหิตสูงระหว่างตั้งครรภ์หรือครรภ์เป็นพิษ"
          {...layout}
        >
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          name="เคยผ่าตัดอวัยวะในระบบสืบพันธุ์ เช่น เนื้องอกมดลูก ผ่าตัดคลอด ผูกปากมดลุก ฯลฯ"
          label="เคยผ่าตัดอวัยวะในระบบสืบพันธุ์ เช่น เนื้องอกมดลูก ผ่าตัดคลอด ผูกปากมดลุก ฯลฯ"
          {...layout}
        >
          <Checkbox.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Row justify="start">
              <Col span={8}>
                <Checkbox value="have" style={{ lineHeight: '32px', width: '70px' }}>
                  มี
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="No" style={{ lineHeight: '32px', width: '70px' }}>
                  ไม่มี
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={handlePresent}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            ประวัติปัจจุบัน
          </Button>
        </Form.Item>
        <Form.Item>{arrPresent}</Form.Item>

        <Form.Item>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={handleMedicine}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            ประวัติอายุรกรรม
          </Button>
        </Form.Item>
        <Form.Item>{arrMedicine}</Form.Item>

        <Form.Item label="ผู้ประเมิน" name="name" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="วันที่" name="date" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input type="date" placeholder="ปี-เดือน" />
        </Form.Item>
      </Form.Item>
    </>
  );
}

export default RiskEvaluation;
