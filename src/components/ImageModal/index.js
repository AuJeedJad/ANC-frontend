import React from 'react';
import './imageModal.css';

function ImageModal(props) {
  const header = 'aaaaaaa';
  const images = [
    'https://www.pngfind.com/pngs/m/441-4411817_2-clipart-library-wooden-block-number-2-hd.png',
    'https://www.pngfind.com/pngs/m/432-4323885_number-2-png-free-download-number-2-in.png',
    'https://www.pngfind.com/pngs/m/547-5471534_2-png-black-and-white-checkered-number-transparent.png',
  ];

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
            {images.map((url, ind) => {
              return <img className="image" src={url} alt={`image${ind}`} />;
            })}
          </div>
          <div className="image-content">
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <div className="input-block">
              <label> abcde: </label>
              <input type="text" placeholder="12345" />
            </div>
            <button>submit</button>
          </div>
        </div>
      </div>
      <div className="modal-shadow"> </div>
      <div className="modal-cover"></div>
    </>
  );
}

export default ImageModal;
