import React from 'react'
import District from './District'

const StateGovt = ({money}) => {
    return (
        <div>
            <h2>StateGovt </h2>
          <District money={money} />
        </div>
    )
}

export default StateGovt