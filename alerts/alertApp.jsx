import React from "react";
import Alerts from "./alerts";

export default function Alert(){
    return(
        <div className="container mx-auto">
            <Alerts type={"success"} message={"Login Successful"}/>
            <Alerts type={"info"} message={"Time Trigger"} delay={true} delayTime={3000}/>
        </div>
    )
}