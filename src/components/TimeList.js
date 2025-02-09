import { useContext } from 'react'
import { context } from './Context';
import TimeItem from './TimeItem'
import '../assets/css/timelist.css';

function TimeList() {
    const list = useContext(context);
    return (
        <ul id='time-list'>
            <p>Times List</p>
            {
            list.times.map((time, index)=>(
                <TimeItem key={index} time={time}/>
            ))
            }
        </ul>
    );
}

export default TimeList;