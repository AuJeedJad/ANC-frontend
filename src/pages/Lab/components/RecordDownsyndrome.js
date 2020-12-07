import React from 'react';
import { Row, Col, Input, Button, Radio, Form } from 'antd';

const layout = {
  labelCol: { xs: 'auto' },
  wrapperCol: { xs: 'auto' },
};

const onFinish = (values) => {
  console.log(values);
};

function RecordDownsyndrome() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'start' }}
    >
      <Row style={{ width: '100%' }}>
        <Col xs={24}>
          <Row style={{ border: '1px solid lightgray', padding: '1em 0' }}>
            <Col xs={12} style={{ borderRight: '1px solid lightgrey', padding: '0 1em' }}>
              <Form.Item
                name="downsyndromeScreen"
                label={<label style={{ fontSize: '20px' }}>การคัดกรองดาวน์ซินโดรม</label>}
              >
                <Radio.Group name="downsyndromeScreen" defaultValue={null}>
                  <Radio value={true} style={{ fontSize: '20px' }}>
                    คัดกรองดาวน์ซินโดรม
                  </Radio>
                  <Radio value={false} style={{ fontSize: '20px' }}>
                    ไม่ได้คัดกรองดาวน์ซินโดรม
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="riskEvaluate"
                label={<label style={{ fontSize: '20px' }}>ความเสี่ยง</label>}
                style={{ justifyContent: 'flex-start' }}
              >
                <Radio.Group name="riskEvaluate" defaultValue={null}>
                  <Radio value={'High'} style={{ fontSize: '20px' }}>
                    เสี่ยงสูง
                  </Radio>
                  <Radio value={'Low'} style={{ fontSize: '20px' }}>
                    เสี่ยงต่ำ
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="amniocentesis" label={<label style={{ fontSize: '20px' }}>ผลตรวจการเจาะน้ำคร่ำ</label>}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: '0 1em' }}>
              <Row style={{ width: '100%' }}>
                <Col xs={24}>
                  <Form.Item name="otherLabResult" label={<label style={{ fontSize: '20px' }}>ผลตรวจอื่นๆ</label>}>
                    <Input.TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{ width: '100%' }}>
                <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
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
        </Col>
      </Row>
    </Form>
  );
}

export default RecordDownsyndrome;
