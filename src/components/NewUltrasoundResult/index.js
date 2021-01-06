import { useState, useEffect, useContext } from 'react';
import axios from '../../config/axios';
import { notification } from 'antd';
import './newUltrasoundResult.css';
import logo from '../../image/logo/logo01.png';
import InputField from '../../components/InputField/index';
import CurrentPregContext from '../../context/CurrentPregContext';

function NewUltrasoundResult(props) {
  const currentPregContext = useContext(CurrentPregContext);
  const fieldNum = ['BPD', 'FL', 'HC', 'AC', 'AFI', 'EFW', 'gestationalAge'];
  const fieldStr = ['placenta', 'examBy'];
  const fieldText = ['note', 'risk'];
  const [value, setValue] = useState({
    BPD: null,
    FL: null,
    HC: null,
    AC: null,
    AFI: null,
    placenta: null,
    EFW: null,
    gestationalAge: null,
    note: null,
    risk: null,
    isCorrect: false,
    examBy: null,
    ancId: props.ancId,
  });
  const [files, setFiles] = useState();
  const [validate, setValidate] = useState(false);
  useEffect(() => {
    setValidate(!!files);
  }, [files]);
  useEffect(() => {
    if (value.isCorrect === true) {
      if (!value.gestationalAge) {
        notification.error({
          description: 'ต้องกรอก GA เพื่อใช้ในการคำนวณนี้',
        });
        setValue({ ...value, isCorrect: false });
        return;
      }
      axios.get(`./ultrasound/checkCorrectUs?id=${currentPregContext.mother.currentPregId}`).then((res) => {
        if (res.data.message === 'exist dateByUltrasound')
          notification.warning({
            description: `หากกด"สร้าง" corrected date by ultrasound เดิม: ${
              res.data.dateByUltrasound
            } จะถูกเขียนทับด้วย:${new Date(new Date().setDate(new Date().getDate() - 7 * value.gestationalAge + 280))
              .toISOString()
              .slice(0, 10)}หากไม่ต้องการเขียนทับ กรุณานำ checkbox ออก`,
          });
        if (res.data.message === 'OK to set UltrasoundResult.isCorrect true')
          notification.success({
            description: 'ระบบจะเพิ่มข้อมูล corrected date by ultrasound จาก gestational age หน้านี้',
          });
      });
    }
  }, [value]);
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });
    formData.append('result', JSON.stringify(value));

    axios
      .post('/ultrasound/addNewUsResult', formData, {})
      .then((res) => {
        notification.success({
          description: 'เพิ่มใบสรุปผล ultrasound ใหม่ เรียบร้อยแล้ว',
        });
        props.fecthUltrasoundResult();
        props.fetchUsResult();
        props.setUsResultIdx(props.listLength);
        props.setAddNewUs(false);
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: 'เพิ่มใบสรุปผล ultrasound ไม่สำเร็จ',
        });
      });
  };
  const valueGet = (fieldValue, field) => {
    const newFieldValue = fieldValue === '' ? null : fieldValue;
    setValue({ ...value, [field]: newFieldValue });
  };
  return (
    <>
      <div className="modal-container">
        <form onSubmit={onSubmit}>
          <div className="modal" style={{ justifyContent: 'flex-end', zIndex: '-1' }}>
            <div className="image-header usResult-header" style={{ position: 'absolute', top: '2vh' }}>
              {props.header}
            </div>
            <div className="modal-close" onClick={props.onCloseClick}></div>
            <div className="box-newUsResult">
              <div className="subBox-newUsResult">
                {fieldNum.map((item) => (
                  <div style={{ width: '100px' }}>
                    <InputField
                      fieldName={item}
                      fieldLabel={item}
                      type="number"
                      valueGet={(value, field) => valueGet(value, field)}
                      valueFormat="number"
                      valueLengthMax={10}
                      valueLengthMin={0}
                    />
                  </div>
                ))}
                {fieldStr.map((item) => (
                  <div style={{ width: '100px' }}>
                    <InputField
                      fieldName={item}
                      fieldLabel={item}
                      type="text"
                      valueGet={(value, field) => valueGet(value, field)}
                      valueLengthMax={32}
                      valueLengthMin={0}
                    />
                  </div>
                ))}
              </div>
              <div className="subBox-newUsResult">
                {fieldText.map((item) => (
                  <div style={{ width: '100%' }}>
                    <InputField
                      fieldName={item}
                      fieldLabel={item}
                      type="text"
                      valueGet={(value, field) => valueGet(value, field)}
                      valueLengthMax={500}
                      valueLengthMin={0}
                    />
                  </div>
                ))}
                <label className="checked-container" for="isCorrectTrue">
                  <input
                    className="checked-inputCheckbox"
                    id="isCorrectTrue"
                    type="checkbox"
                    checked={value.isCorrect}
                    onChange={(e) => setValue({ ...value, isCorrect: e.target.checked })}
                  />
                  <span class="checkmark"></span>
                  เป็นผล u/s สำหรับคำนวณ GA และ EDD
                </label>
                <div className="card-image-add" style={{ minWidth: '150px' }}>
                  <div style={{ position: 'relative' }}>
                    <label for="upload1" className="btn-upload">
                      เลือกรูป U/S
                    </label>
                    <input type="file" id="upload1" multiple onChange={(e) => setFiles(e.target.files)} />
                  </div>
                </div>
                <button disabled={!validate} type="submit" className="btn-upload">
                  สร้าง
                </button>
                <img src={logo} alt="logo" width="30%" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewUltrasoundResult;
