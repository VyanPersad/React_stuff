import React from 'react';

export default function RateCalc({
    principleAmt,
    interestRate,
    years,
    monthlyCon,
}) {
    const A = {
        P:principleAmt,
        r:interestRate/100,
        n:12,
        t:years,
        pmt:monthlyCon,
    };
  return (
    <div>
      ${" "} 
      {A.pmt===null
        ? (A.P*(Math.pow((1+(A.r/12)),(12*A.t)))).toFixed(2)
        : (
            A.P*(Math.pow((1+(A.r/12)),(12*A.t)))+
            (A.pmt*(Math.pow((1+(A.r/12)),(12*A.t))-1))/(A.r/12)).toFixed(2)
        }
    </div>
  );
}
