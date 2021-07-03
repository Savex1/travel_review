import React from 'react'

export const FormInput = ({label, inputName, changeHandler, ...inputProps}) =>  {
    return (
        <div className='form-input'>
            {label && <label className='form-input_label' htmlFor={`from${inputName}`}>
                {label}
            </label>}
            <input className='form-input__field'
            id = {`from${inputName}`}
            onChange={changeHandler}
            name={inputName}
            {...inputProps}
            />
        </div>
    )
}
