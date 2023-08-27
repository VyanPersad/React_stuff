import React, {useState} from 'react';
import Title from '../components/title';
import Form from '../components/formComponent';
import Button from '../components/button';

export default function MortgageCalc() {
    
    const [homeValue, setHomeValue]=useState('');
    const [downPayment, setDownPayment]=useState('');
    const [loanAmount,setLoanAmount]=useState('');
    const [loanDuration,setLoanDuration]=useState('');
    const [interestRate,setInterestRate]=useState('');
    const [monthlyPayment,setMonthlyPaymment]=useState('');

    function calcLoanAmt(){
        setLoanAmount(homeValue-downPayment);
        return loanAmount;
    }
    function calcMonthlyPayment(){
        function percentDeci(percent){
            return percent/12/100;
        }
        function yrstoMons(yrs){
            return yrs*12;
        }
        setMonthlyPaymment(
            (percentDeci(interestRate)*loanAmount)
            /(1-Math.pow(1+percentDeci(interestRate),-yrstoMons(loanDuration)))
        );
        return monthlyPayment;
    }
    let alertClass;
    monthlyPayment
        ? (alertClass='alert-success')
        : (alertClass='alert-danger');

  return (
    <div className='container mt-4' style={{width:500}}>
      <Title text={'Mortgage Calc App'}/>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className='d-grid' 
            style={{gridTemplateColumns:'1fr 1fr', gap:10}}>
                <Form 
                    labelText={'Home Value'} 
                    inputType={'number'}
                    placeHolder={'Enter home value'}
                    values={homeValue}
                    onInput={(e)=>setHomeValue(e.target.value)}
                    onKeyUp={calcLoanAmt}
                    />{' '}
                <Form 
                    labelText={'Down Payment'} 
                    inputType={'number'}
                    placeHolder={'Enter funds'}
                    values={downPayment}
                    onInput={(e)=>setDownPayment(e.target.value)}
                    />{' '}                
        </div>
        <Form 
            className={'mt-3 bg-light ps-2'}
            labelText={'Loan Amount'} 
            inputType={'number'}
            placeHolder={'Calculated Loan Amount'}
            readOnly={true}
            values={loanAmount}
            />{' '}    
        <div className='d-grid'
            style={{gridTemplateColumns:'1fr 1fr', gap:10}}>
                <Form 
                    labelText={'Interest Rate'} 
                    inputType={'number'}
                    placeHolder={'Enter Interest Rate'}
                    values={interestRate}
                    onInput={(e)=>setInterestRate(e.target.value)}
                    />{' '}
                <Form 
                    labelText={'Loan Duration (yrs.)'} 
                    inputType={'number'}
                    placeHolder={'Enter Loan Duration'}
                    values={loanDuration}
                    onInput={(e)=>setLoanDuration(e.target.value)}
                    />{' '}  
        </div>   
        <Button btnClass={'btn-info btn-block mt-2'} text={'Calculate'}
            onClick={calcMonthlyPayment}/> 
            <h4 className={`${(alertClass = 'alert-danger')}`}
            style={{width:'auto',margin:'1 rem 0'}}>
                {monthlyPayment
                    ?`Monthly Payment: $ ${monthlyPayment.toFixed(2)}`
                    :'Complete All Fields'
                    }
            </h4>
      </form>
    </div>
  );
}
