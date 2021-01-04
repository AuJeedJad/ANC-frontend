import axios from 'axios';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../../context/UserContext';

function MedicalHistory(props) {
  const { Title } = Typography;
  const user = useContext(UserContext);
  const [cesareanCount, setCesareanCount] = useState(0);
  const [drugAllergy, setDrugAllergy] = useState(0);
  const [cesareanSections, setCesareanSections] = useState([]);

  const arrDrugAllergy = [];

  useEffect(() => {
    axios.get(`/motherInformation/medicalHistory?motherId=${user.id}`).then((res) => {
      if (res.data.CesareanSections.length !== 0) {
        for (let i = 0; i < res.data.CesareanSections.length; i++) {
          props.form.setFieldsValue({
            cesareanYear: res.data.CesareanSections[i].year,
            cesareanHospital: res.data.CesareanSections[i].hospital,
          });
        }
        cesareanSections.push([
          <Form.Item key={cesareanCount} style={{ marginBottom: 4 }}>
            <Form.Item label="เมื่อ พ.ศ." name="cesareanYear" style={{ display: 'inline-flex', marginRight: 4 }}>
              <Input />
            </Form.Item>
            <Form.Item label="โรงพยาบาล" name="cesareanHospital" style={{ display: 'inline-flex', marginRight: 4 }}>
              <Input />
            </Form.Item>
          </Form.Item>,
        ]);
      }
    });
    setCesareanSections(cesareanSections);
    setCesareanCount(cesareanSections + 1);
  }, []);

  const handleCesarean = () => {
    cesareanSections.push([
      <Form.Item key={cesareanCount} style={{ marginBottom: 4 }}>
        <Form.Item label="เมื่อ พ.ศ." name="cesareanYear" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="โรงพยาบาล" name="cesareanHospital" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
      </Form.Item>,
    ]);
    setCesareanCount(cesareanSections.length + 1);
  };

  const handleDrugAllergy = () => {
    setDrugAllergy(drugAllergy + 1);
  };

  for (let i = 0; i < drugAllergy; i++) {
    arrDrugAllergy.push(
      <Form.Item style={{ marginBottom: 4 }}>
        <Form.Item label="ชื่อยา" name="drugName" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item label="อาการแพ้ยา" name="symptom" style={{ display: 'inline-flex', marginRight: 4 }}>
          <Input />
        </Form.Item>
      </Form.Item>
    );
  }

  const onChangeCheckedBox = (e) => {
    console.log(e);
  };

  return (
    <>
      <Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ประวัติเจ็บป่วยหญิงตั้งครรภ์
        </Title>
        <Form.Item name="motherMedicalHistory">
          <Checkbox.Group onChange={(e) => onChangeCheckedBox(e)}>
            <Row>
              <Col span={8}>
                <Checkbox value="isDiabetes" style={{ lineHeight: '32px' }}>
                  เบาหวาน
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isHypertension" style={{ lineHeight: '32px' }}>
                  ความดันโลหิตสูง
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isHeartDisease" style={{ lineHeight: '32px' }}>
                  โรคหัวใจ
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isThyroid" style={{ lineHeight: '32px' }}>
                  ไทรอยด์
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isAnemia" style={{ lineHeight: '32px' }}>
                  โรคโลหิตจาง
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="isOther" style={{ lineHeight: '32px' }}>
                  อื่นๆ
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ประวัติการเจ็บป่วยของบุคคลในครอบครัว
        </Title>
        <Form.Item name="familyMedicalHistory">
          <Checkbox.Group>
            <Row>
              <Col span={6}>
                <Checkbox value="isSeizure" style={{ lineHeight: '32px' }}>
                  โรคชัก
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="isDiabetes" style={{ lineHeight: '32px' }}>
                  เบาหวาน
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="isHypertension" style={{ lineHeight: '32px' }}>
                  ความดันโลหิตสูง
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="isBirthDefect" style={{ lineHeight: '32px' }}>
                  พิการแต่กำเนิด
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="isTwin" style={{ lineHeight: '32px' }}>
                  ครรภ์แฝด
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="isMentalRetardation" style={{ lineHeight: '32px' }}>
                  ปัญญาอ่อน
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="isOther" style={{ lineHeight: '32px' }}>
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
        <Form.Item>{cesareanSections}</Form.Item>

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
        <Form.Item>{arrDrugAllergy}</Form.Item>
      </Form.Item>
    </>
  );
}

export default MedicalHistory;
