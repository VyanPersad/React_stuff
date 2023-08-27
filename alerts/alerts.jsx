import React,{useState,useEffect} from "react";
import Button from "../testimonials/button";

export default function Alerts({type, message, delay=false, delayTime}){
    const [showAlert, setAlert] = useState(true);

    const closeAlert = (e)=>{
        e.target.parentElement.classList.add("fadeAlert");
        setTimeout(()=>{
            setAlert(false);
        },500);
    };

    useEffect(()=>{
        delay && setTimeout(()=>{
            setAlert(false);
        }, delayTime);
    });
    return ( showAlert &&
    <div className={`alert alert-${type}`}>
        <div className="alert-close">
            <span className="m-5">{message}</span>
            <Button btnClass={"btn-close"} text={" "} onClick={closeAlert}/>
        </div>
    </div>);
}