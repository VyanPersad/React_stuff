import React from "react";
import SliderComp from "./slidercomp";
import Title from "../components/title";
import { useState } from "react";

export default function SliderApp(){
    const [slideVal, setSlideVal] = useState(0);

    const handleSliderValChange = (e) =>{
        setSlideVal(e.target.value);
    };
    let bgCol;
    let textCol;

    if(slideVal<25){
        bgCol="red";
        textCol="white";
    }
    if(slideVal>25 && slideVal<=50){
        bgCol="blue";
        textCol="white"
    }
    if(slideVal>51 && slideVal<=75){
        bgCol="green";
        textCol="white"
    }
    if(slideVal>75){
        bgCol="orange";
        textCol="white"
    }
    if(slideVal==100){
        bgCol="red";
    }
    return(
        <div className="container text-center">
            <Title text={"Slide to Grow"}/>
            <SliderComp 
                setValue={slideVal} 
                handleInput={handleSliderValChange}
                bgCol={bgCol}
                textCol={textCol}/>
        </div>
    )
}