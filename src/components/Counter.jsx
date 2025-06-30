import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h2>Vertual DOM</h2>
        <h2> Counter  Is {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>Increase Me</button>
    </div>
  )
}

export default Counter