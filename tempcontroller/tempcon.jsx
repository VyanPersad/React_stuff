import React, {useState} from "react";
import Button from "../testimonials/button";

export default function Tempcon(){

    const [temp, setTemp]=useState(0);

    const incTemp=()=>{
        setTemp(temp+1);
    }

    const decTemp=()=>{
        setTemp(temp-1);
    }
    return(
        <div className="container mt-3 text-centre">
            <div className="card bg-light m-auto align-items-center " style={{width:200}}>
                <h1 className={`text-light card border-50 rounded-circle 
                    justify-content-center m-1
                    ${temp>0 ?"bg-danger":"bg-info"}`}
                    style={{height:150, width:150, border:"2px solid #666"}}>
                    {temp}°C
                </h1> 
                <div className="d-flex m-2 justify-content-center">
                    <Button type="button" text="-" btnClass={"btn btn-primary m-2 flex-fill"} 
                        onClick={decTemp}/>
                    <Button type="button" text="+" btnClass={"btn btn-danger m-2 flex-fill"} 
                        onClick={incTemp}/>
                </div>
            </div>
        </div>
    );
}