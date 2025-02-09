import { context } from './Context';
import { useState, useEffect, useContext } from 'react';
import '../assets/css/timer.css';

function Timer () {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const list = useContext(context);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if (isActive){
        setTime(time + 1);
      }
    }, 1000);
    return()=>clearInterval(interval);
  },[isActive, time]);

  const start = () => {
    setIsActive(true);
  }

  const stop = () => {
    setIsActive(false);
  }

  const reset = () => {
    setTime(0);
  }

  const save = () => {
    const time = list.times.filter((time)=>time==document.querySelector('#timer').innerText);
    if (time.length === 0){
      list.setTimes([...list.times, ([document.querySelector('#timer').innerText])]);
    }
  }

  return(
    <div>
      <span onClick={save} id='timer'>{`${(((time - (time - time % 60) / 60 * 60 - time % 60) / 3600).toString().length===2?(time - (time - time % 60) / 60 * 60 - time % 60) / 3600:'0'+(time - (time - time % 60) / 60 * 60 - time % 60) / 3600)}:${(((time - time % 60) / 60).toString().length===2?(time - time % 60) / 60:'0'+(time - time % 60) / 60)}:${(time % 60).toString().length===2?time % 60:'0'+time % 60}`}</span>
      <div className='btn-menu'>
        <button className='btn btn-green' onClick={start}>Start</button>
        <button className='btn btn-red'   onClick={stop}>Stop</button>
        <button className='btn btn-gray'  onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer;
