import React from 'react';
import './inputForm.scss';


const InputForm = ({ label, ...otherInputProp}) => {
    return (
        <div className='group'>
            <input className='form-input'  {...otherInputProp} />
            {label ?
                ( <label className={`form-input-label ${otherInputProp.value.length === 0 ? '' : 'shrink'}`}
                >{label}</label>)
                : null }
        </div>
    );
};

export default InputForm;
