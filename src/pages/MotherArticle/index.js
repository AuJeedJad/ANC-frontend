import React, { useState } from 'react';
import { Button, Card, Col, Divider, Image, Input, Row, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function MotherArticle() {
  const { Meta } = Card;
  const { Paragraph } = Typography;

  const tabListNoTitle = [
    {
      tab: 'เริ่มตั้งครรภ์',
      key: 'pregnancy',
    },
    {
      tab: 'ระหว่างตั้งครรภ์',
      key: 'during',
    },
    {
      tab: 'หลังคลอด',
      key: 'deliver',
    },
  ];

  const contentListNoTitle = {
    pregnancy: (
      <Row gutter={[8, 8]} style={{ width: '100%' }}>
        <Col xs={24} md={12} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <Image
                width={'100%'}
                src="https://www.parentsone.com/wp-content/uploads/2019/06/fetal-movement-in-pregnancy_11-80.jpg"
              />
            }
          >
            <Meta
              title="คุณแม่ต้องรู้! การนับลูกดิ้นเป็นสิ่งสำคัญสำหรับคุณแม่ตั้งครรภ์"
              description={
                <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'more' }}>
                  ในระหว่างการตั้งครรภ์นอกจากจะต้องดูแลเรื่องสุขภาพของคุณแม่แล้ว
                  สุขภาพของเจ้าตัวเล็กก็เป็นสิ่งสำคัญที่คุณแม่ต้องใส่ใจให้มาก
                  ซึ่งก็มีทั้งการอัลตร้าซาวด์โดยคุณหมอและคุณแม่ก็สามารถดูสุขภาพของลูกได้ง่ายๆ
                  จากการนับการดิ้นของลูกในครรภ์ค่ะ วันนี้เราจึงมีข้อมูลเกี่ยวกับการนับลูกดิ้นที่สำคัญๆ
                  มาฝากคุณแม่ทุกคนค่า
                </Paragraph>
              }
            />
            <Divider />
            <Row justify="space-between">
              <Col span={12}>
                <Input
                  placeholder={new Date().toDateString()}
                  prefix={<ClockCircleOutlined />}
                  bordered={false}
                  disabled
                />
              </Col>
              <Col span={12}>
                <Button type="primary">
                  <Link to="/mother/article/1">Read More</Link>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <Image
                width={'100%'}
                src="https://www.frank.co.th/blog/wp-content/uploads/2020/08/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%99%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%A0%E0%B9%8C_Blog.jpg"
              />
            }
          >
            <Meta
              title="เมนูอาหารคนท้อง ที่มีประโยชน์ต่อคุณแม่ตั้งครรภ์"
              description={
                <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'more' }}>
                  จะดีแค่ไหน? เมื่อลูกน้อยกินอาหารที่ดีตั้งแต่อยู่ในครรภ์ เพื่อเสริมให้ลูกมีพัฒนาการ
                  พร้อมเรียนรู้ด้วยโภชนาการง่ายๆ เพราะอาหารสำหรับคนท้องจะมีผลต่อร่างกายของเด็กโดยตรง
                  เราจึงควรเลือกทานเมนูอาหารคนท้องที่เป็นประโยชน์ตั้งแต่เริ่มตั้งครรภ์ และเหมาะสมตามแต่ละไตรมาสด้วย
                  ไม่ว่าจะเป็นไตรมาสแรกจนถึงไตรมาสใกล้คลอด ก็จะทำให้ลูกน้อยได้รับสารอาหารครบถ้วนมากขึ้น
                  พร้อมช่วยบำรุงร่างกายคุณแม่ให้แข็งเเรง แถมเป็นเมนูอาหารลดความอ้วนอีกด้วยนะ
                  ว่าแล้วอาหารที่คนท้องควรกินจะมีอะไรบ้าง มาอ่านกันเลย...
                </Paragraph>
              }
            />
            <Divider />
            <Row justify="space-between">
              <Col span={12}>
                <Input
                  placeholder={new Date().toDateString()}
                  prefix={<ClockCircleOutlined />}
                  bordered={false}
                  disabled
                />
              </Col>
              <Col span={12}>
                <Button type="primary">
                  <Link to="/mother/article/2">Read More</Link>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
    during: (
      <Row gutter={[8, 8]} style={{ width: '100%' }}>
        <Col xs={24} md={12} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <Image
                width={'100%'}
                src="https://www.thaihealth.or.th/data/content/2019/04/48292/cms/newscms_thaihealth_c_adeglnoqux17.jpg"
              />
            }
          >
            <Meta
              title="กิจกรรมทางกายสำหรับหญิงตั้งครรภ์"
              description={
                <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'more' }}>
                  การออกกำลังกายเป็นเรื่องที่คุณแม่กำลังตั้งครรภ์ควรคำนึงถึง
                  เพราะถ้าคุณแม่ร่างกายแข็งแรงลูกน้อยในครรภ์ก็จะสุขภาพแข็งแรงไปด้วย ดังนั้น
                  คุณแม่จะต้องมีการเตรียมตัวและหาความรู้เพิ่มเติมเกี่ยวกับการออกกำลังกายด้วย
                </Paragraph>
              }
            />
            <Divider />
            <Row justify="space-between">
              <Col span={12}>
                <Input
                  placeholder={new Date().toDateString()}
                  prefix={<ClockCircleOutlined />}
                  bordered={false}
                  disabled
                />
              </Col>
              <Col span={12}>
                <Button type="primary">
                  <Link to="/mother/article/3">Read More</Link>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
    deliver: (
      <Row gutter={[8, 8]} style={{ width: '100%' }}>
        <Col xs={24} md={12} lg={6} xl={6}>
          <Card
            hoverable
            cover={
              <Image
                width={'100%'}
                src="https://www.thaihealth.or.th/data/content/2018/12/46237/cms/newscms_thaihealth_c_ajmnqstu2367.jpg"
              />
            }
          >
            <Meta
              title="ส่งเสริมหญิงตั้งครรภ์ใช้สมุดบันทึกสุขภาพแม่และเด็ก"
              description={
                <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'more' }}>
                  กรมอนามัย ส่งเสริมหญิงตั้งครรภ์ใช้สมุดบันทึกสุขภาพแม่และเด็ก เล่มสีชมพู
                  เป็นเครื่องมือในการดูแลสุขภาพตนเองและลูกในครรภ์ ช่วงตั้งครรภ์อย่างต่อเนื่องไปจนเด็กเข้าโรงเรียน
                </Paragraph>
              }
            />
            <Divider />
            <Row justify="space-between">
              <Col span={12}>
                <Input
                  placeholder={new Date().toDateString()}
                  prefix={<ClockCircleOutlined />}
                  bordered={false}
                  disabled
                />
              </Col>
              <Col span={12}>
                <Button type="primary">
                  <Link to="/mother/article/4">Read More</Link>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    ),
  };

  const [title, setTitle] = useState('article');

  return (
    <>
      <Card
        tabList={tabListNoTitle}
        onTabChange={(key) => setTitle(key)}
        style={{ width: '100%', minHeight: '100%', marginTop: 16 }}
      >
        {contentListNoTitle[title]}
      </Card>
    </>
  );
}

export default MotherArticle;
