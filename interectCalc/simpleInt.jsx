import React, {useEffect, useRef, useState} from 'react';
import FormComponent from "../components/formComponent";
import RateCalc from './rateCalc';

export default function SimpleInt() {
    let inputPrinciple = useRef(null);
    useEffect(()=>{
        inputPrinciple.current.focus();
    }, []);
    const [compound, setCompound]= useState({
        principleAmt:"",
        monthlyCon:null,
        interestRate:"",
        years:"",
    });
  return (
    <div className='container'>
      <div className='card card-primary bg-warning shadow p-3 text-dark m-auto mt-4'
      style={{maxWidth:300}}>
        <div className='card-body'>
            <FormComponent
                labelText={'Principle Amount $'}
                inputType={'number'}
                values={compound.principleAmt}
                onChange={(e)=>setCompound({...compound, principleAmt:e.target.value})}
                reference={inputPrinciple}/>{" "}
            <FormComponent
                labelText={'Monthly Contribution $'}
                inputType={'number'}
                values={compound.monthlyCon}
                onChange={(e)=>setCompound({...compound, monthlyCon:e.target.value})}/>{" "}
            <FormComponent
                labelText={'Interest Rate %'}
                inputType={'number'}
                values={compound.interestRate}
                onChange={(e)=>setCompound({...compound, interestRate:e.target.value})}/>{" "}         
            <FormComponent
                labelText={'Years of Investment'}
                inputType={'number'}
                values={compound.years}
                onChange={(e)=>setCompound({...compound, years:e.target.value})}/>{" "}                                          
        </div>
        <div className='card-footer text-end fs-lg'>
            <RateCalc
                principleAmt={compound.principleAmt}
                monthlyCon={compound.monthlyCon}
                interestRate={compound.interestRate}
                years={compound.years}/>
        </div>
      </div>
    </div>
  );
}
