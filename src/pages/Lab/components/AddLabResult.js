import React, { useContext } from 'react';
import axios from '../../../config/axios';
import { Row, Col, Input, Button, Radio, Form, DatePicker, notification } from 'antd';
import CurrentPregContext from '../../../context/CurrentPregContext';

function AddLabResult({ labResult, setLabResult }) {
  const currentPregContext = useContext(CurrentPregContext);

  const layout = {
    labelCol: { xs: 24 },
    wrapperCol: { xs: 24 },
  };

  const onFinish = (values) => {
    console.log(values);
    console.log(typeof values.date);
    axios
      .post('/labResult', {
        curPregId: currentPregContext.mother.currentPregId,
        role: values.role,
        date: values.date.toDate(),
        bloodGroup: values.bloodGroup,
        hctHb: values.hctHb,
        ofMcvMch: values.ofMcvMch,
        dcip: values.dcip,
        hbTyping: values.hbTyping,
        pcr: values.pcr,
        hepatitisBVirus: values.hepatitisBVirus,
        syphilis: values.syphilis,
        hiv: values.hiv,
      })
      .then((res) => {
        notification.success({
          description: 'บันทึกข้อมูลสำเร็จ',
        });
        setLabResult({ active: false, type: null, no: null });
      });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Row style={{ width: '100%', backgroundColor: 'white' }}>
        <Col xs={24} style={{}}>
          <Row>
            <Col xs={24}>
              <h1 style={{ marginTop: '24px', fontWeight: 'bold' }}>ผลตรวจห้องปฏิบัติการ</h1>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={24}>
              <Form.Item name="role">
                <Radio.Group name="role" defaultValue={null}>
                  <Radio value="mother" style={{ fontSize: '20px' }}>
                    หญิงตั้งครรภ์
                  </Radio>
                  <Radio value="father" style={{ fontSize: '20px' }}>
                    สามี
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row> */}
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <Col xs={24} style={{ padding: '0 1em', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <label for="nest-messages_date" style={{ fontSize: '20px', paddingRight: '5px' }}>
                วันที่ :
              </label>
              <Form.Item name="date">
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%', backgroundColor: 'white' }}>
        <Col xs={24} style={{ padding: '0 1em' }}>
          <Row>
            <Col xs={24}>
              <h1>รายงานการตรวจเลือด</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <Row style={{ width: '100%' }}>
                <Col
                  xs={24}
                  style={{
                    width: '100%',
                    padding: '0 1em',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <label for="nest-messages_bloodGroup" style={{ textAlign: 'center', fontSize: '20px' }}>
                    Blood gr/Rh
                  </label>
                  <Form.Item name="bloodGroup">
                    <Input />
                  </Form.Item>
                  <label for="nest-messages_hctHb" style={{ textAlign: 'center', fontSize: '20px' }}>
                    Hct/Hb
                  </label>
                  <Form.Item name="hctHb">
                    <Input />
                  </Form.Item>
                  <label for="nest-messages_ofMcvMch" style={{ textAlign: 'center', fontSize: '20px' }}>
                    OF/MCV, MCH
                  </label>
                  <Form.Item name="ofMcvMch">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col xs={8}>
              <Row
                style={{
                  width: '100%',
                  padding: '0 1em',
                }}
              >
                <Col xs={24}>
                  <label for="nest-messages_dcip" style={{ textAlign: 'center', fontSize: '20px' }}>
                    DCIP
                  </label>
                  <Form.Item name="dcip">
                    <Input />
                  </Form.Item>
                  <label for="nest-messages_hbTyping" style={{ textAlign: 'center', fontSize: '20px' }}>
                    Hb typing
                  </label>
                  <Form.Item name="hbTyping">
                    <Input />
                  </Form.Item>
                  <label for="nest-messages_pcr" style={{ textAlign: 'center', fontSize: '20px' }}>
                    PCR
                  </label>
                  <Form.Item name="pcr">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col xs={8}>
              <Row
                style={{
                  width: '100%',
                  padding: '0 1em',
                }}
              >
                <Col xs={24}>
                  <label for="nest-messages_hepatitisBVirus" style={{ textAlign: 'center', fontSize: '20px' }}>
                    ไวรัสตับอักเสบ บี
                  </label>
                  <Form.Item name="hepatitisBVirus">
                    <Input />
                  </Form.Item>
                  <label for="nest-messages_syphilis" style={{ textAlign: 'center', fontSize: '20px' }}>
                    ซิฟิลิส
                  </label>
                  <Form.Item name="syphilis">
                    <Input />
                  </Form.Item>
                  <label for="nest-messages_hiv" style={{ textAlign: 'center', fontSize: '20px' }}>
                    ตรวจหาเชื้อเอช ไอ วี
                  </label>
                  <Form.Item name="hiv">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              width: '100%',
              padding: '0 1em',
            }}
          >
            <Col xs={24} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Form.Item
                wrapperCol={{ ...layout.wrapperCol }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  padding: '0 15px 0 0',
                }}
              >
                <Button
                  danger
                  htmlType="button"
                  onClick={() => setLabResult({ active: false, type: null, no: null })}
                  style={{
                    fontSize: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  ยกเลิก
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{ ...layout.wrapperCol }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    fontSize: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  บันทึก
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default AddLabResult;
