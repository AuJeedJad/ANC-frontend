import React from 'react';
import { Button, Col, Image, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

function Article2() {
  const { Title } = Typography;
  return (
    <>
      <Row justify="center" style={{ width: '100%', minHeight: '100%', marginTop: 32, marginBottom: 16 }}>
        <Col span={12}>
          <Title>ส่งเสริมหญิงตั้งครรภ์ใช้สมุดบันทึกสุขภาพแม่และเด็ก</Title>
          <Image
            width={'90%'}
            src="https://www.thaihealth.or.th/data/content/2018/12/46237/cms/newscms_thaihealth_c_ajmnqstu2367.jpg"
          />
          <Title level={3} style={{ marginTop: 8, textAlign: 'start' }}>
            กรมอนามัย ส่งเสริมหญิงตั้งครรภ์ใช้สมุดบันทึกสุขภาพแม่และเด็ก เล่มสีชมพู
            เป็นเครื่องมือในการดูแลสุขภาพตนเองและลูกในครรภ์ ช่วงตั้งครรภ์อย่างต่อเนื่องไปจนเด็กเข้าโรงเรียน
          </Title>
          <Title level={3} style={{ marginTop: 8, textAlign: 'start' }}>
            แพทย์หญิงพรรณพิมล วิปุลากร อธิบดีกรมอนามัย เปิดการสัมมนาวิชาการอนามัยแม่และเด็ก
            “สมุดบันทึกสุขภาพแม่และเด็กระดับนานาชาติ ครั้งที่ 11 พ.ศ.2561 ที่จัดขึ้น ณ โรงแรมมณเฑียร ริเวอร์ไซด์
            กรุงเทพฯ โดยกล่าวว่า การดูแลเด็กให้เกิดและเติบโตอย่างมีคุณภาพ
            เป็นเรื่องที่มีความสำคัญอย่างยิ่งในการพัฒนาประเทศในอนาคต
            ภายใต้นโยบายและยุทธศาสตร์การพัฒนาอนามัยเจริญพันธุ์แห่งชาติ ฉบับที่ 2 ระหว่างปี 2560-2569
            ว่าด้วยการส่งเสริมการเกิดและการเจริญเติบโตอย่างมีคุณภาพ กรมอนามัยได้ขับเคลื่อนนโยบายมหัศจรรย์ 1,000
            วันแรกแห่งชีวิต นับตั้งแต่เริ่มปฏิสนธิในครรภ์จนเด็กอายุ 2 ปี ซึ่งเป็นช่วงเวลาทองในการพัฒนาสมอง ระบบประสาท
            จะถูกพัฒนาสูงสุดในช่วงวัยนี้ ส่งผลต่อการเรียนรู้ที่มีประสิทธิภาพ โดยการดูแลส่งเสริมสุขภาพหญิงตั้งครรภ์
            ให้ได้รับสารอาหารครบถ้วนพอเพียง โดยเฉพาะไอโอดีน ธาตุเหล็กและโฟเลท ให้มีน้ำหนักขึ้นตามเกณฑ์ ไม่มีภาวะซีด
          </Title>
          <Title level={3} style={{ marginTop: 8, textAlign: 'start' }}>
            เมื่อทารกคลอดออกมาต้องได้กินนมแม่อย่างเดียว 6 เดือน หลัง 6 เดือน
            เด็กต้องได้รับอาหารเสริมตามวัยร่วมกับกระบวนการกระตุ้นพัฒนาการผ่านกิจวัตรประจำวัน ในรูปแบบ กิน กอด เล่น เล่า
            นอน ดูแลฟัน อย่างเหมาะสมจากพ่อแม่ ครูในศูนย์พัฒนาเด็กเล็กและโรงเรียนอนุบาล
            ท้องถิ่นชุมชนร่วมลงทุนในการส่งเสริมและสนับสนุนให้เด็กเจริญเติบโตเต็มศักยภาพและพัฒนาการสมวัย
            โดยใช้สมุดบันทึกสุขภาพแม่และเด็ก หรือสมุดสีชมพู เป็นเครื่องมือ
            โดยหญิงตั้งครรภ์ทุกคนจะได้รับสมุดบันทึกสุขภาพแม่และเด็กและคำแนะนำในการใช้
            เพื่อให้เกิดความรอบรู้ด้านสุขภาพและได้รับบริการอย่างครบถ้วน
          </Title>
          <Title level={3} style={{ marginTop: 8, textAlign: 'start' }}>
            ทั้งนี้ ประเทศไทยเริ่มใช้สมุดสีชมพู มาตั้งแต่ปี 2528 และปรับปรุงทุก 3 ปี
            ซึ่งกรมอนามัยได้มอบสมุดสีชมพูแก่หญิงตั้งครรภ์ในการเฝ้าระวังสุขภาพด้วยตนเองและเป็นเครื่องมือของหญิงตั้งครรภ์ในการดูแลสุขภาพและการเลี้ยงดูบุตร
            เพื่อให้มีสุขภาพแข็งแรงสมบูรณ์มีพัฒนาการสมวัย สร้างขีดความสามารถในการดูแลสุขภาพตนเอง
            ส่งผลให้เกิดการพัฒนาศักยภาพคนในทุกช่วงวัย รวมถึงการมีสุขภาพดีและการพัฒนาประเทศไทยอย่างมั่นคง มั่งคั่ง
            ยั่งยืน
          </Title>
          <Button danger>
            <Link to="/mother/article">ย้อนกลับ</Link>
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Article2;
