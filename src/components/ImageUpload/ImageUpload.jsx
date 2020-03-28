import React from 'react'
import './ImageUpload.css'
import ImageDrop from './ImageDrop'
import ImageSmall from './ImageSmall'

const ImageUpload = () => {
  return (
    <div className="ImageUpload">
      <ImageDrop />
      <div className="images-list">
        <ImageSmall />
        <ImageSmall />
        <ImageSmall />
        <ImageSmall />
      </div>
    </div>

  )
}

export default ImageUpload
