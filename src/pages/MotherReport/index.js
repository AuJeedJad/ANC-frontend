import { useState, useContext, useEffect } from 'react';
import './motherReport.css';
import { useHistory } from 'react-router-dom';
import { EditOutlined, QuestionCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import CurrentPregContext from '../../context/CurrentPregContext';
import axios from 'axios';
import Checkbox from 'antd/lib/checkbox/Checkbox';

function MotherReport() {
  const history = useHistory();
  const currentPregContext = useContext(CurrentPregContext);
  const [lastANC, setLastANC] = useState({});
  const [currentPreg, setCurrentPreg] = useState({});
  const [editEDC, setEditEDC] = useState({ onEdit: false });
  const [note, setNote] = useState({ onEdit: false });

  const fetchAnc = () => {
    axios
      .get(`motherReport/getMotherReport/${currentPregContext.mother.currentPregId}`)
      .then((res) => {
        setLastANC(res.data.lastANC);
        setCurrentPreg(res.data.targetCurPreg);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  useEffect(() => {
    fetchAnc();
  }, []);

  const onEditEDC = () => {
    setEditEDC({
      onEdit: true,
      correctedBy: currentPreg.correctedBy,
      dateByLMP: currentPreg.dateByLMP,
      dateByUltrasound: currentPreg.dateByUltrasound,
      dateByPV: currentPreg.dateByPV,
      dateByUtSize: currentPreg.dateByUtSize,
      UsAtGA: currentPreg.UsAtGA,
      PvAtGA: currentPreg.PvAtGA,
      UtAtGA: currentPreg.UtAtGA,
    });
  };
  const onEditEDCSend = () => {
    setEditEDC({ onEdit: false });
  };
  const onEditNote = () => {
    setNote({ onEdit: true, content: currentPreg.note });
  };
  const onEditNoteSend = () => {
    axios
      .patch(`/currentPregnancy/note/${currentPregContext.mother.currentPregId}`, { note: note.content })
      .then((res) => {
        setNote({ onEdit: false });
        fetchAnc();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const iconLabel = {
    display: 'flex',
    width: '30%',
    color: 'var(--primaryDarkest-color)',
    alignItems: 'center',
  };
  const EDCfield = { display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' };
  const EDCinput = {
    color: 'var(--primaryDarkest-color)',
    border: '2px var(--primary-color) dashed',
    borderRadius: '5px',
  };
  return (
    <div className="page">
      <div className="mother-report-notify">
        <div className="card-onethird">
          <div className="card-header-onethird">
            GA:&nbsp;&nbsp;
            {currentPreg.correctedBy === 'PV'
              ? Math.floor(
                  ((new Date().getTime() - new Date(currentPreg.dateByPV).getTime()) / 1000 / 60 / 60 / 24 + 280) / 7
                )
              : currentPreg.correctedBy === 'Ut Size'
              ? Math.floor(
                  ((new Date().getTime() - new Date(currentPreg.dateByUtSize).getTime()) / 1000 / 60 / 60 / 24 + 280) /
                    7
                )
              : currentPreg.correctedBy === 'U/S'
              ? Math.floor(
                  ((new Date().getTime() - new Date(currentPreg.dateByUltrasound).getTime()) / 1000 / 60 / 60 / 24 +
                    280) /
                    7
                )
              : currentPreg.correctedBy === 'LMP'
              ? Math.floor(
                  ((new Date().getTime() - new Date(currentPreg.dateByLMP).getTime()) / 1000 / 60 / 60 / 24 + 280) / 7
                )
              : '-'}
            &nbsp;&nbsp;WEEKS
          </div>
          <div className="card-body-onethird">
            <div className="card-content-onethird"> by {currentPreg.correctedBy}</div>
            <div className="card-icon-onethird-container">
              <div className="card-icon-onethird">
                <EditOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className="card-onethird last-card" style={{ height: '30vh' }}>
          <div className="card-header-onethird">
            <span>สิ่งที่ต้องให้ความสนใจ</span>
            <QuestionCircleOutlined className="question" />
            <div className="note-hover">
              บันทึกสิ่งที่ต้องการให้แพทย์ท่านอื่นมองเห็นได้ง่าย เช่น ครรภ์แฝด ความผิดปรกติที่ตรวจพบและต้องให้ความสนใจ
              ประวัติการแพ้ยา
            </div>
          </div>
          {!note.onEdit ? (
            <div className="card-body-onethird">
              <div className="card-content-onethird"> {currentPreg.note}</div>
              <div className="card-icon-onethird-container">
                <div className="card-icon-onethird">
                  <EditOutlined onClick={onEditNote} />
                </div>
              </div>
            </div>
          ) : (
            <div className="card-body-onethird">
              <div className="card-content-onethird">
                <textarea
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                  style={{ ...EDCinput, width: '95%', height: '15vh' }}
                />
              </div>
              <div className="card-icon-onethird-container">
                <div style={iconLabel}>
                  <div className="card-icon-onethird" onClick={() => setNote({ onEdit: false })}>
                    <CloseCircleOutlined />
                  </div>
                  cancel
                </div>
                <div style={iconLabel}>
                  <div className="card-icon-onethird" onClick={onEditNoteSend}>
                    <CheckCircleOutlined />
                  </div>
                  save
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="card-onethird">
          <div className="card-header-onethird">Corrected EDC: </div>
          <div className="card-body-onethird">
            {!editEDC.onEdit ? (
              <>
                {console.log(editEDC.onEdit)}
                <div className="card-content-onethird">
                  corrected by : {currentPreg.correctedBy}
                  <br /> at GA :&nbsp;&nbsp;
                  {currentPreg.correctedBy === 'PV'
                    ? currentPreg.PvAtGA
                    : currentPreg.correctedBy === 'Ut Size'
                    ? currentPreg.UtAtGA
                    : currentPreg.correctedBy === 'U/S'
                    ? currentPreg.UsAtGA
                    : null}
                  &nbsp;&nbsp;weeks
                </div>
                <div className="card-icon-onethird-container">
                  <div className="card-icon-onethird" onClick={onEditEDC}>
                    <EditOutlined />
                  </div>
                </div>
              </>
            ) : (
              <>
                {console.log(editEDC.onEdit)}
                <div className="card-content-onethird">
                  <div style={EDCfield}>
                    <label for="dateByLMP">
                      by LMP:&nbsp;&nbsp;
                      <input
                        id="dateByLMP"
                        type="date"
                        value={editEDC.dateByLMP}
                        style={{ ...EDCinput, width: '108px' }}
                        onChange={(e) => setEditEDC({ ...editEDC, dateByLMP: e.target.value })}
                      />
                    </label>
                    <div> </div>
                  </div>
                  <div style={EDCfield}>
                    <label for="dateByUS">
                      by U/S:&nbsp;&nbsp;&nbsp;
                      <input
                        id="dateByUS"
                        type="date"
                        value={editEDC.dateByUltrasound}
                        style={{ ...EDCinput, width: '108px' }}
                        onChange={(e) => setEditEDC({ ...editEDC, dateByUltrasound: e.target.value })}
                      />
                    </label>
                    <label for="gaByUS">
                      at GA:&nbsp;&nbsp;
                      <input
                        id="gaByUS"
                        type="number"
                        min="1"
                        max="45"
                        value={editEDC.UsAtGA}
                        style={{ ...EDCinput, width: '40px' }}
                        onChange={(e) => setEditEDC({ ...editEDC, UsAtGA: e.target.value })}
                      />
                    </label>
                  </div>
                  <div style={EDCfield}>
                    <label for="dateByPV">
                      by PV:&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        id="dateByPV"
                        type="date"
                        value={editEDC.dateByPV}
                        style={{ ...EDCinput, width: '108px' }}
                        onChange={(e) => setEditEDC({ ...editEDC, dateByPV: e.target.value })}
                      />
                    </label>
                    <label for="gaByPV">
                      at GA:&nbsp;&nbsp;
                      <input
                        id="gaByPV"
                        type="number"
                        min="1"
                        max="45"
                        value={editEDC.PvAtGA}
                        style={{ ...EDCinput, width: '40px' }}
                        onChange={(e) => setEditEDC({ ...editEDC, PvAtGA: e.target.value })}
                      />
                    </label>
                  </div>
                  <div style={EDCfield}>
                    <label for="dateByUt">
                      Ut size:&nbsp;&nbsp;&nbsp;
                      <input
                        id="dateByUt"
                        type="date"
                        value={editEDC.dateByUtSize}
                        style={{ ...EDCinput, width: '108px' }}
                        onChange={(e) => setEditEDC({ ...editEDC, dateByUtSize: e.target.value })}
                      />
                    </label>
                    <label for="gaByUt">
                      at GA:&nbsp;&nbsp;
                      <input
                        id="gaByUt"
                        type="number"
                        min="1"
                        max="45"
                        value={editEDC.UtAtGA}
                        style={{ ...EDCinput, width: '40px' }}
                        onChange={(e) => setEditEDC({ ...editEDC, UtAtGA: e.target.value })}
                      />
                    </label>
                  </div>
                </div>
                <div style={{ display: 'flex', flexFlow: 'row wrap', color: 'var(--primaryDarkest-color)' }}>
                  corrected by:&nbsp;&nbsp;
                  <Checkbox
                    type="radio"
                    name="correctedBy"
                    style={{ color: 'var(--primaryDarkest-color)' }}
                    checked={editEDC.correctedBy === 'LMP'}
                    onChange={(e) => setEditEDC({ ...editEDC, correctedBy: 'LMP' })}
                  >
                    LMP
                  </Checkbox>
                  <Checkbox
                    type="radio"
                    name="correctedBy"
                    style={{ color: 'var(--primaryDarkest-color)' }}
                    checked={editEDC.correctedBy === 'U/S'}
                    onChange={(e) => setEditEDC({ ...editEDC, correctedBy: 'U/S' })}
                  >
                    U/S
                  </Checkbox>
                  <Checkbox
                    type="radio"
                    name="correctedBy"
                    style={{ color: 'var(--primaryDarkest-color)' }}
                    checked={editEDC.correctedBy === 'PV'}
                    onChange={(e) => setEditEDC({ ...editEDC, correctedBy: 'PV' })}
                  >
                    PV
                  </Checkbox>
                  <Checkbox
                    type="radio"
                    name="correctedBy"
                    style={{ color: 'var(--primaryDarkest-color)' }}
                    checked={editEDC.correctedBy === 'Ut Size'}
                    onChange={(e) => setEditEDC({ ...editEDC, correctedBy: 'Ut Size' })}
                  >
                    Ut Size
                  </Checkbox>
                </div>
                <div className="card-icon-onethird-container">
                  <div style={iconLabel}>
                    <div className="card-icon-onethird" onClick={() => setEditEDC({ onEdit: false })}>
                      <CloseCircleOutlined />
                    </div>
                    cancel
                  </div>
                  <div style={iconLabel}>
                    <div className="card-icon-onethird" onClick={onEditEDCSend}>
                      <CheckCircleOutlined />
                    </div>
                    save
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotherReport;
