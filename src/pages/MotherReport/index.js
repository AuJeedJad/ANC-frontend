import { useContext } from 'react';
import './motherReport.css';
import { useHistory } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import CurrentPregContext from '../../context/CurrentPregContext';

function MotherReport() {
  const history = useHistory();
  const currentPregContext = useContext(CurrentPregContext);
  return (
    <div className="page">
      <div className="mother-report-notify">
        <div className="card-onethird">
          <div className="card-header-onethird">GA: {currentPregContext.mother.GA} WEEKS</div>
          <div className="card-body-onethird">
            <div className="card-content-onethird"> by ...</div>
            <div className="card-icon-onethird">
              <EditOutlined />
            </div>
          </div>
        </div>
        <div className="card-onethird last-card" style={{ height: '30vh' }}>
          <div className="card-header-onethird"></div>
          <div className="card-body-onethird">
            <div className="card-content-onethird"> by ...</div>
            <div className="card-icon-onethird">
              <EditOutlined />
            </div>
          </div>
        </div>
        <div className="card-onethird">
          <div className="card-header-onethird">Helo</div>
          <div className="card-body-onethird">
            <div className="card-content-onethird"> by ...</div>
            <div className="card-icon-onethird">
              <EditOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotherReport;
