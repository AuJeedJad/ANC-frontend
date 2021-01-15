import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Button, Form, DatePicker, InputNumber, notification } from 'antd';
import axios from 'axios';
import CurrentPregContext from '../../../context/CurrentPregContext';
import moment from 'moment';

const layout = {
  labelCol: { xs: 22 },
  wrapperCol: { xs: 24 },
};

function GetPregHis() {
  const [form] = Form.useForm();
  const { mother } = useContext(CurrentPregContext);
  const [ageOfLastChildren, setAgeOfLastChildren] = useState('2021-01-15');
  const [weight, setWeight] = useState('1');
  const [height, setHeight] = useState('1');
  const [triggerLabResult, setTriggerLabResult] = useState(false);

  let monthAgeOfLastChild = ageOfLastChildren
    ? new Date().getMonth() + 1 + 12 - Number(ageOfLastChildren.slice(5, 7))
    : '-';
  let yearAgeOfLastChild = ageOfLastChildren
    ? new Date().getFullYear() - 1 - Number(ageOfLastChildren.slice(0, 4))
    : '-';
  if (monthAgeOfLastChild == 12) {
    monthAgeOfLastChild = 0;
    yearAgeOfLastChild = yearAgeOfLastChild + 1;
  }

  useEffect(() => {
    axios
      .get(`/currentPregnancy/${mother.currentPregId}`)
      .then((res) => {
        setAgeOfLastChildren(res.data.currentPregnancy.birthDateOfLastChildren);
        setWeight(res.data.currentPregnancy.beforePregWeight);
        setHeight(res.data.currentPregnancy.beforePregHeight / 100);
        form.setFieldsValue({
          pregnancyNumber: res.data.currentPregnancy.pregnancyNumber,
          numberOfCesarean: res.data.currentPregnancy.numberOfCesarean,
          lastPeriodDate: res.data.currentPregnancy.lastPeriodDate
            ? moment(res.data.currentPregnancy.lastPeriodDate)
            : null,
          numberOfChildren: res.data.currentPregnancy.numberOfChildren,
          birthDateOfLastChildren: res.data.currentPregnancy.birthDateOfLastChildren
            ? moment(res.data.currentPregnancy.birthDateOfLastChildren)
            : null,
          beforePregWeight: res.data.currentPregnancy.beforePregWeight,
          beforePregHeight: res.data.currentPregnancy.beforePregHeight,
        });
      })
      .catch((err) => {});
  }, [triggerLabResult]);

  const onFinish = (values) => {
    console.log(values);
    axios
      .post('/currentPregnancy/pregnantHistory', {
        curPregId: mother.currentPregId,
        pregnancyNumber: values.pregnancyNumber,
        numberOfCesarean: values.numberOfCesarean,
        lastPeriodDate: values.lastPeriodDate ? values.lastPeriodDate.toDate() : null,
        numberOfChildren: values.numberOfChildren,
        birthDateOfLastChildren: values.birthDateOfLastChildren ? values.birthDateOfLastChildren.toDate() : null,
        beforePregWeight: values.beforePregWeight,
        beforePregHeight: values.beforePregHeight,
      })
      .then((res) => {
        setTriggerLabResult(!triggerLabResult);
        notification.success({
          description: 'บันทึกข้อมูลสำเร็จ',
        });
      })
      .catch((err) => {});
  };

  return (
    <Form
      {...layout}
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        borderTop: '1px solid lightgray',
      }}
    >
      <Row style={{ marginTop: '1em' }}>
        <Col xs={8}>
          <label for="nest-messages_pregnancyNumber" style={{ textAlign: 'left', fontSize: '20px' }}>
            ครรภ์ที่
          </label>
          <Form.Item name="pregnancyNumber">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_numberOfCesarean" style={{ textAlign: 'left', fontSize: '20px' }}>
            จำนวนครั้งที่เคยผ่าตัดคลอด
          </label>
          <Form.Item name="numberOfCesarean">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_lastPeriodDate" style={{ textAlign: 'left', fontSize: '20px' }}>
            ประจำเดือนครั้งสุดท้าย
          </label>
          <Form.Item name="lastPeriodDate">
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <label for="nest-messages_numberOfChildren" style={{ textAlign: 'left', fontSize: '20px' }}>
            จำนวนบุตรที่มีชีวิต
          </label>
          <Form.Item name="numberOfChildren">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_birthDateOfLastChildren" style={{ textAlign: 'left', fontSize: '20px' }}>
            วันเกิดบุตรคนสุดท้าย
          </label>
          <Form.Item name="birthDateOfLastChildren">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <div style={{ textAlign: 'left', fontSize: '20px', textAlignLast: 'center' }}>อายุบุตรคนสุดท้าย</div>
          <div>
            <span style={{ fontSize: '20px' }}> {yearAgeOfLastChild} ปี </span>
            <span style={{ fontSize: '20px' }}> {monthAgeOfLastChild} เดือน</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <label for="nest-messages_beforePregWeight" style={{ textAlign: 'left', fontSize: '20px' }}>
            น้ำหนักก่อนตั้งครรภ์ (กิโลกรัม)
          </label>
          <Form.Item name="beforePregWeight">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <label for="nest-messages_beforePregHeight" style={{ textAlign: 'left', fontSize: '20px' }}>
            ส่วนสูง (เซนติเมตร)
          </label>
          <Form.Item name="beforePregHeight">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={8}>
          <div style={{ fontSize: '20px' }}>ค่า BMI ก่อนตั้งครรภ์</div>
          <div style={{ fontSize: '20px' }}>{!weight || !height ? '-' : (weight / height / height).toFixed(2)}</div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: '0 3em' }}>
          <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              อัพเดท
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default GetPregHis;
