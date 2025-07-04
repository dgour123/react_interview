import React from 'react'
import MoneyContext from './MoneyContext'

export const MoenyState = (props) => {
    const money = 5000;
    const aadhar = 3000;
    const doller = 1000;
    const deep = 300;
    return (
        <MoneyContext.Provider value={{
            money,
            aadhar,
            doller,
            deep

        }}>
            {props.children}
        </MoneyContext.Provider>
    )
}
