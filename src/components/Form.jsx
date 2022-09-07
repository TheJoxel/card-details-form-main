import React, { useContext } from 'react'
import AppContext from '../context/appContext'

export const Form = () => {
  
  const {values, handleChange, handleSubmit, errors, handleChangeCardNumber} = useContext(AppContext)


  return (
    <div className='wrapper-form'>
      <form onSubmit={handleSubmit}>
        <label className='label'>Cardholder Name</label>
        <input 
        type="text" 
        placeholder='e.g. Jane Appleseed' 
        className='input width-381'
        name="cardName"
        value={values.cardName}
        onChange={handleChange}
        />
        <label className='label'>Card Number</label>
        <input 
        type="text" 
        placeholder='e.g. 1234 5678 9123 0000' 
        className='input width-381'
        name="cardNumber"
        value={values.cardNumber}
        onChange={handleChangeCardNumber}
        maxLength="19"
        /><br />
        
        <div className='date-cvc'>
          <div className='date'>
            <label className='label'>Exp. Date (MM/YYYY)</label><br />
            <input 
            type="text" 
            placeholder='MM/YYYY' 
            className='input width-80'
            name="cardExpiration"
            value={values.cardExpiration}
            onChange={handleChange}
            maxLength="7"
            />
          </div>
          <div className='cvc'>
             <label className='label'>CVC</label><br />
            <input 
            type="text" 
            placeholder='e.g. 123' 
            className='input width-191'
            name="cardSecurityCode"
            value={values.cardSecurityCode}
            onChange={handleChange}
            maxLength="3"
            />
          </div>
        </div>
        <input type="submit" value='Confirm' className='button'/>
      </form>
      <p className='error top-288'>{errors.message}</p>
    </div>
  )
}
