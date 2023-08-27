import React from "react";

export default function SliderComp({setValue, handleInput, bgCol, textCol,}){
    const sliderStyle={
        appearance:"none",
        width:"100%",
        height:25,
        //background:!bgCol ?"lightgray":bgCol,
        background:"lightgray",
        courser:"pointer",
        opacity:0.7,
    };
    return(
        <div className="container d-flex flex-column" style={{gap:100}}>
            <input type="range" min="0" max={100} 
                value={setValue}
                onInput={handleInput}
                style={sliderStyle}/>    
                <div style={{
                    color:!textCol ?"black":textCol,
                    background:!bgCol ?"lightgray":bgCol,
                    height: `${setValue*3}px`,
                    width:`${setValue*3}px`,
                    fontWeight:600,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:"50%",
                }}>
                    <span>{setValue}</span>
                </div>
        </div>
    );
}