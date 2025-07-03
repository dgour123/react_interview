import React from 'react'
import Janta from './Janta'

const Panchayat = ({money}) => {
  return (
    <div>
        <h2>Panchayat</h2>
        <Janta money={money} />
    </div>
  )
}

export default Panchayat