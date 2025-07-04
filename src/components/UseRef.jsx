import React, { useRef } from 'react'

const UseRef = () => {
   const divRef = useRef(null);

   const toggleColor = () =>{
        console.log(divRef)
       divRef.current.style.backgroundColor = 'blue';
       divRef.current.style.color = "#fff";
   }
    const toggleBackColor = () =>{
        console.log(divRef)
       divRef.current.style.backgroundColor = 'yellow';
       divRef.current.style.color = "#000";
   }
  return (
    <div>
    <div ref={divRef} style={{
        backgroundColor:"yellow",
        height:"50px",
        width:"50px",
        padding:"50px",
        color:"#000"
    }} >Chanhe background Color</div>

    <h2>Hello</h2>
       <button onClick={toggleColor}>Change Color</button>
       <button onClick={toggleBackColor}>Back Color</button>
    </div>
  )
}

export default UseRef