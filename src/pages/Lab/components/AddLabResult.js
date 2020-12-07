import React from 'react';
import axios from '../../../config/axios';
import { Row, Col, Input, Button, Radio, Form, DatePicker, notification } from 'antd';
import moment from 'moment';

function AddLabResult() {
  const dateFormat = 'YYYY-MM-DD';

  const layout = {
    labelCol: { xs: 24 },
    wrapperCol: { xs: 24 },
  };

  const onFinish = (values) => {
    console.log(values);
    axios
      .post('/labResult', {
        curPregId: 2,
        role: values.role,
        createdAt: values.createdAt,
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
        border: '1px solid lightgray',
        width: '60%',
      }}
    >
      <Row style={{ width: '100%' }}>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <h1>ผลตรวจห้องปฏิบัติการ</h1>
            </Col>
          </Row>
          <Row>
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
          </Row>
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <Col xs={24} style={{ padding: '0 1em' }}>
              <Form.Item name="createdAt">
                <label for="nest-messages_createdAt" style={{ fontSize: '20px' }}>
                  วันที่ :{' '}
                </label>
                <DatePicker defaultValue={moment(new Date(), dateFormat)} style={{}} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
        <Col xs={24} style={{ padding: '0 1em' }}>
          <Row>
            <Col xs={24}>
              <h1>รายงานการตรวจเลือด</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
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
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row
                style={{
                  width: '100%',
                  padding: '0 1em',
                }}
              >
                <Col xs={24}>
                  <label for="nest-messages_pcr" style={{ textAlign: 'center', fontSize: '20px' }}>
                    PCR
                  </label>
                  <Form.Item name="pcr">
                    <Input />
                  </Form.Item>
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
                  <Form.Item
                    wrapperCol={{ ...layout.wrapperCol }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      padding: '30px 0 0 0',
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
        </Col>
      </Row>
    </Form>
  );
}

export default AddLabResult;
