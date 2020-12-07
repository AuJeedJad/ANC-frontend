import React from 'react';
import { Row, Col, Button, Form, DatePicker, InputNumber, Select } from 'antd';

const layout = {
  labelCol: { xs: 'auto' },
  wrapperCol: { xs: 'auto' },
};

const onFinish = (values) => {
  console.log(values);
};

function RecordVaccine() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        borderTop: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
      }}
    >
      <Row>
        <Col xs={24}>
          <h2 style={{ textAlign: 'start', margin: '0' }}>การฉีดวัคซีนที่มีส่วนประกอบของวัคซีนป้องกันโรคบาดทยัก</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Item
            name="tetanusCountBefore"
            label={<label style={{ fontSize: '20px' }}>ก่อนตั้งครรภ์เคยฉีดวัคซีนกี่ครั้ง</label>}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item name="lastTetanusHxDate" label={<label style={{ fontSize: '20px' }}>ครั้งสุดท้ายวันที่</label>}>
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={18}>
          <Form.Item
            name="tetausDosePefered"
            label={<label style={{ fontSize: '20px' }}>ปริมาณวัคซีนในระหว่างตั้งครรภ์</label>}
          >
            <Select>
              <Select.Option value="3Does">รับใหม่ 3 เข็ม</Select.Option>
              <Select.Option value="BootsDose">เข็มกระตุ้น</Select.Option>
              <Select.Option value="NoNeed">ไม่ต้องรับเพิ่ม</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={8}>
          <Form.Item name="firstTetanusDate" label={<label style={{ fontSize: '20px' }}>ครั้งที่ 1 วันที่</label>}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={10}>
          <Form.Item name="firstTDPType" label={<label style={{ fontSize: '20px' }}>ชนิด</label>}>
            <Select>
              <Select.Option value="TT">บาดทะยัก</Select.Option>
              <Select.Option value="dT">บาดทะยักและคอตีบ</Select.Option>
              <Select.Option value="Tdap">บาดทะยัก คอตีบ และไอกรน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={8}>
          <Form.Item name="secondTetanusDate" label={<label style={{ fontSize: '20px' }}>ครั้งที่ 2 วันที่</label>}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={10}>
          <Form.Item name="secondTDPType" label={<label style={{ fontSize: '20px' }}>ชนิด</label>}>
            <Select>
              <Select.Option value="TT">บาดทะยัก</Select.Option>
              <Select.Option value="dT">บาดทะยักและคอตีบ</Select.Option>
              <Select.Option value="Tdap">บาดทะยัก คอตีบ และไอกรน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={8}>
          <Form.Item name="thirdTetanusDate" label={<label style={{ fontSize: '20px' }}>ครั้งที่ 3 วันที่</label>}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col xs={10}>
          <Form.Item name="thirdTDPType" label={<label style={{ fontSize: '20px' }}>ชนิด</label>}>
            <Select>
              <Select.Option value="TT">บาดทะยัก</Select.Option>
              <Select.Option value="dT">บาดทะยักและคอตีบ</Select.Option>
              <Select.Option value="Tdap">บาดทะยัก คอตีบ และไอกรน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <h2 style={{ textAlign: 'start', margin: '0' }}>
                การฉีดวัคซีนป้องกันโรคไข้หวัดใหญ่ตามฤดูกาลเมื่ออายุครรภ์ 4 เดือนขึ้นไป ในช่วงรณรงค์
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={16}>
              <Form.Item
                name="influenzaDate"
                label={<label style={{ fontSize: '20px' }}>ฉีดวัคซีน 1 ครั้ง เมื่ออายุครรภ์4 เดือนขึ้นไป วันที่</label>}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col
              xs={8}
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: '0 3em' }}
            >
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
        </Col>
      </Row>
    </Form>
  );
}

export default RecordVaccine;
