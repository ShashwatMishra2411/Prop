import React from 'react'
import { useState } from 'react';
export default function Form(){
    let [text,setText]= useState("Enter the text")
    function handleOnClick(){
        setText(text.toUpperCase())
    }
    function handleOnChange(e){
        text = e.target.value
        setText(text)
    }
    function handleOnLower(e){
      setText(text.toLowerCase())
  }
    function handleOnClear(){
      text = ''
      setText(text)
    }
    let time = text.split(" ").length*(1/250)
    let disp;
    if(time<1)
    {
      time = time*60
      disp = `${time} seconds`
    }
    else{
      disp = `${time} minutes`
    }
    return (
        <>
        <form className='pharum' onSubmit={(e)=>{
          e.preventDefault()
        }}>
          {/* This prevents the form to refresh the whole page on clicking submit button */}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary fb">Submit</button>
</form>
<div className="tarea">
  <h1 className="thead">FeedBack:</h1>
  <textarea name="" id="tarea" value={text} onChange={handleOnChange} cols="30" rows="10"></textarea>
  <div className="buttons">
  <button className='btn btn-primary cb' onClick={handleOnClick} >Convert To UPPERCASE</button>
  <button className='btn btn-primary cb' onClick={handleOnLower} >Convert To lowercase</button>
  <button className='btn btn-primary cb' onClick={handleOnClear} >Clear</button>
  </div>
  <h2 className="wc">Your feedback has {text.split(" ").length} words and {text.length} letters</h2>
  <h3 className="timeToRead">It will take me {disp} minutes to read your feedback</h3>
  </div>
  </>
    );

}