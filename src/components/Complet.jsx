import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import complete from '../images/icon-complete.svg'

export const Complet = () => {

    const {handleOnClick} = useContext(AppContext)

  return (
    <div className='wrapper-form wrapper-complet'>
            <img src={complete} alt="" />
            <h2 className='title-complet'>Thank you!</h2>
            <p className='d-complet'>We've added your card details</p>
            <button className='button' onClick={handleOnClick}>Continue</button>
    </div>
  )
}
