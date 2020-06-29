import React,{useState} from 'react'

function HookCounter() {

    // count -> initial state with 0 value
    const [count,setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count+1)}>count {count}</button>
        </div>
    )
}

export default HookCounter
