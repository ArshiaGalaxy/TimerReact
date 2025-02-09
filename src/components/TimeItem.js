import { useContext } from 'react'
import { context } from './Context';

function TimeItem(props) {
    const list = useContext(context);
    const deleteTime=(e)=>{
        const listTime = list.times.filter((time)=>time!=e.target.innerText);
        list.setTimes(listTime);
    }
    return (
        <li className="time-item" onClick={deleteTime}>
            { props.time }
        </li>
    )
}

export default TimeItem;