import React,{useState,useEffect} from 'react'

function HookMouseRunUseEffectOnlyOnce() {
    const [x , setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('run useEffect');
        window.addEventListener('mousemove',logMousePosition)
    },[])
    return (
        <div>
            Hooks x-{x} y-{y}
        </div>
    )
}

export default HookMouseRunUseEffectOnlyOnce
