import React from 'react';
import './Image.css';

function Image (props) {
  return (
    <img src={ props.image } className="Image" alt="project"/>
  )
}

export default Image;