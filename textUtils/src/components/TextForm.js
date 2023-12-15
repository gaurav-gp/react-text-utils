import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = (e) => {
    //console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("text",text)
  };

  const handleLowClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    //console.log("Onchange Called")
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>
          Convert To UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes for read</p>
      </div>
    </>
  );
}
