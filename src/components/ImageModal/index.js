import React from 'react';
import './imageModal.css';

function ImageModal(props) {
  const header = 'aaaaaaa';

  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-close" onClick={props.onCloseClick}>
            {' '}
          </div>
          {/* <img
            className="usImage"
            src="https://www.pngfind.com/pngs/m/441-4411817_2-clipart-library-wooden-block-number-2-hd.png"
            alt="image"
          /> */}
          <div className="image-header">{header}</div>
          <div className="image-box">
            {props.imageList.map((url, ind) => {
              return <img className="image" src={url} alt={`image${ind}`} />;
            })}
          </div>
          <div className="image-content">
            {props.fieldList.map((item, idx) => {
              return (
                <div className="input-block">
                  <label> {item.name} </label>
                  <input type="text" placeholder={item.value} id={item.name} />
                </div>
              );
            })}

            <button onClick={props.onSubmitClick}>{props.btnName}</button>
          </div>
        </div>
      </div>
      <div className="modal-shadow"> </div>
      <div className="modal-cover"></div>
    </>
  );
}

export default ImageModal;
