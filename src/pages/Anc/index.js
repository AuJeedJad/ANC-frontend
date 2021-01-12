import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { notification, Radio } from 'antd';
// import './IndexAnc.css';
import { Col, Row, Typography, Form, Input, Table, Button, Empty, Checkbox, InputNumber } from 'antd';
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import CurrentPregContext from '../../context/CurrentPregContext';
import UltrasoundResult from '../../components/UltrasoundResult';
import { formatFullThai } from '../../services/dateFormat';

const { Title } = Typography;

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

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
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const finishSpecialExamination = async (values) => {
    try {
      const exam = [
        {
          examination: 'DM',
          result: values.isDiabetes,
        },
        {
          examination: 'OTHER',
          result: values.other,
        },
        {
          examination: 'NIPPLE',
          result: values.nippleExam,
        },
      ];
      await axios.post(`/specialExamination/`, {
        exam,
        curPregId: mother.currentPregId,
      });

      notification.success({
        description: `แก้ไขสำเร็จ`,
      });
    } catch (err) {
      console.log(err);
      notification.error({
        description: `${err}`,
      });
    }
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      console.log(row);
      axios
        .patch(`/anc/${key}`, row)
        .then((res) => {
          notification.success({
            description: `บันทึกข้อมูลสำเร็จ`,
          });
        })
        .catch((err) => {
          console.log(err);
          notification.error({
            description: `${err}`,
          });
        });
      const newData = [...ancs];
      const index = newData.findIndex((item) => {
        return key === item.id;
      });

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setAncs(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setAncs(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const onChangeNote = (e) => {
    setNote(e.target.value);
  };

  const onClickNote = () => {
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
  };

  const data = ancs.map((item, index) => ({
    key: item.id,
    examDate: item.examDate,
    weight: item.weight,
    urineTest: item.urineTest,
    bloodPressure: item.bloodPressure,
    uterusSize: item.uterusSize,
    childPosture: item.childPosture,
    heartSound: item.heartSound,
    physicalExamination: item.physicalExamination,
    examBy: item.examBy,
    appointmentDate: item.appointmentDate,
    ultrasoundResult: item.id,
  }));

  const fecthUltrasoundResult = () => {
    axios
      .get(`/ultrasoundResult/?curPregId=${mother.currentPregId}`)
      .then((res) => {
        setUltrasoundResult(res.data.ultrasoundResult);
      })
      .catch((err) => {});
  };

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

    fecthUltrasoundResult();
  }, []);

  const columns = [
    {
      title: 'วันที่ตรวจ',
      dataIndex: 'examDate',
      key: 'examDate',
      width: '10%',
      render: (text) => formatFullThai(text),
    },
    {
      title: 'น้ำหนัก',
      dataIndex: 'weight',
      key: 'weight',
      width: '5%',
      editable: true,
    },
    {
      title: 'การตรวจปัสสาวะ',
      dataIndex: 'urineTest',
      key: 'urineTest',
      width: '10%',
      editable: true,
    },
    {
      title: 'ความดันโลหิต ม.ม.ปรอท',
      dataIndex: 'bloodPressure',
      key: 'bloodPressure',
      width: '5%',
      editable: true,
    },
    {
      title: 'ขนาดของมดลูก (cm)',
      dataIndex: 'uterusSize',
      key: 'uterusSize',
      width: '5%',
      editable: true,
    },
    {
      title: 'ท่าเด็กส่วนนำ/การลง',
      dataIndex: 'childPosture',
      key: 'childPosture',
      width: '10%',
      editable: true,
    },
    {
      title: 'เสียงหัวใจเด็ก',
      dataIndex: 'heartSound',
      key: 'heartSound',
      width: '5%',
      editable: true,
    },
    {
      title: 'การตรวจร่างกายและความผิดปกติที่พบ การวินิจฉัยและการรักษา',
      dataIndex: 'physicalExamination',
      key: 'physicalExamination',
      width: '20%',
      editable: true,
    },
    {
      title: 'ผู้ตรวจ',
      dataIndex: 'examBy',
      key: 'examBy',
      width: '10%',
      editable: true,
    },
    {
      title: 'วันนัดครั้งต่อไป',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
      width: '10%',
      editable: true,
    },
    {
      title: 'อัพเดท',
      dataIndex: 'operation',
      width: '5%',
      render: (_, record) => {
        const editable = isEditing(record);
        console.log(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              บันทึก
            </a>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            แก้ไข
          </a>
        );
      },
    },
    {
      title: 'ดูรูปอุตร้าซาวต์',
      dataIndex: 'ultrasoundResult',
      key: 'ultrasoundResult',
      width: '5%',
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
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <>
      {ancId ? (
        <UltrasoundResult ancId={ancId} setAncId={setAncId} fecthUltrasoundResult={fecthUltrasoundResult} />
      ) : null}
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
            ผลการตรวจอัลตร้าซาวน์
            {ultrasoundResult.examDate ? 'วันที่: ' + ultrasoundResult.examDate.toString().slice(0, 10) : null}
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
          {ultrasoundResult.examDate ? (
            <>
              <Row>
                <Title level={5} style={{ display: 'inline-flex', marginRight: '20px', width: '100px' }}>
                  BPD. {ultrasoundResult.BPD}
                </Title>
                <Title level={5} style={{ display: 'inline-flex', margin: '0', width: '100px' }}>
                  FL. {ultrasoundResult.FL}
                </Title>
              </Row>
              <Row>
                <Title level={5} style={{ display: 'inline-flex', marginRight: '20px', width: '100px' }}>
                  HC. {ultrasoundResult.HC}
                </Title>
                <Title level={5} style={{ display: 'inline-flex', margin: '0', width: '100px' }}>
                  AC. {ultrasoundResult.AC}
                </Title>
              </Row>
              <Row>
                <Title level={5} style={{ display: 'inline-flex', marginRight: '20px', width: '100px' }}>
                  AFI. {ultrasoundResult.AFI}
                </Title>
                <Title level={5} style={{ display: 'inline-flex', margin: '0', width: '100px' }}>
                  Placenta. {ultrasoundResult.placenta}
                </Title>
              </Row>
              <Row>
                <Title level={5} style={{ display: 'inline-flex', marginRight: '20px', width: '100px' }}>
                  EFW. {ultrasoundResult.EFW}
                </Title>
                <Title level={5} style={{ display: 'inline-flex', margin: '0', width: '100px' }}>
                  อายุครรภ์. {ultrasoundResult.gestationalAge} สัปดาห์
                </Title>
              </Row>
            </>
          ) : null}
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
          {/* <Table columns={columns} dataSource={data} pagination={false} style={{ width: '100%', marginTop: '20px' }} /> */}
          <Form form={form} component={false}>
            <Table
              style={{ width: '100%', marginTop: '20px' }}
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              dataSource={data}
              columns={mergedColumns}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
              }}
            />
          </Form>
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
          {/* <Button type="primary" style={{ borderRadius: '50px' }}>
            เพิ่มบันทึกผลการตรวจวันนี้ <PlusCircleOutlined />
          </Button> */}
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
            <Form onFinish={finishSpecialExamination}>
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
              <Form.Item label="การตรวจหัวนม" name="nippleExam" style={{ display: 'inline-flex' }}>
                <Radio.Group onChange={onChange}>
                  <Row justify="center" style={{ width: '100%' }}>
                    <Col>
                      <Radio value="ปรกติ">ปรกติ</Radio>
                    </Col>
                    <Col>
                      <Radio value="สั้น">สั้น</Radio>
                    </Col>
                    <Col>
                      <Radio value="บุ๋ม">บุ๋ม</Radio>
                    </Col>
                    <Col>
                      <Radio value="บอด">บอด</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
              <Button type="primary" htmlType="submit" style={{ borderRadius: '50px', marginLeft: '15px' }}>
                บันทึก
              </Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Anc;
