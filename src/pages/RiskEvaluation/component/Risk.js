import { Button, Radio, Col, Form, Input, Row, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const layout = {
  labelCol: { xl: 13 },
  wrapperCol: { xl: 13 },
};

function RiskEvaluation(props) {
  const { Title } = Typography;

  const [presentForm, setPresentForm] = useState([]);
  const [numPresentForm, setNumPresentForm] = useState(0);

  const [medicineForm, setMedicineForm] = useState([]);
  const [numMedicineForm, setNumMedicineForm] = useState(0);

  const handlePresent = () => {
    setPresentForm([...presentForm, presentForm1]);
    setNumPresentForm(numPresentForm + 1);
  };

  const handleMedicine = () => {
    setMedicineForm([...medicineForm, medicineForm1]);
    setNumMedicineForm(numMedicineForm + 1);
  };

  const presentForm1 = (
    <Form.Item>
      <Form.Item label="ครรภ์แฝด" {...layout}>
        <Radio.Group
          name={`twinPregnancy-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="อายุ < 17 ปี (นับถึง EDC)" {...layout}>
        <Radio.Group
          name={`age_17_edc-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="อายุ > 35 ปี (นับถึง EDC)" {...layout}>
        <Radio.Group
          name={`age_35_edc-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="Rh Negative " {...layout}>
        <Radio.Group
          name={`rhNegative-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="เลือดออกทางช่องคลอด" {...layout}>
        <Radio.Group
          name={`vaginalBleeding-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="มีก้อนในอุ้งเชิงกราน" {...layout}>
        <Radio.Group
          name={`pelvicLump-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="ความดันโลหิต Diastolic >= 90 mmHG" {...layout}>
        <Radio.Group
          name={`diastolic_90-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="BMI < 18.5 กก./ตรม." {...layout}>
        <Radio.Group
          name={`Bmi-${numPresentForm}`}
          onChange={props.onChangePresent}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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
    </Form.Item>
  );

  const medicineForm1 = (
    <Form.Item>
      <Form.Item label="โลหิตจาง" {...layout}>
        <Radio.Group
          name={`isAnemia-${numMedicineForm}`}
          onChange={props.onChangeMedicine}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="โรคเบาหวาน" {...layout}>
        <Radio.Group
          name={`isDiabetes-${numMedicineForm}`}
          onChange={props.onChangeMedicine}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="โรคไต" {...layout}>
        <Radio.Group
          name={`isKidney-${numMedicineForm}`}
          onChange={props.onChangeMedicine}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="โรคหัวใจ" {...layout}>
        <Radio.Group
          name={`isHeart-${numMedicineForm}`}
          onChange={props.onChangeMedicine}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="ติดยาเสพติด ติดสุรา สูบบุหรี่ คนใกล้ชิดบุหรี่" {...layout}>
        <Radio.Group
          name={`isSmoke-${numMedicineForm}`}
          onChange={props.onChangeMedicine}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="โรคอายุกรรมอื่นๆ" {...layout}>
        <Radio.Group
          name={`isMedicalDiseases-${numMedicineForm}`}
          onChange={props.onChangeMedicine}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Form.Item label="อื่นๆ" {...layout}>
        <Radio.Group
          name={`other-${numMedicineForm}`}
          onChange={props.onChangeMedicine}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
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

      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        <Row>
          <Form.Item label="ถ้ามี อื่นๆ โปรดระบุ" style={{ display: 'inline-flex', marginRight: 4 }}>
            <Input name={`comment-${numMedicineForm}`} onChange={props.onChangeMedicine} />
          </Form.Item>

          <Form.Item label="ผู้ประเมิน" style={{ display: 'inline-flex', marginRight: 4 }}>
            <Input name={`name-${numMedicineForm}`} onChange={props.onChangeMedicine} />
          </Form.Item>

          <Form.Item label="วันที่" style={{ display: 'inline-flex', marginRight: 4 }}>
            <Input
              type="date"
              placeholder="ปี-เดือน"
              name={`date-${numMedicineForm}`}
              onChange={props.onChangeMedicine}
            />
          </Form.Item>
        </Row>
      </Col>
    </Form.Item>
  );

  return (
    <>
      <Form.Item>
        <Title level={3} style={{ textDecoration: 'underline' }}>
          ประวัติอดีต
        </Title>
        <Form.Item label=" เคยมีทารกตายในครรภ์หรือเสียชีวิตเเรกเกิด ( 1 เดือนเเรก )" {...layout}>
          <Radio.Group
            name="infantDied"
            onChange={props.onChangeHistory}
            style={{ display: 'flex', justifyContent: 'flex-start' }}
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

        <Form.Item label="เคยเเท้ง 3 ครั้ง ติดต่อกันหรือมากกว่าติดต่อกัน" {...layout}>
          <Radio.Group
            name="aborts"
            onChange={props.onChangeHistory}
            style={{ display: 'flex', justifyContent: 'flex-start' }}
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

        <Form.Item label="เคยคลอดบุตรน้ำหนักน้อยกว่า 2500 กรัม หรือคลอดเมื่ออายุครรภ์น้อยกว่า 37 สัปดาห์" {...layout}>
          <Radio.Group
            name="weight_2500"
            onChange={props.onChangeHistory}
            style={{ display: 'flex', justifyContent: 'flex-start' }}
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

        <Form.Item label="เคยคลอดบุตรน้ำหนักมากกว่า 4000 กรัม" {...layout}>
          <Radio.Group
            name="weight_4000"
            onChange={props.onChangeHistory}
            style={{ display: 'flex', justifyContent: 'flex-start' }}
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

        <Form.Item label="เคยเข้ารับการรักษาพยาบาลความดันโลหิตสูงระหว่างตั้งครรภ์หรือครรภ์เป็นพิษ" {...layout}>
          <Radio.Group
            name="toxicPregnant"
            onChange={props.onChangeHistory}
            style={{ display: 'flex', justifyContent: 'flex-start' }}
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

        <Form.Item label="เคยผ่าตัดอวัยวะในระบบสืบพันธุ์ เช่น เนื้องอกมดลูก ผ่าตัดคลอด ผูกปากมดลุก ฯลฯ" {...layout}>
          <Radio.Group
            onChange={props.onChangeHistory}
            name="reproductiveSystem"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
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

        <Form.Item>
          <Button
            disabled={presentForm.length > 4}
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
            disabled={medicineForm.length > 4}
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
      </Form.Item>
    </>
  );
}

export default RiskEvaluation;
