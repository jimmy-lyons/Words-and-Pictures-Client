import React, { useEffect, useState } from "react";
import './Images.css'
import Image from "./Image/Image";

import imagesJSONObject from '../../resources/images.json'

function Images (props) {
  
  const [imageData, setImageData ] = useState([{
      'id': 0,
      'projectId': 0,
      'image': ""
    }
  ])

//  TODO: need to stop page from crashing when there's no info
  const getProjectImages = async() => {
    const projectKey = `project${props.selectedProject.id}`;
    return imagesJSONObject[projectKey]
  }

  useEffect(() => {
    getProjectImages().then((data) => {
      setImageData(data)
    })
  }, [props.selectedProject])

  const imageArray = imageData.map((image) => {
    return (
      <Image 
      key={ image.id }
      { ... image }
      />
    )
  })

  return (
    <div className="image-container">
      { imageArray }
    </div>
  )
}

export default Images;