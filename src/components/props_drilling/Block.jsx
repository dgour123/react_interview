import React from 'react'
import Panchayat from './Panchayat'

const Block = ({money}) => {
  return (
    <div>
        <h2>Block</h2>
        <Panchayat money={money}/>
    </div>
  )
}

export default Block