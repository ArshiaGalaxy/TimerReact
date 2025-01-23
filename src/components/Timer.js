import { useState } from 'react';
import '../assets/css/timer.css';

function Timer(){
    const [time, setTime] = useState(0);
    setInterval(()=>{
        const date = new Date();

        setTime(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
    }, 1000);
    return(
      <span id='timer'>{time}</span>
    )
}

export default Timer;
