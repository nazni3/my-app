import React, {useState} from 'react'


export default function TextForms(props) {
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();

        setText(newText)
    }
    const handleLoClick = ()=>{
      // console.log("UpperCase was clicked" + text);
      let newText = text.toLowerCase();

      setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = ' ';

    setText(newText)
}
 
  const [text, setText] = useState('Enter text here ...');

  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>  
      
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
</div>
<button className= "btn btn-primary mx-2" onClick={handleUpClick} >
Convert to UpperCase!</button>

<button className= "btn btn-primary mx-2" onClick={handleLoClick} >
Convert to LowerCase!</button>

<button className= "btn btn-primary mx-2" onClick={handleClearClick} >
Clear Text!</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p>{0.008* text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </> 
  )
}
