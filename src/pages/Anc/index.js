import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { notification } from 'antd';
// import './IndexAnc.css';
import { Col, Row, Typography, Form, Input, Table, Button, Empty, Checkbox } from 'antd';
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import CurrentPregContext from '../../context/CurrentPregContext';
import UltrasoundResult from '../../components/UltrasoundResult';
import { formatFullThai } from '../../services/dateFormat';

const { Title } = Typography;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const data = [
  {
    key: '1',
    examDate: 'John Brown',
    urineTest: 32,
    bloodPressure: 'New York No. 1 Lake Park',
    uterusSize: ['nice', 'developer'],
    childPosture: ['nice', 'developer'],
    heartSound: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Anc() {
  const [ancs, setAncs] = useState([]);
  const [note, setNote] = useState('');
  const { mother } = useContext(CurrentPregContext);
  const [form] = Form.useForm();
  const [ancId, setAncId] = useState(null);
  const [ultrasoundResult, setUltrasoundResult] = useState({});

  function onChangeNote(e) {
    setNote(e.target.value);
  }

  function onClickNote() {
    axios
      .patch(`/currentPregnancy/note/${mother.currentPregId}`, { note: note })
      .then((res) => {
        notification.success({
          description: `แก้ไข note สำเร็จ`,
        });
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: `${err}`,
        });
      });
  }

  const data = ancs.map((item, index) => ({
    key: index,
    examDate: item.examDate,
    weight: item.weight,
    urineTest: item.urineTest,
    bloodPressure: item.bloodPressure,
    uterusSize: item.uterusSize,
    childPosture: item.childPosture,
    heartSound: item.heartSound,
    ultrasoundResult: item.id,
  }));

  useEffect(() => {
    axios
      .get(`/anc?curPregId=${mother.currentPregId}`)
      .then((res) => {
        setAncs(res.data.ancs);
        form.setFieldsValue({
          form,
        });
      })
      .catch((err) => {});

    axios
      .get(`/currentPregnancy/${mother.currentPregId}`)
      .then((res) => {
        setNote(res.data.currentPregnancy.note);
        form.setFieldsValue({
          form,
        });
      })
      .catch((err) => {});

    axios
      .get(`/ultrasoundResult/?curPregId=${mother.currentPregId}`)
      .then((res) => {
        setUltrasoundResult(res.data.ultrasoundResult);
      })
      .catch((err) => {});
  }, []);

  const columns = [
    {
      title: 'วันที่ตรวจ',
      dataIndex: 'examDate',
      key: 'examDate',
      render: (text) => formatFullThai(text),
    },
    {
      title: 'น้ำหนัก ก.ก',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'การตรวจปัสสาวะ',
      dataIndex: 'urineTest',
      key: 'urineTest',
    },
    {
      title: 'ความดันโลหิต ม.ม.ปรอท',
      dataIndex: 'bloodPressure',
      key: 'bloodPressure',
    },
    {
      title: 'ขนาดของมดลูก (cm)',
      dataIndex: 'uterusSize',
      key: 'uterusSize',
    },
    {
      title: 'ท่าเด็กส่วนนำ/การลง',
      dataIndex: 'childPosture',
      key: 'childPosture',
    },
    {
      title: 'เสียงหัวใจเด็ก',
      dataIndex: 'heartSound',
      key: 'heartSound',
    },
    {
      title: 'ดูรูปอุตร้าซาวต์',
      dataIndex: 'ultrasoundResult',
      key: 'ultrasoundResult',
      render: (text, record) => (
        <Button
          type="primary"
          style={{ borderRadius: '50px' }}
          onClick={() => {
            setAncId(record.ultrasoundResult);
          }}
        >
          <SearchOutlined />
        </Button>
      ),
    },
  ];

  return (
    <>
      {ancId ? <UltrasoundResult ancId={ancId} setAncId={setAncId} /> : null}
      <Row justify="center">
        <Col
          xs={21}
          md={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <Title level={3} style={{ textDecoration: 'underline' }}>
            ผลการตรวจอัลตร้าซาวน์วันที่
          </Title>

          {/* <Form form={form}>
            <Row>
              <Form.Item label="BPD" name="BPD" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
              <Form.Item label="FL" name="FL" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
              <Form.Item label="HC" name="HC" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item label="AC" name="AC" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
              <Form.Item label="AFI" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
              <Form.Item label="Placenta" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item label="EFW" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
              <Form.Item label="อายุครรภ์" name="description" style={{ display: 'inline-flex', marginRight: 12 }}>
                <Input />
              </Form.Item>
            </Row>
          </Form> */}
          <Row>
            <Title level={5} style={{ display: 'inline-flex', marginRight: '20px' }}>
              BPD. {ultrasoundResult.BPD}
            </Title>
            <Title level={5} style={{ display: 'inline-flex', margin: '0' }}>
              FL. {ultrasoundResult.FL}
            </Title>
          </Row>
          <Row>
            <Title level={5} style={{ display: 'inline-flex', marginRight: '20px' }}>
              HC. {ultrasoundResult.HC}
            </Title>
            <Title level={5} style={{ display: 'inline-flex', margin: '0' }}>
              AC. {ultrasoundResult.AC}
            </Title>
          </Row>
          <Row>
            <Title level={5} style={{ display: 'inline-flex', marginRight: '20px' }}>
              AFI. {ultrasoundResult.AFI}
            </Title>
            <Title level={5} style={{ display: 'inline-flex', margin: '0' }}>
              Placenta. {ultrasoundResult.placenta}
            </Title>
          </Row>
          <Row>
            <Title level={5} style={{ display: 'inline-flex', marginRight: '20px' }}>
              EFW. {ultrasoundResult.EFW}
            </Title>
            <Title level={5} style={{ display: 'inline-flex', margin: '0' }}>
              อายุครรภ์. {ultrasoundResult.gestationalAge} สัปดาห์
            </Title>
          </Row>
        </Col>
        <Col
          xs={21}
          md={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
            marginBottom: '20px',
          }}
        >
          <Title level={3} style={{ textDecoration: 'underline', textAlign: 'center' }}>
            Note
          </Title>
          {/* <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="รายละเอียด"
            name="description"
            style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
          >
            <Input />
          </Form.Item> */}
          <textarea rows="5" cols="50" value={note} onChange={onChangeNote}></textarea>
          <Button type="primary" onClick={onClickNote} style={{ borderRadius: '50px', marginTop: '10px' }}>
            แก้ไข Note
          </Button>
        </Col>
        <Col span={21} style={{ display: 'flex', justifyContent: 'center' }}>
          <Table columns={columns} dataSource={data} pagination={false} style={{ width: '100%', marginTop: '20px' }} />
        </Col>
        <Col
          span={21}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '15px',
            marginBottom: '20px',
          }}
        >
          <Button type="primary" style={{ borderRadius: '50px' }}>
            เพิ่มบันทึกผลการตรวจวันนี้ <PlusCircleOutlined />
          </Button>
        </Col>
        <Row
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Col xs={21} md={7}>
            <Empty />
          </Col>
          <Col xs={21} md={7}>
            <Empty />
          </Col>
          <Col xs={21} md={7}>
            <Title level={3} style={{ textDecoration: 'underline', textAlign: 'center' }}>
              คัดกรอง
            </Title>
            <Form>
              <Form.Item
                label="เบาหวาน"
                name="isDiabetes"
                style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="ตรวจพิเศษอื่นๆ"
                name="other"
                style={{ display: 'inline-flex', marginRight: 12, width: '80%', alignItems: 'center' }}
              >
                <Input />
              </Form.Item>
              <Form.Item label="รายละเอียด" style={{ display: 'inline-flex' }}>
                <Checkbox.Group onChange={onChange}>
                  <Row justify="center" style={{ width: '100%' }}>
                    <Col>
                      <Checkbox value="A">ปกติ</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="B">สั้น</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="C">บุ๋ม</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="C">บอด</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Anc;
