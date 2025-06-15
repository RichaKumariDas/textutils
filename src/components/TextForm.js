import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
     props.showAlert("converted to uppercase", "success");
  }
   const handleLowClick = () =>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("converted to lowercase", "success");
  }
  const handleClClick = () =>{
    // console.log("Lowercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("text cleared", "success");
  }

  const handleCopy = () =>{
    // console.log("Lowercase was clicked" + text);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard", "success");
  }
  const handleExtraspaces = () =>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed", "success");
  }
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
   
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container"style = {{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value ={text} onChange ={handleOnChange} style = {{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>copy text</button>
   <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>remove extra space</button> 
    </div>
    <div className="container my-3" style = {{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length}  words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
