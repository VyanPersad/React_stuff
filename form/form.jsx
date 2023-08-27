import React, {useRef,useEffect, useState} from 'react';
import Title from "../components/title";
import Button from "../components/button";
import Alert from "../components/alerts";

export default function Form() {
    let inputName =  useRef(null);
    useEffect(()=>{
        inputName.current.focus();
    },[]);
    let inputPassword =  useRef(null);
    let inputEmail =  useRef(null);
    
    const [values, setValues]=useState({
        username:'',
        email:"",
        password:"",
    })
    const [submit, setSubmit]=useState(false);
    const [valid, setValid]=useState(false);

    const handleNameChange=(e)=>{
        setValues({...values,username:e.target.value });
    }
    const handleEmailChange=(e)=>{
        setValues({...values,email:e.target.value});
    }
    const handlePassChange=(e)=>{
        setValues({...values,password:e.target.value});
    }        
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!values.username){
            inputName.current.focus()
        } else if(!values.email){
            inputEmail.current.focus()
        } else if(!values.password){
            inputPassword.current.focus()
        }
        if(values.username && values.email && values.password){
            setValid(true);
        }
        setSubmit(true);
    };

  return (
    <div className="m-auto">
        {submit && valid?(
            <>
                <Alert 
                    type={"success"} 
                    message={"Registration Successful"} 
                    delay={true}
                    delayTime={5000 }/>  
                <Title text={`Welcome ${values.username}`}/>
            </>
        ):(
            <div className="container m-auto mt-4 p-2 shadow-sm border-5">
            <Title text={"Registration"}/>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input 
                        type='text' 
                        placeholder='Enter your name' 
                        ref={inputName} 
                        value={values.username}
                        onChange={handleNameChange}/>
                        {submit && !values.username ? (<label className='text-danger fs-sm mt-2'>Enter name here</label>):null}        
                </div>{" "}
                <div className='form-group'>
                    <input 
                        type='mail' 
                        placeholder='Enter your email' 
                        ref={inputEmail} 
                        value={values.email}
                        onChange={handleEmailChange}/>
                        {submit && !values.email ? (<label className='text-danger fs-sm mt-2'>Enter e-mail here</label>):null}            
                </div>{" "}
                <div className='form-group'>
                    <input 
                        type='password' 
                        placeholder='Enter your password' 
                        ref={inputPassword} 
                        value={values.password}
                        onChange={handlePassChange}/>
                        {submit && !values.password ? (<label className='text-danger fs-sm mt-2'>Enter password here</label>   ):null}
                </div>
                <Button btnClass={"btn-primary btn-lg btn-block mt-3"} text="Register"/>
            </form>
          </div>
        )}
    </div>
  );
}
