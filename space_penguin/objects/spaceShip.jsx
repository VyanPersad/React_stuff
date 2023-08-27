import React from 'react';

export default function SpaceShip({changeShip,scale,start}) {
    let animation = start;
  return (
    <div>
      <>
        <img src={changeShip} alt='Space Ship'
        style={{
            position:"absolute", 
            bottom:50, 
            zIndex:1,
            width:scale
        }} 
        className={animation}/>
      </>
    </div>
  )
}
