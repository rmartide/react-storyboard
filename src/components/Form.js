import React from 'react'

const Form = React.forwardRef((props, ref) => {
    const {onChange, label} = props;
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <label>{label}:</label>
            <input type="text" ref={ref} onChange={onChange}></input>
        </div>
    )
})

export default Form;
