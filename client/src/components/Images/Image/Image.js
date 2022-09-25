import React from 'react';
import './Image.css';

function Image (props) {
  return (
    <img src={ 'http://localhost:8000' + props.image } className="Image" alt="project"/>
  )
}

export default Image;