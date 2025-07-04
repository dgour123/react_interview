import React, { useState } from 'react'


const ChildComponents = React.memo (({name})=>{
    return <h1> Hello, {name}</h1>
})

const React_Memo = () => {
   const [name, setName] = useState("Deepak")
  return (
    <div>
        <h1> This is  react child mememo </h1>
        <ChildComponents name={name} />
         <button onClick={()=>setName("WOWIT Digital")}>Change name</button>
    </div>
  )
}

export default React_Memo