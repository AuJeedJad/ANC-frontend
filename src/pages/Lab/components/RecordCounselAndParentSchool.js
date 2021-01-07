import React, { useContext, useEffect } from 'react';
import { Row, Col, Button, Form, DatePicker, notification } from 'antd';
import axios from 'axios';
import CurrentPregContext from '../../../context/CurrentPregContext';
import moment from 'moment';

const layout = {
  labelCol: { xs: 14 },
  wrapperCol: { xs: 12 },
};

function RecordCounselAndParentSchool() {
  const [form] = Form.useForm();
  const { mother } = useContext(CurrentPregContext);

  useEffect(() => {
    axios
      .get(`/currentPregnancy/${mother.currentPregId}`)
      .then((res) => {
        form.setFieldsValue({
          coupleCounselingDate1: res.data.currentPregnancy.coupleCounselingDate1
            ? moment(res.data.currentPregnancy.coupleCounselingDate1)
            : null,
          coupleCounselingDate2: res.data.currentPregnancy.coupleCounselingDate2
            ? moment(res.data.currentPregnancy.coupleCounselingDate2)
            : null,
          parentSchoolDate1: res.data.currentPregnancy.coupleCounselingDate2
            ? moment(res.data.currentPregnancy.parentSchoolDate1)
            : null,
          parentSchoolDate2: res.data.currentPregnancy.coupleCounselingDate2
            ? moment(res.data.currentPregnancy.parentSchoolDate2)
            : null,
        });
      })
      .catch((err) => {});
  }, []);

  const onFinish = (values) => {
    console.log(values);
    axios
      .post('/currentPregnancy/coupleCounselAndParentSchool', {
        curPregId: mother.currentPregId,
        coupleCounselingDate1: values.coupleCounselingDate1.toDate(),
        coupleCounselingDate2: values.coupleCounselingDate2.toDate(),
        parentSchoolDate1: values.parentSchoolDate1.toDate(),
        parentSchoolDate2: values.parentSchoolDate2.toDate(),
      })
      .then((res) => {
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
        borderTop: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'start',
      }}
    >
      <Row style={{ width: '100%' }}>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <h2 style={{ textAlign: 'start', margin: '0' }}>การให้คำปรึกษาแบบคู่</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Item
                name="coupleCounselingDate1"
                label={<label style={{ fontSize: '20px' }}>ได้รับก่อนตรวจเลือด วันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                name="coupleCounselingDate2"
                label={<label style={{ fontSize: '20px' }}>ได้รับหลังตรวจเลือด วันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <h2 style={{ textAlign: 'start', margin: '0' }}>การเข้าร่วมกิจกรรมโรงเรียนพ่อแม่</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Item
                name="parentSchoolDate1"
                label={<label style={{ fontSize: '20px' }}>ครั้งที่1 เมื่อวันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                name="parentSchoolDate2"
                label={<label style={{ fontSize: '20px' }}>ครั้งที่2 เมื่อวันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
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

export default RecordCounselAndParentSchool;
