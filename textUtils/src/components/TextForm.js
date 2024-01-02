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

  const handleOnClear = (e) => {
    //console.log("OnClear Called")
    // setText(e.target.value);
    let blankText = "";
    setText(blankText);
  };
  const handleSentenceClick = (e) => {
    //console.log("OnClear Called")
    // setText(e.target.value);
    let sentext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(sentext);
    // console.log("Sentence Called",sentext)
  };
  const handleInverseClick = (e) => {
    //console.log("OnClear Called")
    // setText(e.target.value);
    let upper =text.toUpperCase()
    let sentext = upper.charAt(0).toLocaleLowerCase() + upper.slice(1);
    setText(sentext);
    console.log("Inverse Called",sentext)
  };
  const handleReverseClick = (e) => {
    //console.log("OnClear Called")
    // setText(e.target.value);
    let reverse = text.split('').reverse().join('');
    setText(reverse);
    console.log("Reverse Called",reverse)
  };
  const handleCopy = (e) => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace = (e) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{ backgroundColor: props.mode === 'dark'?'grey':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>
          Convert To UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>
          Convert To Sentence Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>
          Convert To Inverse Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Convert To Reverse Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnClear}>
          Clear Text
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
