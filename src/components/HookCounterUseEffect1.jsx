import React,{useEffect,useState} from 'react'


//useEffect run after every component renders
//it replace componentDidMount and componentDidUpdate
function HookCounterUseEffect1() {
    const [count , setCount] = useState(0);
    useEffect(() => {
        document.title =`you have clicked ${count} Times`
    })
    return (
        <div>
            <button onClick={() => setCount(count+1)}> count {count} times</button>
        </div>
    )
}

export default HookCounterUseEffect1
