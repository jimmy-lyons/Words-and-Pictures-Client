import React from "react";
import './Description.css';

function Description (props) {
  return (
    <div className="Description-container">
        { props.text }
    </div>
  )
}

export default Description;