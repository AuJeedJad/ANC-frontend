import React from 'react';
import { Row, Col, Typography, Button, Form, Checkbox } from 'antd';

const { Title } = Typography;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

function MotherReport() {
  return (
    <>
      <Row justify="center">
        <Col
          span={8}
          style={{
            // backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '35px',
            marginBottom: '20px',
          }}
        >
          <Title level={3} style={{ marginBottom: 0 }}>
            GA: 24 WEEKS
          </Title>
          <textarea rows="8" cols="70"></textarea>
        </Col>
        <Col
          span={8}
          style={{
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25px',
            marginBottom: '20px',
          }}
        >
          <Title level={3} style={{ marginBottom: 0 }}>
            ความผิดปกติที่ต้องให้ความสนใจ
          </Title>
          <textarea rows="5" cols="70"></textarea>
          <Button
            style={{
              marginTop: '3%',
              borderRadius: '50px',
              marginLeft: '45%',
              backgroundColor: 'var(--thirdary-color)',
              color: 'var(--secondaryDarkest-color)',
              border: '3px solid var(--secondaryDarkest-color)',
              fontWeight: '900',
              fontSize: '14px',
            }}
          >
            {' '}
            แก้ไขความผิดปกตืที่สนใจ{' '}
          </Button>
        </Col>
        <Col
          span={8}
          style={{
            // backgroundColor: 'green',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '35px',
            marginBottom: '20px',
          }}
        >
          <Title level={3} style={{ marginBottom: 0 }}>
            CORRECTED
          </Title>
          <textarea rows="8" cols="70"></textarea>
        </Col>
        <Col span={7}>
          <Button
            style={{
              borderRadius: '50px',
              width: '90%',
              marginTop: '25px',
              backgroundColor: 'var(--thirdary-color)',
              color: 'var(--secondaryDarkest-color)',
              border: '3px solid var(--secondaryDarkest-color)',
              fontWeight: '900',
              fontSize: '14px',
            }}
          >
            ผลตรวจห้องปฎิบัติการ
          </Button>
        </Col>
        <Col span={7}>
          <Button
            style={{
              borderRadius: '50px',
              width: '90%',
              marginTop: '25px',
              backgroundColor: 'var(--thirdary-color)',
              color: 'var(--secondaryDarkest-color)',
              border: '3px solid var(--secondaryDarkest-color)',
              fontWeight: '900',
              fontSize: '14px',
            }}
          >
            บริการตามช่วงอายุ
          </Button>
        </Col>
        <Col span={7}>
          <Button
            style={{
              borderRadius: '50px',
              width: '90%',
              marginTop: '25px',
              backgroundColor: 'var(--thirdary-color)',
              color: 'var(--secondaryDarkest-color)',
              border: '3px solid var(--secondaryDarkest-color)',
              fontWeight: '900',
              fontSize: '14px',
            }}
          >
            ตรวจสุขภาพช่องปาก
          </Button>
        </Col>
        <Row>
          <Col span={15}>
            <Title level={3} style={{ marginBottom: 0, marginTop: '30px' }}>
              ผลตรวจครรภ์ล่าสุด
            </Title>
            <textarea rows="8" cols="150"></textarea>
          </Col>
          <Col span={9}>
            <Title level={3} style={{ marginBottom: 0, marginTop: '30px' }}>
              การวินิจฉัยและรักษาที่เคยได้รับ
            </Title>
            <textarea rows="6" cols="90"></textarea>
            <Button
              style={{
                borderRadius: '50px',
                width: '90%',
                marginTop: '2%',
                backgroundColor: 'var(--thirdary-color)',
                color: 'var(--secondaryDarkest-color)',
                border: '3px solid var(--secondaryDarkest-color)',
                fontWeight: '900',
                fontSize: '14px',
              }}
            >
              {' '}
              บันทึกตรวจครรภ์วันนี้{' '}
            </Button>
          </Col>
        </Row>
        <Col span={24}>
          <Title level={2} style={{ marginBottom: '10px', marginTop: '30px' }}>
            ประวัติการตั้งครรภ์
          </Title>
          <Form.Item style={{ display: 'inline-flex' }}>
            <Checkbox.Group onChange={onChange}>
              <Row justify="center" style={{ width: '100%' }}>
                <Col>
                  <Checkbox value="A" style={{ fontSize: '25px', marginRight: '10px' }}>
                    เบาหวาน
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="B" style={{ fontSize: '25px', marginRight: '10px' }}>
                    ความดันโลหิตสูง
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="C" style={{ fontSize: '25px', marginRight: '10px' }}>
                    โรคหัวใจ
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="D" style={{ fontSize: '25px', marginRight: '10px' }}>
                    ไทรอยต์
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="E" style={{ fontSize: '25px', marginRight: '10px' }}>
                    โรคโลหิตจาง
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="F" style={{ fontSize: '25px', marginRight: '10px' }}>
                    อื่นๆ ...................
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Col>
        <Row>
          <Col span={24}>
            <Title level={2} style={{ marginBottom: '5px', marginTop: '5px' }}>
              ประวัติผ่าคลอด
            </Title>
          </Col>
          <Col span={24} style={{ marginTop: '-4%' }}>
            <Title level={3} style={{ display: 'inline-flex', marginRight: '20px' }}>
              ครรภ์ที่ ...................
            </Title>
            <Title level={3} style={{ display: 'inline-flex', marginRight: '20px' }}>
              สาเหตุ ....................
            </Title>
            <Title level={3} style={{ display: 'inline-flex', marginRight: '20px' }}>
              เมื่อ พ.ศ. ...................
            </Title>
            <Title level={3} style={{ display: 'inline-flex', marginRight: '20px' }}>
              โรงพยาบาล ....................
            </Title>
          </Col>
        </Row>
        <Col span={24}>
          <Title level={2} style={{ marginBottom: '5px', marginTop: '10px' }}>
            ประวัติแพ้ยา
          </Title>
        </Col>
        <Col span={24} style={{ marginTop: '-2%' }}>
          <Title level={3} style={{ display: 'inline-flex', marginRight: '20px' }}>
            ชื่อยา ...................
          </Title>
          <Title level={3} style={{ display: 'inline-flex', marginRight: '20px' }}>
            อาการที่แพ้ ....................
          </Title>
        </Col>
        <Col span={24}>
          <Title level={2} style={{ marginBottom: '10px', marginTop: '15px' }}>
            ประวัติการตั้งครรภ์
          </Title>
          <Form.Item style={{ display: 'inline-flex' }}>
            <Checkbox.Group onChange={onChange}>
              <Row justify="center" style={{ width: '100%' }}>
                <Col>
                  <Checkbox value="A" style={{ fontSize: '25px', marginRight: '5px' }}>
                    เบาหวาน
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="B" style={{ fontSize: '25px', marginRight: '5px' }}>
                    ความดันโลหิตสูง
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="C" style={{ fontSize: '25px', marginRight: '5px' }}>
                    โรคหัวใจ
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="D" style={{ fontSize: '25px', marginRight: '5px' }}>
                    ไทรอยต์
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="E" style={{ fontSize: '25px', marginRight: '5px' }}>
                    โรคโลหิตจาง
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="F" style={{ fontSize: '25px', marginRight: '5px' }}>
                    โรคโลหิตจาง
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="G" style={{ fontSize: '25px', marginRight: '5px' }}>
                    อื่นๆ ...................
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default MotherReport;
