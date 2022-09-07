import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import logocard from '../images/card-logo.svg'

export const Card = ({className=""}) => {

  const{values} = useContext(AppContext)

  return (
    <div className={`wrapper-card ${className}`}>
        <img src={logocard} alt="" className='logocard'/>
        <p className='number-card'>{values.cardNumber ? values.cardNumber : "0000 0000 0000 0000"}</p>
        <div className='data-card'>
            <p className='date-card'>{values.cardName ? values.cardName : "Jane Appleseed"}</p>
            <p className='date-card'>{values.cardExpiration ? values.cardExpiration : "00/00"}</p>
        </div>
    </div>
  )
}
