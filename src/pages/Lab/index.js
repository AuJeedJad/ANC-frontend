import { Row, Col } from 'antd';
import './lab.css';
import AddLabResult from './components/AddLabResult';
import GetPregHis from './components/GetPregHis';
import LabResultTable from './components/LabResultTable';
import RecordCounselAndParentSchool from './components/RecordCounselAndParentSchool';
import RecordDownsyndrome from './components/RecordDownsyndrome';
import RecordVaccine from './components/RecordVaccine';
import { useState } from 'react';

function Lab() {
  const [labResult, setLabResult] = useState({ active: false, type: null, no: null, labResultId: null });
  console.log('labResult useSate', labResult);
  return (
    <div className="page">
      <div style={{ height: '2%' }}></div>
      {labResult.active ? (
        <Row
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            border: '1px solid lightgray',
            position: 'absolute',
            zIndex: '2',
            overflow: 'auto',
            width: '60%',
            top: '20vh',
            boxShadow: '15px 15px #52938e',
          }}
        >
          <Col xs={24} style={{ width: '100%' }}>
            <AddLabResult labResult={labResult} setLabResult={setLabResult} />
          </Col>
        </Row>
      ) : null}
      <Row style={{ width: '100%', height: '98%' }}>
        {/* left column : TableLabResult, RecordDownsyndrome,RecordLabResult-PopUp */}
        <Col xs={24} md={14} style={{ borderRight: '1px solid lightgrey' }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={23}>
              <h1
                style={{
                  // color: '#52938E',
                  fontWeight: 'bold',
                  // padding: '0.12em',
                  // borderStyle: 'dashed',
                  // borderWidth: '2px',
                  // borderColor: '#66A39E',
                  margin: '0.5em 0',
                }}
              >
                ผลตรวจจากห้องปฏิบัติการ
              </h1>
            </Col>
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={23} style={{ display: 'flex', justifyContent: 'center' }}>
              <LabResultTable setLabResult={setLabResult} />
            </Col>
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={23} style={{ width: '100%', margin: '1em 0' }}>
              <RecordDownsyndrome />
            </Col>
          </Row>
        </Col>
        {/* right column : GetPregHis, RecordCounselAndParentSchool,RecordVaccine */}
        <Col xs={24} md={10} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Row style={{ width: '95%' }}>
            <Col xs={24}>
              <GetPregHis />
            </Col>
          </Row>
          <Row style={{ width: '95%' }}>
            <Col xs={24}>
              <RecordCounselAndParentSchool />
            </Col>
          </Row>
          <Row style={{ width: '95%' }}>
            <Col xs={24}>
              <RecordVaccine />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Lab;
