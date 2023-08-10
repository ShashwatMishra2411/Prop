import React from 'react'
import { useState, useEffect } from 'react'

export default function ChangeState(){
    let [one, setOne] = useState(<div key={1} className='sdiv1' onClick={handleOnClick}>Hi</div>)
    function handleOnClick(){
        setInterval(()=>{
            setOne(<div key={1} className='sdiv1 btn btn-secondary' onClick={handleOnClick}>Enter Your FeedBack</div>)
            setTimeout(()=>{
                setOne(<div key={1} className='sdiv1' onClick={handleOnClick}>Hi</div>)
            }, 2000)
        }, 3000)
    }
    useEffect(() => {
        // Call the handleOnClick function after the component mounts
        handleOnClick();
    },[]); // Empty dependency array to run the effect only once
    return(one);
}

// In react docs, stopping propagation in responding to events is very important