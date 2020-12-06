import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Image, Input, notification, Row, Select, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UserContext from '../../../context/UserContext';

function PregnantMotherProfile() {
  const { Title } = Typography;
  const { Option } = Select;

  const provinceData = [
    'กรุงเทพมหานคร',
    'สมุทรปราการ',
    'นนทบุรี',
    'ปทุมธานี',
    'พระนครศรีอยุธยา',
    'อ่างทอง',
    'ลพบุรี',
    'สิงห์บุรี',
    'ชัยนาท',
    'สระบุรี',
    'ชลบุรี',
    'ระยอง',
    'จันทบุรี',
    'ตราด',
    'ฉะเชิงเทรา',
    'ปราจีนบุรี',
    'นครนายก',
    'สระแก้ว',
  ];

  const user = useContext(UserContext);
  const [form] = Form.useForm();
  const [mother, setMother] = useState({});
  const [provinces, setProvinces] = useState(provinceData[0]);

  useEffect(() => {
    axios.get(`/motherProfile?id=${user.id}`).then((res) => {
      if (res.data.MotherAddress === null) {
        form.setFieldsValue({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          birthDate: res.data.birthDate,
          idCard: res.data.idCard,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
        });
      } else {
        form.setFieldsValue({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          birthDate: res.data.birthDate,
          idCard: res.data.idCard,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          address: res.data.MotherAddress.address,
          road: res.data.MotherAddress.road,
          subDistrict: res.data.MotherAddress.subDistrict,
          district: res.data.MotherAddress.district,
          province: res.data.MotherAddress.province === '' ? provinces : res.data.MotherAddress.province,
          zipCode: res.data.MotherAddress.zipCode,
        });
      }
      setMother(res.data);
    });
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
    axios
      .post('/motherProfile', {
        firstName: values.firstName,
        lastName: values.lastName,
        birthDate: values.birthDate,
        phoneNumber: values.phoneNumber,
        email: values.email,
        address: values.address,
        road: values.road,
        subDistrict: values.subDistrict,
        district: values.district,
        province: values.province,
        zipCode: values.zipCode,
        motherId: mother.id,
      })
      .then((res) => {
        notification.success({
          description: 'แก้ไขข้อมูลสำเร็จ',
        });
      });
  };

  const handleProvinceChange = (value) => {
    setProvinces(provinceData[value]);
  };

  return (
    <>
      <Row justify="center">
        <Col span={14}>
          <Row>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                ประวัติส่วนตัว - หญิงตั้งครรภ์
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={4}>HN : 12345</Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item label="ชื่อ" name="firstName" rules={[{ required: true }]} style={{ marginBottom: '8px' }}>
                  <Input placeholder="ชื่อ" />
                </Form.Item>
                <Form.Item label="นามสกุล" name="lastName" rules={[{ required: true }]} style={{ marginBottom: '8px' }}>
                  <Input placeholder="นามสกุล" />
                </Form.Item>
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="วัน/เดือน/ปีเกิด"
                    name="birthDate"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 auto' }}
                  >
                    <Input type="date" />
                  </Form.Item>
                  <Form.Item
                    label="เลขบัตรประชาชน"
                    name="idCard"
                    style={{ display: 'inline-block', width: 'calc(70% - 8px)', margin: '0 8px' }}
                  >
                    <Input placeholder="เลขบัตรประชาชน 13 หลัก" disabled />
                  </Form.Item>
                </Form.Item>
                <Form.Item style={{ marginBottom: '8px' }}>
                  <Form.Item
                    label="เบอร์โทรศัพท์"
                    name="phoneNumber"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 auto' }}
                  >
                    <Input placeholder="0XX-XXX-XXXX" />
                  </Form.Item>
                  <Form.Item
                    label="อีเมล"
                    name="email"
                    style={{ display: 'inline-block', width: 'calc(70% - 8px)', margin: '0 8px' }}
                  >
                    <Input type="email" placeholder="abc@mail.com" />
                  </Form.Item>
                </Form.Item>
                <Row>
                  <Col span={24}>
                    <Title level={3} style={{ textDecoration: 'underline' }}>
                      ที่อยู่ปัจจุบัน
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Form.Item style={{ marginBottom: '8px' }}>
                        <Form.Item
                          label="บ้านเลขที่"
                          name="address"
                          style={{
                            display: 'inline-block',
                            width: 'calc(20% - 8px)',
                            margin: '0 8px 0 0',
                          }}
                        >
                          <Input placeholder="กรุณากรอกข้อมูล" />
                        </Form.Item>
                        <Form.Item
                          label="ถนน"
                          name="road"
                          style={{
                            display: 'inline-block',
                            width: 'calc(30% - 8px)',
                            margin: '0 8px 0 0',
                          }}
                        >
                          <Input placeholder="กรุณากรอกข้อมูล" />
                        </Form.Item>
                        <Form.Item
                          label="แขวง/ตำบล"
                          name="subDistrict"
                          style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px 0 0' }}
                        >
                          <Input placeholder="กรุณากรอกข้อมูล" />
                        </Form.Item>
                        <Form.Item
                          label="เขต/อำเภอ"
                          name="district"
                          style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px 0 0' }}
                        >
                          <Input placeholder="กรุณากรอกข้อมูล" />
                        </Form.Item>
                        <Form.Item
                          label="จังหวัด"
                          name="province"
                          style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px 0 0' }}
                        >
                          <Select placeholder="เลือกจังหวัด" onChange={handleProvinceChange}>
                            {provinceData.map((province) => (
                              <Option key={province}>{province}</Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          label="รหัสไปรษณีย์"
                          name="zipCode"
                          style={{ display: 'inline-block', width: 'calc(20% - 8px)', margin: '0' }}
                        >
                          <Input placeholder="รหัสไปรษณีย์" />
                        </Form.Item>
                      </Form.Item>
                      <Form.Item style={{ marginTop: 16, marginBottom: 0 }}>
                        <Row justify="end">
                          <Col>
                            <Button type="primary" style={{ width: '150px', marginRight: '8px' }} htmlType="submit">
                              บันทึก
                            </Button>
                            <Button type="primary" style={{ width: '150px' }} danger>
                              ยกเลิก
                            </Button>
                          </Col>
                        </Row>
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Upload name="logo" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default PregnantMotherProfile;
