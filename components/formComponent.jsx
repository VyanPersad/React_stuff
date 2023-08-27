import React from 'react'

export default function FormComponent({
    labelText, 
    inputType, 
    placeHolder,
    values,
    onInput,
    onKeyUp,
    onChange,
    className,
    readOnly=false,
    reference,
}) {
  return (
        <div className='form-group'>
            <label className='m-1'>{labelText}</label> 
            <input 
                type={inputType} 
                placeholder={placeHolder} 
                value={values} 
                onInput={onInput}
                onKeyUp={onKeyUp}
                onChange={onChange}
                className={className}
                readOnly={readOnly}
                ref={reference}/>
        </div>

  )
}
