import { Button, Col, Form, Row, Typography, notification } from 'antd';
import React, { useContext } from 'react';
import Teeth from './component/teeth.js';
import CurrentPregContext from '../../context/CurrentPregContext';
import axios from '../../config/axios.js';

function Dental() {
  const { Title } = Typography;

  const { mother } = useContext(CurrentPregContext);
  console.log(mother.currentPregId);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  // dentalExam
  const [toothDecay, setToothDecay] = React.useState(null);
  const [calculus, setCalculus] = React.useState(null);
  const [gingivitis, setGingivitis] = React.useState(null);
  const [other, setOther] = React.useState('');
  const [examBy, setExamBy] = React.useState('');
  const [date, setDate] = React.useState('');

  console.log('toothDecay', toothDecay);
  console.log('calculus', calculus);
  console.log('gingivitis', gingivitis);
  console.log('other', other);
  console.log('examBy', examBy);
  console.log('date', date);

  // dentalCare
  const [isMouthCare, setIsMouthCare] = React.useState(null);
  const [isBrushPractice, setIsBrushPractice] = React.useState(null);
  const [isDryedBrush, setIsDryedBrush] = React.useState(null);
  const [isFloss, setIsFloss] = React.useState(null);
  const [otherAdvise, setOtherAdvise] = React.useState('');

  console.log('isMouthCare', isMouthCare);
  console.log('isBrushPractice', isBrushPractice);
  console.log('isDryedBrush', isDryedBrush);
  console.log('isFloss', isFloss);
  console.log('otherAdvise', otherAdvise);

  //dentalAppointment

  const [dentist, setDentist] = React.useState([]);
  const [dates, setDates] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [details, setDetails] = React.useState([]);

  console.log('dentist', dentist);
  console.log('dates', dates);
  console.log('amount', amount);
  console.log('details', details);

  // onchangeDentalExam
  const onChange = (e) => {
    console.log(e, e.target.checked);
    if (e.target.name === 'toothDecay') {
      setToothDecay(e.target.value);
    } else if (e.target.name === 'calculus') {
      setCalculus(e.target.value);
    } else if (e.target.name === 'gingivitis') {
      setGingivitis(e.target.value);
    } else if (e.target.name === 'other') {
      setOther(e.target.value);
    } else if (e.target.name === 'examBy') {
      setExamBy(e.target.value);
    } else if (e.target.name === 'date') {
      setDate(e.target.value);
    }
  };

  // onchangeDentalCare
  const onChangeDentalCare = (e) => {
    if (e.target.value === 'isMouthCare') {
      setIsMouthCare(e.target.checked);
    } else if (e.target.value === 'isBrushPractice') {
      setIsBrushPractice(e.target.checked);
    } else if (e.target.value === 'isDryedBrush') {
      setIsDryedBrush(e.target.checked);
    } else if (e.target.value === 'isFloss') {
      setIsFloss(e.target.checked);
    } else if (e.target.name === 'otherAdvise') {
      setOtherAdvise(e.target.value);
    }
  };

  // onchangeDentalAppointment
  const onChangeDentalAppointment = (e) => {
    console.log(e.target);
    if (e.target.name === 'dentist-0') {
      const dentist_0 = [...dentist];
      dentist_0[0] = e.target.value;
      setDentist(dentist_0);
    } else if (e.target.name === 'dentist-1') {
      const dentist_1 = [...dentist];
      dentist_1[1] = e.target.value;
      setDentist(dentist_1);
    } else if (e.target.name === 'amount-0') {
      const amount_0 = [...amount];
      amount_0[0] = e.target.value;
      setAmount(amount_0);
    } else if (e.target.name === 'amount-1') {
      const amount_1 = [...amount];
      amount_1[1] = e.target.value;
      setAmount(amount_1);
    } else if (e.target.name === 'details-0') {
      const details_0 = [...details];
      details_0[0] = e.target.value;
      setDetails(details_0);
    } else if (e.target.name === 'details-1') {
      const details_1 = [...details];
      details_1[1] = e.target.value;
      setDetails(details_1);
    } else if (e.target.name === 'dates-0') {
      const dates_0 = [...dates];
      dates_0[0] = e.target.value;
      setDates(dates_0);
    } else if (e.target.name === 'dates-1') {
      const dates_1 = [...dates];
      dates_1[1] = e.target.value;
      setDates(dates_1);
    }
  };

  // set information
  const addTeethInformation = async () => {
    let objDentalExam = {
      dentalCheck: {
        toothDecay: toothDecay,
        calculus: calculus,
        gingivitis: gingivitis,
        other: other,
        examBy: examBy,
      },
      curPregId: 1,
    };

    const resDentalExam = await axios.post('/dental/DentalExam', objDentalExam);

    let objDentalCare = {
      dental: {
        isMouthCare: isMouthCare,
        isBrushPractice: isBrushPractice,
        isDryedBrush: isDryedBrush,
        isFloss: isFloss,
        other: otherAdvise,
      },

      dentalExamId: resDentalExam.data.newDentalCheck.id,
    };

    const resDentalCare = await axios.post('/dental/DentalCare', objDentalCare);

    let objDentalAppointment = {
      dentalAppoint: [
        {
          date: date,
          dentist: dentist,
          details: details,
        },
      ],

      dentalExamId: resDentalExam.data.newDentalCheck.id,
    };

    const resDentalAppointment = await axios.post('/dental/DentalAppointment', objDentalAppointment);

    notification.open({
      message: 'Dental Form',
      description: 'Submit Form complete.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <div className="page-antd">
      <Form onFinish={onFinish}>
        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                การตรวจสุขภาพช่องปาก(เจ้าหน้าที่บันทึก)
              </Title>
            </Col>
          </Row>

          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Teeth
                onChange={onChange}
                onChangeDentalCare={onChangeDentalCare}
                onChangeDentalAppointment={onChangeDentalAppointment}
              />
            </Col>
          </Row>
        </Row>

        <Form.Item>
          <Row justify="end">
            <Col>
              <Button
                type="primary"
                onClick={addTeethInformation}
                style={{ width: '150px', marginRight: '8px' }}
                htmlType="submit"
              >
                บันทึก
              </Button>
              <Button type="primary" style={{ width: '150px' }} danger>
                ยกเลิก
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Dental;
