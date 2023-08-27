import React, {useState} from "react";
import Slider from "./slider";
import {AiFillUnlock} from "react-icons/ai";
import lockScreenimg from "./img/cresent_moon.png";
import homeScreenimg from "./img/home_screen.jpg";

export default function Slidelock(){
    var screenImg;
    const [uiProps, setuiProps]= useState({
        uiText:"Unlock Screen",
        uiColor:"#eee",
        uiBg:`url(${screenImg}) center/cover no-repeat`,
    });
    const [showLockSlider, setShowLockSlider]=useState(true);
    const [lockSliderVal, setLockSliderVal]=useState(0);
    const handleLockSliderInput=(e)=>{
        if(setLockSliderVal(e.target.value)==='0'){
            screenImg = lockScreenimg;
        }else if(setLockSliderVal(e.target.value)==='100'){
            screenImg = homeScreenimg;
        }
    };

    return(
        <div className="container text-center d-flex flex-column
        border-20 shadow-md"
        style={{
            height:"70vh",
            marginTop:"15vh",
            width:340,
            border:"4px solid #000",    
            background:uiProps.uiBg,
        }}>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="title" style={{color:uiProps.uiColor}}>
                    {" "}
                    {uiProps.uiText}</h1>
                {showLockSlider?
                (<Slider width={"250px "} handleInput={handleLockSliderInput}
                value={lockSliderVal}/>):
                (<AiFillUnlock className="unlockIcon "/>
                )}
            </div>
        </div>
    );
}