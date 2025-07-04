import React from 'react'
import StudentContext from './StudentContext'

const StudentState = (props) => {
    const name = "Deepak";
    const roll_no = 196816182
  return (
    <StudentContext.Provider value={{
        name,
        roll_no
    }}>
        {props.children}
    </StudentContext.Provider>
  )
}

export default StudentState