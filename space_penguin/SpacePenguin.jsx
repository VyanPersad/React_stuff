import React, {useState, useEffect} from 'react';
import "./ship.css";
import Button from "../components/button";

import SpaceShip from './objects/spaceShip';
import PlanetObj from './objects/planetObj';
import MoonObj from './objects/moonObj';

import Ship from "./svg/rocket.jpeg";
import Earth from "./svg/earth.png";
import Moon from './svg/moon.png';
import Penguin from './svg/penguin.jpeg';

export default function SpacePenguin() {
  //const[shipAction, setShiptAction]=useState();
  //const[transformScale, settransformScale]=useState(200);
  const[shipProps, setShipProps]=useState({
    action:"",
    scale:200,
  })
  const startShip=()=>{
    //setShiptAction("fly");
    //settransformScale(50);
    setShipProps({action:"fly", scale:50});
  };

  const landShip=()=>{
    //setShiptAction("land");
    //settransformScale(200);
    setShipProps({action:"land", scale:200});
  }; 
  
  const[shipType, setShiptype]=useState(Ship);
  useEffect(()=>{
    if(shipProps.action==="land"){
      setShiptype(Penguin);
      setTimeout(()=>{
        setShiptype(Ship)
      },5500);
    } 
    if(shipProps.action==="fly"){
      setShiptype(Ship);
    }
  },[shipProps.action]);

  return (
    <div className="space">

      <Button text={"Launch"} btnClass={"btn-danger"}
      onClick={startShip}/>
      <section className="env">
        <SpaceShip 
          changeShip={shipType} 
          scale={shipProps.scale} 
          start={shipProps.action}
          />
        <MoonObj Moon={Moon}/>
        <PlanetObj Planet={Earth}/>
      </section>
      <Button text={"Land"} btnClass={"btn-info"}
      onClick={landShip}/>    
    </div>
  );
}
