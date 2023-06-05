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

  const getProjectImages = async() => {
//    try {
//      const { data } = await endpoints.fetchProjectImages(props.selectedProject.id)
//      return data
//    } catch (error) {
//      console.log("Error when fetching project images: ", error)
//    }
    return imagesJSONObject.blondie
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