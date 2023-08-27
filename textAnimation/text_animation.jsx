import React, {useState, useRef, useEffect} from 'react';
import Button from "../components/button";
import FormComponent from '../components/formComponent';
import AnimatedText from "react-animated-text-content";

export default function TextAnimation() {
    const [inputValue, setInputValue]=useState("");
    const [animatedText, setAnimatedText]=useState("");
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    };
    const handleClear=()=>{
        setAnimatedText(inputValue);
        setInputValue(()=>"");
    };
    let inputText = useRef(null);
    useEffect(()=>{
        inputText.current.focus();
    });

  return (
    <div className='container text-center'>
        <form className='container d-flex m-2' 
            onSubmit={(e)=>e.preventDefault()}>
            <FormComponent 
                labelText={'Type  you text to display here'}
                inputType={'text'} 
                placeHolder={'Your text here'} 
                values={inputValue}
                onChange={handleInputChange}
                reference={inputText}
                />
            <Button 
                text="Clear" 
                btnClass={'btn-large btn-danger ms-2'}
                onClick={handleClear}
            />
        </form>
        {animatedText && (
            <AnimatedText 
                className="title"
                type="char"
                interval={0.04}
                duration={1.1}
                animation={{
                    x:"-150px",
                    y:"250px",
                    ease:"linear",
                }}>
                {animatedText}
            </AnimatedText>)}
    </div>
  )
}
