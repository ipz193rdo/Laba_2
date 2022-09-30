import React from 'react'
import { useState } from 'react'

const MyCounter = ({id, initial=0, min=-10 , max=10}  ) => {
    const [count, setCount] = useState(initial)
    
  return (
    <div className='counter'>
        <h2>{id}. Поточний рахунок: {count}</h2>
        <button onClick={() => count === max ? max : setCount(count+1)}>+</button>
        <button onClick={() => count === min ? min : setCount(count-1)}>-</button>
        <button onClick={() => setCount(initial)}>Reset</button>
    </div>
  )
}

export default MyCounter