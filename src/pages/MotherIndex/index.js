import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Calendar, Col, Form, Input, Modal, Row, Select, Typography } from 'antd';
import '../../components/SideBar/sideBar.css';

function MotherIndex() {
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [recordTimes, setRecordTimes] = useState('morning');
  const [count, setCount] = useState(0);

  const triggerChange = (changedValue) => {
    setRecordTimes(changedValue);
  };

  const onTimesChange = (newRecordTimes) => {
    if (recordTimes !== newRecordTimes) {
      setRecordTimes(newRecordTimes);
    }
    triggerChange(newRecordTimes);
  };

  const CollectionCreateForm = ({ onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        title={'นับลูกดิ้น'}
        visible={visible}
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form form={form} initialValues={{ time: recordTimes, count: count }}>
          <Form.Item name="time" label="ช่วงเวลา">
            <Select
              style={{ display: 'inline-flex', width: 100, margin: '0 8px' }}
              value={recordTimes}
              onChange={onTimesChange}
            >
              <Option value="morning">เช้า</Option>
              <Option value="afternoon">กลางวัน</Option>
              <Option value="evening">เย็น</Option>
            </Select>
          </Form.Item>
          <Form.Item name="count" label="จำนวน(ครั้ง)">
            <Input style={{ display: 'inline-flex', width: 100, margin: '0 8px' }} />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  const onSelect = (date) => {
    setVisible(!visible);
    console.log(date.format('YYYY-MM-DD'));
  };

  const onCreate = (values) => {
    console.log(`time = ${recordTimes}, count = ${count}`);
    setRecordTimes(values.date);
    setCount(values.count);
    setVisible(!visible);
  };

  function getListData(value) {
    let listData;
    switch (value.format('YYYY-MM-DD')) {
      case '2021-01-04':
        listData = [
          { type: 'warning', content: `เช้า : 15 ครั้ง` },
          { type: 'success', content: `กลางวัน : 28 ครั้ง` },
        ];
        break;
      case '2021-01-08':
        listData = [
          { type: 'warning', content: `เช้า : 16 ครั้ง` },
          { type: 'success', content: `กลางวัน : 28 ครั้ง` },
          { type: 'error', content: `เย็น : 19 ครั้ง` },
        ];
        break;
      case '2021-01-15':
        listData = [
          { type: 'warning', content: `เช้า : 17 ครั้ง` },
          { type: 'success', content: `กลางวัน : 28 ครั้ง` },
          { type: 'error', content: `เย็น : 24 ครั้ง` },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(date) {
    const listData = getListData(date);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} count={item.count} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  const headerRender = ({ value, onChange }) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    const current = value.clone();
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
      current.month(i);
      months.push(localeData.monthsShort(current));
    }

    for (let index = start; index < end; index++) {
      monthOptions.push(
        <Select.Option className="month-item" key={`${index}`}>
          {months[index]}
        </Select.Option>
      );
    }
    const month = value.month();
    const year = value.year();
    const options = [];
    for (let i = year - 10; i < year + 10; i += 1) {
      options.push(
        <Select.Option key={i} value={i} className="year-item">
          {i}
        </Select.Option>
      );
    }
    return (
      <div style={{ padding: 8 }}>
        <Typography.Title level={4}>
          บันทึกนับลูกดิ้น {value.clone().year() + '/' + Number(value.clone().month() + 1)}
        </Typography.Title>
        <Row gutter={8}>
          <Col>
            <Select
              size="large"
              dropdownMatchSelectWidth={false}
              onChange={(newYear) => {
                const now = value.clone().year(newYear);
                onChange(now);
                setVisible(false);
              }}
              value={String(year)}
            >
              {options}
            </Select>
          </Col>
          <Col>
            <Select
              size="large"
              dropdownMatchSelectWidth={false}
              value={String(month)}
              onChange={(selectedMonth) => {
                const newValue = value.clone();
                newValue.month(parseInt(selectedMonth, 10));
                onChange(newValue);
                setVisible(false);
              }}
            >
              {monthOptions}
            </Select>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Link to="/mother/profile" className="btn-sidebar" style={{ width: '100%', fontSize: 20 }}>
            ข้อมูลส่วนตัว
          </Link>
          <Calendar
            mode="month"
            headerRender={headerRender}
            style={{ margin: '16px 0' }}
            onSelect={onSelect}
            dateCellRender={dateCellRender}
          ></Calendar>
          <Link to="/mother/information" className="btn-sidebar" style={{ width: '100%', fontSize: 20 }}>
            ข้อมูลครรภ์ปัจจุบัน
          </Link>
          <CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(!visible);
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default MotherIndex;
