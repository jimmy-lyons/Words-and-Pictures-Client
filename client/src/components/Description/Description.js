import React from "react";
import './Description.css';

function Description (props) {

  return (
    <div className="Description-container">
        { props.description }
    </div>
  )
}

export default Description;