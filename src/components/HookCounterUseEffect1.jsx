import React,{useEffect,useState} from 'react'


//useEffect run after every component renders
//it replace componentDidMount and componentDidUpdate
function HookCounterUseEffect1() {
    const [count , setCount] = useState(0);
    const [name , setName] = useState('');
    
    useEffect(() => {
        console.log('updating doc title')
        document.title =`you have clicked ${count} Times`
    },[count])//[] specify state or props that when to update useEffect | other word useEffect here depend on count value
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count+1)}> count {count} times</button>
        </div>
    )
}

export default HookCounterUseEffect1
