import React,{useState, useEffect} from "react";
import Popup from "../components/Popup.components";
import Button from '../components/button';
import Title from '../components/title';


export default function PopUpApp(){
    const [trigger, setTrigger]= useState(false);
    const [timeTrigger, settimeTrigger]= useState(false);
    const [timeTriggerWarning, settimeTriggerWarning]= useState(false);
    const triggerPopup = () =>{
        setTrigger(true);
    };
    useEffect(()=>{
        setTimeout(()=>{
            settimeTrigger(true);
        },3000);
        setTimeout(()=>{
            settimeTriggerWarning(true);
        },5000);
    },[])
    return(
        <div className="text-center">
            <Title text={"Click for Pop-Up"}/>
            <Button text={"Click"} btnClass={"btn-primary"} onClick={triggerPopup}/>
            <Popup type={"alert-info"} 
                        title={"Triggered Popup"}
                        text={"Pop up triggered!!!"}
                        handleClose={setTrigger}
                        trigger={trigger}
            />{" "}
            <Popup type={"alert-danger"} 
                        title={"Time Triggered Popup"}
                        text={"Pop up triggered by Time!!!"}
                        handleClose={settimeTrigger}
                        trigger={timeTrigger}
            />
            <Popup type={"alert-warning"} 
                        title={"Time Triggered Popup"}
                        text={"Pop up triggered by Warning Time!!!"}
                        handleClose={settimeTriggerWarning}
                        trigger={timeTriggerWarning}
            />            
        </div>
    ); 
}