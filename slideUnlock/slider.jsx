import React from "react";
import './slider.css';

export default function Slider({handleInput, sliderValue, width}){
    let sliderstyle={
        appearance:"none",
        width:!width?"300px":width,
        height:"50px",
        background: "rgba(188, 190, 188, 0.5)",
        outline:"none",
        borderRadius:"25px",
    };
    return(
        <input type="range" 
            className="slider mb-2" 
            style={sliderstyle}
            value={sliderValue}
            onInput={handleInput}/>
    );
}