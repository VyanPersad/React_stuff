import React, { useState } from "react";
import Title from "./title";
import Text from "./text";

export default function RandomizeColor(){
    const [text, setText] = useState("");
    const randomise1Col=(e)=>{
        let body = document.querySelector("body");
        body.style.background = getRandoCol();
    }; 
    const randomise2Col=(e)=>{
        setText(getRandoCol())
        
    };

    function getRandoCol(){
        let char ="0123456789ABCDEF";
        let col = "#";
        for (let i=0;i<6;i++){
            col = col+char[Math.floor(Math.random()*16)];
        }
        return col;
    }
    return( 
    <div className="container m-auto">
        <Title text={"Randomise Colour"} classes={"mb-4"}/>
        <button className="btn btn-danger m-2" onClick={(e)=>randomise1Col()}>
            Clck 4 BckGrnd</button>
        <button className="btn btn-success m-2" onClick={(e)=>randomise2Col()}>
            Clck 4 Text</button>
        <Text text={text}/>    
    </div>
    );
}