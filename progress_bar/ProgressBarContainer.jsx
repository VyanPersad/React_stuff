import React,{useRef, useEffect, useState } from "react";
import Title from "../components/title";
import { ProgressBar } from "../components/progressbar";

export default function ProgressivebarContainer(){
    const [completed, setCompleted]= useState(52);
    const [status, setStatus]= useState({
        ui:55,
        ux:33,
        data:20,
    });
        
    const projectDate=[
        {bgColor:"#7633f9",completed:status.ui},
        {bgColor:"#28a745",completed:status.ux},
        {bgColor:"#dc3545",completed:status.data},
    ];
    const inputStyle={
        width:50,
        border:"none",
        outline:"none",
        textAlign:"center",
        borderBottom:"1px solid lightgray",
    };

    const uiInput=useRef(null);

    useEffect(()=>{
        uiInput.current.focus();
        setInterval(()=>setCompleted(Math.floor(Math.random()*100)+1),3000);
    },[]);
    return(
        <div className="container container-sm mx-auto text-center">
            <Title text={"Progress Bar"}/>
            <h2>Project Status</h2>
            <ul>
                <li>
                    UI Status:{" "}
                    <input
                        type="number"
                        style={inputStyle}
                        ref={uiInput}
                        value={status.ui}
                        onChange={(e)=>setStatus({...status, ui:e.target.value})}
                    />
                </li>
                <li>
                    UX Status:{" "}
                    <input
                        type="number"
                        style={inputStyle}
                        ref={uiInput}
                        value={status.ux}
                        onChange={(e)=>setStatus({...status, ux:e.target.value})}
                    />
                </li>
                <li>
                    DATA Status:{" "}
                    <input
                        type="number"
                        style={inputStyle}
                        ref={uiInput}
                        value={status.data}
                        onChange={(e)=>setStatus({...status, data:e.target.value})}
                    />
                </li>
            </ul>
            {projectDate.map((data, idx)=>(
                <ProgressBar 
                    key={idx}
                    bgColor={data.bgColor} 
                    completed={data.completed}
                />))}
                <ProgressBar 
                    bgColor={completed>50?"#7633f9":"#dc3545"} 
                    completed={completed}
                />
        </div>
    );
}