import { useState } from 'react';
import './ultrasoundResult.css';
import ImageModal from '../ImageModal/index';

function UltrasoundResult(props) {
  const id = '1';
  const [value, setValue] = useState([
    { name: 'a', value: 'aaa' },
    { name: 'b', value: '2' },
    { name: 'c', value: 'ccc' },
  ]);
  const onClickUpdate = () => {
    alert(value.map((value) => value.name + ': ' + value.value));
  };
  return (
    <>
      <ImageModal
        imageList={[
          'https://www.pngfind.com/pngs/m/441-4411817_2-clipart-library-wooden-block-number-2-hd.png',
          'https://www.pngfind.com/pngs/m/432-4323885_number-2-png-free-download-number-2-in.png',
          'https://www.pngfind.com/pngs/m/547-5471534_2-png-black-and-white-checkered-number-transparent.png',
        ]}
        fieldList={value}
        setValue={setValue}
        btnName="อัพเดท"
        onSubmitClick={onClickUpdate}
        onCloseClick={() => props.setUltrasoundResult(null)}
        onChangeUpdate={setValue}
      />
    </>
  );
}

export default UltrasoundResult;
