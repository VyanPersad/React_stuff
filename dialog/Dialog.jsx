import React, {useEffect, useState} from "react";
import Button from "../components/button";
import {BsFillEmojiFrownFill, BsFillEmojiSmileFill} from "react-icons/bs";
import "./bounce.css";

export default function Dialog({width=350}){
    const [subscribe, setSubscription] = useState({
        title:"Hello",
        description:"Would you like to subscribe?",
        state:null,
        justifyContent:"space-between",
    });
    const handleSubscribe=()=>{
        setSubscription({
            title:"Thank you",
            description:"You have now subscribed.",
            state: "subscribed",
            justifyContent:"flex-end",            
        });
    };
    const handleUnSubscribe=()=>{
        setSubscription({
            title:"Good Bye.",
            description:"Sorry to see you leave.",
            state: "unsubscribed",
            justifyContent:"flex-end",            
        });
    }; 
    const [icon, setIcon]=useState();
    let iconStyle={
        fontSize:"80px",
        justifySelf:"center",
        color:
            subscribe.state === "subscribed"
            ?"rgba(59,137,90,0.4)"
            :"rgba(25,118,160,0.4)",
    };
    useEffect(()=>{ 
        if(subscribe.state==="subscribed"){
            setIcon(<BsFillEmojiSmileFill style={iconStyle}/>);
            document.body.style.background="rgba(59,137,90,0.4)";
        }if(subscribe.state==="unsubscribed"){  
            setIcon(<BsFillEmojiFrownFill style={iconStyle}/>);    
            document.body.style.background="rgba(25,118,160,0.4)";
        }
    },[subscribe.state]);
    const [bounce, setBounce]=useState("")
    useEffect(()=>{
        setTimeout(()=>{
            setBounce("")
        },500);
        return()=>setBounce("bounce");
    },[subscribe.state]);
    return(
        <div className={`card bg-light m-auto mt-4 ${bounce}`}
            style={{width:width}}>
            <div className="card-body">
                <div className="d-grid" 
                    style={{
                        gridTemplateColumns:"2fr 1fr",
                        alignItems: "center",
                        alignSelf: "center",    
                        justifyContent: "center",
                    }}>
                    <section>
                        <h2 className="card-title">{subscribe.title}</h2>
                        <h3 className="card-text">{subscribe.description}</h3>
                    </section>
                    <div>
                        {icon}
                    </div>
                </div>
            </div>
            <hr/>
            <div className="d-flex mb-2 px-1 text-end" 
                    style={{width:"100%",justifyContent:`${subscribe.justifyContent}`,}}>
                {subscribe.state === null && (
                    <Button text={"Cancel"} btnClass={"btn-light m-1"}/>
                )}
                {subscribe.state ==="subscribed" ? null: (
                    <Button 
                        text={"Subscribe"} 
                        btnClass={"btn-danger m-1"} 
                        onClick={handleSubscribe}/>
                )}
                {subscribe.state ==="subscribed" ? (
                    <Button 
                        text={"Unsubscribe"} 
                        btnClass={"btn-danger btn-block m-1"} 
                        onClick={handleUnSubscribe}/>
                ) : null}
            </div>
        </div>
    );
}