import { useState, useEffect } from 'react';
import './ultrasoundResult.css';
import ImageModal from '../ImageModal/index';
import NewUsResult from '../NewUltrasoundResult/index';

function UltrasoundResult(props) {
  const usResultList = [
    {
      id: '1',
      value: [
        { name: 'a', value: 'a' },
        { name: 'b', value: '1' },
        { name: 'c', value: 'c' },
      ],
      previousValue: [
        { name: 'a', value: 'a' },
        { name: 'b', value: '1' },
        { name: 'c', value: 'c' },
      ],
      image: [
        'https://www.pngfind.com/pngs/m/441-4411817_2-clipart-library-wooden-block-number-2-hd.png',
        'https://www.pngfind.com/pngs/m/432-4323885_number-2-png-free-download-number-2-in.png',
        'https://www.pngfind.com/pngs/m/547-5471534_2-png-black-and-white-checkered-number-transparent.png',
      ],
    },
    {
      id: '3',
      value: [
        { name: 'a', value: 'AA' },
        { name: 'b', value: '2' },
        { name: 'c', value: 'BB' },
      ],
      previousValue: [
        { name: 'a', value: 'AA' },
        { name: 'b', value: '2' },
        { name: 'c', value: 'BB' },
      ],
      image: [
        'https://www.pngfind.com/pngs/m/441-4411817_2-clipart-library-wooden-block-number-2-hd.png',
        'https://www.pngfind.com/pngs/m/432-4323885_number-2-png-free-download-number-2-in.png',
      ],
    },
    {
      id: '5',
      value: [
        { name: 'a', value: 'aaa' },
        { name: 'b', value: '3' },
        { name: 'c', value: 'ccc' },
      ],
      previousValue: [
        { name: 'a', value: 'aaa' },
        { name: 'b', value: '3' },
        { name: 'c', value: 'ccc' },
      ],
      image: [
        'https://www.pngfind.com/pngs/m/441-4411817_2-clipart-library-wooden-block-number-2-hd.png',
        'https://www.pngfind.com/pngs/m/432-4323885_number-2-png-free-download-number-2-in.png',
        'https://www.pngfind.com/pngs/m/547-5471534_2-png-black-and-white-checkered-number-transparent.png',
      ],
    },
  ];
  const [usResultIdx, setUsResultIdx] = useState(0);
  const [addNewUs, setAddNewUs] = useState(false);
  const [value, setValue] = useState(usResultList[0].value);
  const onClickUpdate = () => {
    alert(value.map((value) => value.name + ': ' + value.value));
  };
  useEffect(() => {
    setValue(usResultList[usResultIdx].value);
  }, [usResultIdx]);

  return (
    <>
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
      {addNewUs ? (
        <NewUsResult header="สร้างสรุปผล ultrasound แผ่นใหม่" ancId="2" onCloseClick={() => props.setAncId(null)} />
      ) : (
        <ImageModal
          imageList={usResultList[usResultIdx].image}
          fieldList={value}
          onChangeInput={setValue}
          imagePath="/ultrasound/addImages"
          btnName="อัพเดท"
          onSubmitClick={onClickUpdate}
          header="ผล ultrasound"
          onCloseClick={() => props.setAncId(null)}
          value="1"
        />
      )}
    </>
  );
}

export default UltrasoundResult;
