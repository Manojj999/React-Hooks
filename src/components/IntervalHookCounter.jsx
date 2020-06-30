import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const[count , setCount] = useState(0);
    const tick = () => {
        setCount(prevCount => prevCount+1);
    }
    useEffect(() => {
        const internal = setInterval(tick ,1000);
        return () => { //use as ComponentDidUnmount
            clearInterval(internal);
        }
    },[count])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter
