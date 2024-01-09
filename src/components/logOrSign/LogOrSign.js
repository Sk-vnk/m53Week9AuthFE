import React from 'react'
import Signup from '../signup/Signup';
import "./LogOrSign.css";

const LogOrSign = () => {
  return (
<div className="logorsign-wrapper">
    <div className="logorsign-inner-container">
        <div className="logorsign-box">
            <Signup />
        </div>
        <div className="logorsign-box"></div>
    </div> 
</div>
  )
};

export default LogOrSign;