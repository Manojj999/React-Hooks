import React,{useState} from 'react'
import HookMouseRunUseEffectOnlyOnce from './HookMouseRunUseEffectOnlyOnce'

function MouseContainer() {
    const[display , setDisplay] = useState(true)
    return (
        <div>
           <button onClick={() => setDisplay(!display) }>Toggle Display</button> 
           {display && <HookMouseRunUseEffectOnlyOnce/>}
        </div>
    )
}

export default MouseContainer
