import React from 'react'
import axios from 'axios'
import Icon from '../icons'
import { useState, useRef } from 'react'

const ImageDrop = () => {

  const [selectedFile, setSelectedFile] = useState()

  const fileInput = useRef(null)
  const onButtonClick = () => {
    fileInput.current.click()
  }

  const fileSelectedHandler = e => {
    setSelectedFile(e.target.files[0])
  }

  const fileUploadHandler = e => {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name)
    // axios.post('url', fd, onUploadProgress: progressEvent => {
    //   console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%')
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
  }


  return (
    <div className="ImageDrop">
      <div className="image-drop">
        <Icon icon="construction" />
        <p><strong onClick={onButtonClick}> Choose a file </strong> or drag it here</p>
        <input style={{ display: "none" }} type="file" onChange={fileSelectedHandler}
          ref={fileInput} />
        {/* <button onClick={onButtonClick} >Pick File</button> */}
        <button onChange={fileUploadHandler}>Upload</button>
      </div>
    </div>
  )
}



export default ImageDrop;
