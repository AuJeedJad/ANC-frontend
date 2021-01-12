import { useState, useEffect } from 'react';
import './ultrasoundResult.css';
import ImageModal from '../ImageModal/index';
import NewUsResult from '../NewUltrasoundResult/index';
import axios from 'axios';
import mockImage from '../../image/mock/ultrasoundMock.jpg';

function UltrasoundResult(props) {
  const usResultMock = [
    {
      id: '1',
      value: [],
      image: [mockImage],
    },
  ];
  const [usResultIdx, setUsResultIdx] = useState(0);
  const [addNewUs, setAddNewUs] = useState(false);
  const [value, setValue] = useState(usResultMock[0].value);
  const [previousValue, setPreviousValue] = useState(usResultMock[0].value);
  const [usResultList, setUsResultList] = useState([]);
  const onClickUpdate = () => {
    alert(value.map((value) => value.name + ': ' + value.value));
  };

  const fetchUsResult = async () => {
    try {
      const res = await axios.get(`/ultrasound/getUltarsoundResult?ancId=${props.ancId}`);
      setUsResultList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsResult();
  }, []);

  useEffect(() => {
    const newValue = usResultList[usResultIdx] ? usResultList[usResultIdx].value : usResultMock[0].value;
    setValue(newValue);
    setPreviousValue(newValue);
  }, [usResultIdx, usResultList]);

  return (
    <>
      {addNewUs ? (
        <div className="usResult-select">
          <button
            className="btn-newResult"
            onClick={() => {
              setAddNewUs(!addNewUs);
            }}
          >
            +<div className="hint-newResult">เพิ่มสรุปผล ultrasound แผ่นใหม่</div>
          </button>
        </div>
      ) : (
        <div className="usResult-select">
          <button
            className="btn-newResult"
            onClick={() => {
              setAddNewUs(!addNewUs);
            }}
          >
            +<div className="hint-newResult">เพิ่มสรุปผล ultrasound แผ่นใหม่</div>
          </button>
          {usResultList.map((item, idx) => {
            return (
              <button className={idx === usResultIdx ? 'usResult-selected' : null} onClick={() => setUsResultIdx(idx)}>
                {idx + 1}
              </button>
            );
          })}
        </div>
      )}
      {addNewUs ? (
        <NewUsResult
          header="สร้างสรุปผล ultrasound แผ่นใหม่"
          fecthUltrasoundResult={props.fecthUltrasoundResult}
          fetchUsResult={fetchUsResult}
          ancId={props.ancId}
          onCloseClick={() => props.setAncId(null)}
          setUsResultIdx={setUsResultIdx}
          listLength={usResultList.length}
          setAddNewUs={setAddNewUs}
        />
      ) : (
        <ImageModal
          imageList={usResultList[usResultIdx] ? usResultList[usResultIdx].image : usResultMock[0].image}
          fieldList={value}
          onChangeInput={setValue}
          fetchUsResult={fetchUsResult}
          imagePath="/ultrasound/addImages"
          btnName="อัพเดท"
          onSubmitClick={onClickUpdate}
          header="ผล ultrasound"
          onCloseClick={() => props.setAncId(null)}
          value={usResultList[usResultIdx] ? usResultList[usResultIdx].id : usResultMock[0].id}
          hide={!usResultList[usResultIdx]}
        />
      )}
    </>
  );
}

export default UltrasoundResult;
