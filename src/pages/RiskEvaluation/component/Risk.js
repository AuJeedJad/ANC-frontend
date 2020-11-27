import { Button, Checkbox, Col, Form, Input, Row, Typography, Radio } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import axios from '../../../config/axios';

const layout = {
  labelCol: { xl: 16 },
  wrapperCol: { xl: 16 },
};

function RiskEvaluation() {
  const { Title } = Typography;

  const [historyList, setHistoryList] = useState([]);
  const [presentList, setPresentList] = useState([]);
  const [presentForm, setPresentForm] = useState([]);
  const [medicineList, setMedicineList] = useState([]);
  const [medicineForm, setMedicineForm] = useState([]);

  const handlePresent = () => {
    setPresentForm([...presentForm, presentForm1]);
  };

  const handleMedicine = () => {
    setMedicineForm([...medicineForm, medicineForm1]);
  };

  useEffect(() => {
    axios
      .get('/staticRiskEvaluation/?type=history')
      .then((res) => {
        setHistoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/staticRiskEvaluation/?type=present')
      .then((res) => {
        setPresentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/staticRiskEvaluation/?type=medicine')
      .then((res) => {
        setMedicineList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const presentForm1 = presentList.map((item) => (
    <Form.Item name={item.id} label={item.checkList} {...layout}>
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
  ));

  const medicineForm1 = medicineList.map((item) => (
    <Form.Item name={item.id} label={item.checkList} {...layout}>
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
  ));

  return (
    <>
      <Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ประวัติอดีต
        </Title>

        {historyList.map((item) => (
          <Form.Item name={item.id} label={item.checkList} {...layout}>
            <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
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
        ))}

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
        <Form.Item>{presentForm}</Form.Item>

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
        <Form.Item>{medicineForm}</Form.Item>

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
