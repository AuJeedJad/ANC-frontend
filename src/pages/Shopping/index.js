import { Card, Col, Rate, Row, Tabs, Typography } from 'antd';
import React from 'react';

function Shopping() {
  const { TabPane } = Tabs;
  const { Title } = Typography;

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <Row justify="center">
        <Col span={16} style={{ margin: 16 }}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<label style={{ fontSize: 20 }}>เสื้อผ้าสำหรับหญิงตั้งครรภ์</label>} key="1">
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="http://dg.lnwfile.com/pvmvtf.jpg" />}
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0001
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={5} />
                    <Title level={4} style={{ margin: 0 }}>
                      350.00 บาท
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="http://dg.lnwfile.com/146peq.jpg" />}
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0002
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={4} />
                    <Title level={4} style={{ margin: 0 }}>
                      390.00 บาท
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://dg.lnwfile.com/joayr6.jpg" />}
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0003
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={5} />
                    <Title level={4} type="danger" style={{ margin: 0 }}>
                      สินค้าหมด
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://dg.lnwfile.com/adi04g.jpg" />}
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0004
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={4} />
                    <Title level={4} style={{ margin: 0 }}>
                      420.00 บาท
                    </Title>
                  </Card>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://dg.lnwfile.com/opr6ak.jpg" />}
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0005
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={3} />
                    <Title level={4} style={{ margin: 0 }}>
                      390.00 บาท
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://dg.lnwfile.com/qt47yz.jpg" />}
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0006
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={3} />
                    <Title level={4} style={{ margin: 0, color: 'salmon' }}>
                      240.00 บาท
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://dg.lnwfile.com/0i9h74.jpg" style={{ maxHeight: 360 }} />}
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0007
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={3} />
                    <Title level={4} style={{ margin: 0, color: 'salmon' }}>
                      350.00 บาท
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://dg.lnwfile.com/9gu3mm.jpg"
                        style={{ minHeight: 360, objectFit: 'cover' }}
                      />
                    }
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า D0008
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      ชุดนอน+ให้นม
                    </Title>
                    <Rate disabled defaultValue={3} />
                    <Title level={4} style={{ margin: 0 }}>
                      490.00 บาท
                    </Title>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab={<label style={{ fontSize: 20 }}>ชุดชั้นในคนท้อง</label>} key="2">
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://dg.lnwfile.com/nb3vy8.jpg"
                        style={{ minHeight: 360, objectFit: 'cover' }}
                      />
                    }
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า U0001
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      กางเกงในสำหรับคนท้อง
                    </Title>
                    <Rate disabled defaultValue={5} />
                    <Title level={4} style={{ margin: 0 }}>
                      350.00 บาท
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://dg.lnwfile.com/a4csf2.jpg"
                        style={{ minHeight: 360, objectFit: 'cover' }}
                      />
                    }
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า U0002
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      กางเกงชั้นในลายการ์ตูน
                    </Title>
                    <Rate disabled defaultValue={4} />
                    <Title level={4} style={{ margin: 0 }}>
                      390.00 บาท
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://dg.lnwfile.com/fw8jn4.jpg"
                        style={{ minHeight: 360, objectFit: 'cover' }}
                      />
                    }
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า U0003
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      กางเกงชั้นในเอวต่ำ
                    </Title>
                    <Rate disabled defaultValue={5} />
                    <Title level={4} type="danger" style={{ margin: 0 }}>
                      สินค้าหมด
                    </Title>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="http://dg.lnwfile.com/ucj0ps.jpg"
                        style={{ minHeight: 360, objectFit: 'cover' }}
                      />
                    }
                  >
                    <Title level={5} style={{ margin: 0 }}>
                      รหัสสินค้า U0004
                    </Title>
                    <Title level={3} style={{ margin: 0 }}>
                      เสื้อชั้นในเปิดให้นมด้านบน
                    </Title>
                    <Rate disabled defaultValue={4} />
                    <Title level={4} style={{ margin: 0 }}>
                      490.00 บาท
                    </Title>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}

export default Shopping;
