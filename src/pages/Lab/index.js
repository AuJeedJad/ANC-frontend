import { Row, Col } from 'antd';
import AddLabResult from './components/AddLabResult';
import GetPregHis from './components/GetPregHis';
import LabResultTable from './components/LabResultTable';
import RecordCounselAndParentSchool from './components/RecordCounselAndParentSchool';
import RecordDownsyndrome from './components/RecordDownsyndrome';
import RecordVaccine from './components/RecordVaccine';

function lab() {
  return (
    <div className="page">
      <div style={{ height: '2%' }}></div>
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
            <Col xs={23}>
              <LabResultTable />
            </Col>
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={23} style={{ width: '100%', margin: '1em 0' }}>
              <RecordDownsyndrome />
            </Col>
          </Row>
          <Row>
            <Col xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <AddLabResult />
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

export default lab;
