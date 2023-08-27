import React,{useState} from 'react';
import Title from "../projects/components/title";


export default function EsigApp(){
    const [name, setName]=useState("");
    const [date, setDate]=useState("");
    const handlenameChange=(e)=>{
        setName(e.target.value); 
    }
    const handledateChange=(e)=>{
        setDate(e.target.value); 
    }
    const inputStyle={
        border: "none",
        borderBottom:"2px dotted",
        outline: "none",
        padding: "0.35rem0",
        margin: "5px"
    };
    document.body.style.background = "#eee";
    return (
        <div>
            <Title text={name}/>
            <Title classes={"mb-4"} 
            text={!date 
                ?"DoB"
                : date}/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Commodi doloribus nulla ratione, delectus, animi culpa 
                molestias maxime porro quaerat repellendus itaque quo 
                odit eligendi eaque doloremque impedit fuga alias. 
                
                Culpa?
            </p>
            <footer className='d-flex' style={{
                justifyContent: "space-around",
                position: "relative",
                top:"40vh"            
                }}>
                <input type='date' value={date} style={inputStyle}
                onChange={handledateChange}/>
                <input type='text' value={name} style={inputStyle} 
                onChange={handlenameChange}/>
            </footer>
            
        </div>
    )
}