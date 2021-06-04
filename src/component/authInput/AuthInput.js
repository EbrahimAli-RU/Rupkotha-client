import React from 'react';

const AuthInput = (props) => {

    return (
        <label className='auth__input__custom-field'>
            <input className='auth__input__input-field'  type='text' required />
            <span className='auth__input__placeholder'>{props.placeholder}</span>
        </label>
    );
};

export default AuthInput;