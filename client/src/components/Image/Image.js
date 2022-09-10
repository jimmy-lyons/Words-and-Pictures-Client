import React from 'react';
import './Image.css';

function Image(props) {
  return (
    <img src={require(`../../project-images/blondie/Blondie.${props.number}.jpg`)} class="Image" alt="Blondie1"/>
  )
}

export default Image;