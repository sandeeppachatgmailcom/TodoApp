import React, { useEffect, useState } from 'react'
import './time.css'

function TimeBoard (){
    const [time,setTime]  = useState('')
    const [date,setDate] = useState('')
    useEffect(()=>{
        setInterval(() => {
            const timeStamp = Date.now();
            const temp = new Date(timeStamp)
            const localTimeString = temp.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              });

            const localDateString = temp.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
            setTime(localTimeString)
            setDate(localDateString)
        }, 1000);
    },[]) 
    return(
        <div className='container-flex border m-1 rounded timeBoard text-light text-left '>
             <h6> {date}</h6>
            <h6> {time}</h6>
        </div>
    )
}

export default TimeBoard;