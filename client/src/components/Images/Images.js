import React from "react";
import './Images.css'
import Image from "./Image/Image";

function Images () {
  const imageNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
  const imageArray = imageNumbers.map((imgNo) => {
    return (
      <Image 
      key={imgNo}
      number={imgNo}
      />
    )
  })

  return (
    <div>
      { imageArray }
    </div>
  )
}

export default Images;