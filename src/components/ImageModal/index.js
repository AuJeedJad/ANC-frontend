import { useState } from 'react';
import './imageModal.css';
import axios from '../../config/axios';
import { notification } from 'antd';

function ImageModal(props) {
  const [addImage, setAddImage] = useState(false);
  const [files, setFiles] = useState();

  const onUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });
    formData.append('value', props.value);

    axios
      .post(props.imagePath, formData, {})
      .then((res) => {
        notification.success({
          description: 'Upload Success',
        });
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: 'Upload Not Success',
        });
      });
  };
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-close" onClick={props.onCloseClick}></div>

          <div className="image-header">{props.header}</div>
          <div className="image-box">
            <div
              className="image-add-box"
              style={{
                backgroundColor: addImage ? 'white' : null,
                border: addImage ? '3px dashed var(--thirdary-color)' : null,
              }}
            >
              <div
                className={`modal-plus ${addImage ? 'modal-minus' : null}`}
                onClick={() => setAddImage(!addImage)}
              ></div>
              {addImage ? (
                <form onSubmit={onUpload}>
                  <div className="card-image-add">
                    <div style={{ position: 'relative' }}>
                      <label for="upload1" className="btn-upload">
                        เลือกรูป U/S
                      </label>
                      <input type="file" id="upload1" multiple onChange={(e) => setFiles(e.target.files)} />
                    </div>
                  </div>
                  <button type="submit" className="btn-upload">
                    upload
                  </button>
                </form>
              ) : null}
            </div>
            {props.imageList.map((url, ind) => {
              return <img className="image" src={url} alt={`image${ind}`} />;
            })}
          </div>
          <div className="image-content">
            {props.fieldList.map((item, idx) => {
              return (
                <div className="input-block">
                  <label for={item.name}> {item.name} </label>
                  <input type="text" id={item.name} value={item.value} onchange={(e) => props.onChangeInput} />
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
