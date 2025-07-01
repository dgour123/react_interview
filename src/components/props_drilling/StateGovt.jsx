import React from 'react'
import District from './District'

const StateGovt = ({money}) => {
    return (
        <div>
            <h2>StateGovt {money}</h2>
          <District money={money} />
        </div>
    )
}

export default StateGovt