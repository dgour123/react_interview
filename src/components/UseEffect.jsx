import React, { useEffect, useState } from 'react'

const UseEffect = () => {
   
    const [counter, setCounter] = useState(0)
    useEffect(() => {
      document.title = counter
       console.log('Useeffect is running', counter)
    }, [counter])
    
  return (
    <div> UssEffect
        <h1>Counter = {counter}</h1>
         <button onClick={()=>setCounter(counter+1)}>Increse</button>
    </div>
   
  )
}

export default UseEffect