import React from 'react'

const State = () => {
    let no = 20
    const increase = () =>{
        no++;
        console.log(no)
    }

  return (
    <div>
        <h2>State</h2>
        <h2>{no}</h2>
        <button onClick={increase}>Increase</button>
    </div>
  )
}

export default State