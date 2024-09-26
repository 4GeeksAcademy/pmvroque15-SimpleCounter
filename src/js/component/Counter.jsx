import PropTypes from "prop-types";
import React,  { useState, useEffect } from "react";

const Counter = (props) => {
    
    return (
    
        <div className="counter-display">
            
            <div className="seconds thousands">{props.thousandsDigit}</div> 
            <div className="seconds hundreds">{props.hundredsDigit}</div>
            <div className="seconds tens">{props.tensDigit}</div>   
            <div className="seconds ones">{props.onesDigit}</div>
           
        </div>
    )
    
}

Counter.PropTypes = {
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigit: PropTypes.number
}

export default Counter 