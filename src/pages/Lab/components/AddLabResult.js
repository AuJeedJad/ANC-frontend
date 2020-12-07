import React from 'react';
import { Row, Col, Table, Input, Button, Radio, Form, DatePicker, InputNumber, Select } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

const layout = {
  labelCol: { xs: 11 },
  wrapperCol: { xs: 'auto' },
};

const onFinish = (values) => {
  console.log(values);
};

function AddLabResult() {
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
        width: '70%',
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
              <Radio.Group name="role" defaultValue={null}>
                <Radio value={'mother'} style={{ fontSize: '20px' }}>
                  หญิงตั้งครรภ์
                </Radio>
                <Radio value={'father'} style={{ fontSize: '20px' }}>
                  สามี
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <Col xs={12} style={{ padding: '0 1em' }}>
              <Form.Item name="idLabResultByRole" label={<label style={{ fontSize: '20px' }}>ครั้งที่</label>}>
                <InputNumber />
              </Form.Item>
            </Col>
            <Col xs={10} style={{ padding: '0 1em' }}>
              <Form.Item
                name="createdAt"
                label={<label style={{ fontSize: '20px' }}>วันที่</label>}
                labelCol={8}
                wrapperCol={16}
              >
                <DatePicker defaultValue={moment(new Date(), dateFormat)} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <h1>รายงานการตรวจเลือด</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ padding: '0 1em' }}>
              <Form.Item name="bloodGroup" label={<label style={{ fontSize: '20px' }}>Blood gr/Rh</label>}>
                <Input />
              </Form.Item>
              <Form.Item name="hctHb" label={<label style={{ fontSize: '20px' }}>Hct/Hb</label>}>
                <Input />
              </Form.Item>
              <Form.Item name="ofMcvMch" label={<label style={{ fontSize: '20px' }}>OF/MCV, MCH</label>}>
                <Input />
              </Form.Item>
              <Form.Item name="dcip" label={<label style={{ fontSize: '20px' }}>DCIP</label>}>
                <Input />
              </Form.Item>
              <Form.Item name="hbTyping" label={<label style={{ fontSize: '20px' }}>Hb typing</label>}>
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={12}
              style={{
                width: '100%',
                padding: '0 1em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Form.Item name="pcr" label={<label style={{ fontSize: '20px' }}>PCR</label>}>
                <Input />
              </Form.Item>
              <Form.Item name="hepatitisBVirus" label={<label style={{ fontSize: '20px' }}>ไวรัสตับอักเสบ บี</label>}>
                <Input />
              </Form.Item>
              <Form.Item name="syphilis" label={<label style={{ fontSize: '20px' }}>ซิฟิลิส</label>}>
                <Input />
              </Form.Item>
              <Form.Item name="hiv" label={<label style={{ fontSize: '20px' }}>ตรวจหาเชื้อเอช ไอ วี</label>}>
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{ ...layout.wrapperCol }}
                style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'end' }}
              >
                <Button type="primary" htmlType="submit">
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
