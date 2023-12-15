import React, { useState } from 'react';

export default function TextForm(props) {

    const handleOnClick = (e)=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();   
        setText(newText)
        // console.log("text",text)
    }

    const handleOnChange = (e)=>{
        console.log("Onchange Called")
        setText(e.target.value);
    }

    const [text,setText] = useState("Please Type Here")
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control" value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert To UPPERCASE</button>
    </div>
    );
}
