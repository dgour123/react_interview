import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'
import StudentContext from '../../student/StudentContext';

const Janta = () => {
   const data = useContext(MoneyContext);
   const student = useContext(StudentContext);
  return (
    <div>
        <h1>Janta money {data.deep}</h1>
        <h1>Student Name  {student.name}</h1>
        <h1>Student Roll  {student.roll_no}</h1>
    </div>
  )
}

export default Janta