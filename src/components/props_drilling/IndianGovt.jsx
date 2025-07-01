import React from 'react'
import StateGovt from './StateGovt'

const IndianGovt = () => {
    const money = "1000"
  return (
    <div>
        <h3>Indian Govt {money} </h3>
        <StateGovt money={money}  />
    </div>
  )
}

export default IndianGovt