import React, { useState } from "react";
import Title from "../rando-colours/title";
import dog from "../dog-like/imgs/dog.png";
import {GoSmiley} from "react-icons/go";
import {AiFillHeart, AiOutlineHeart, AiOutlineComment} from "react-icons/ai";

export default function Likephoto(){

    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);
    const toggleLike=()=>{
        if(!like){
            setLike(true);
            setCount(count+1);
        }else{
            setLike(false);
            setCount(count-1);
        }
    };
    return(
        <div className="container">
            <Title text={"Like a photo"}/>
            <Title classes={"Subtitle"} text={`Likes ${count}`}/>
            <div className="card card-dark m-auto" 
                style={{width: 300,cursor:"pointer"}} 
                onDoubleClick={toggleLike}>
                <div className="card-header fs-xl">
                    <GoSmiley className="me-1"/>
                    <small>Doggy</small> 
                </div>
            <img src={dog} alt="img" style={{height:"fit-content"}}/>
                <div className="card-footer fs-xl d-flex"
                    style={{justifyContent:"space-between"}}>
                        <AiOutlineComment/>{" "}
                        {like ? (<AiFillHeart className="text-danger" onClick={toggleLike}/>)
                              : (<AiOutlineHeart onClick={toggleLike}/>)}
                </div>
            </div>
        </div>
    )
}