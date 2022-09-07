import React, { useContext } from 'react'
import relative from '../images/bg-main-desktop.png'
import relativeMobile from '../images/bg-main-mobile.png'
import back from '../images/bg-card-back.png'
import { Card } from '../components/Card'
import { GridWrapper } from '../components/layout/GridWrapper'
import { Form } from '../components/Form'
import AppContext from '../context/appContext'
import { Complet } from '../components/Complet'


export const CardsMain = () => {

  const {values, errors} = useContext(AppContext)
    
    
  return (
        <div className='wrapper-cards-main'>
            <img src={relative} alt="" className='relative'/>
            <img src={relativeMobile} alt="" className='relative-mobile'/>            
            <GridWrapper>
                <div className='cards-main col-span-12'>
                    <div className="cards-main-l">
                        <Card className="card-front"/>
                        <div className='card-back-position'>
                        <img src={back} alt="" className="card-back"/>
                        <p className='position-back-number'>{values.cardSecurityCode ? values.cardSecurityCode : "000"}</p>
                        </div>
                    </div>
                    <div className="cards-main-r">
                        { errors.variant === "success" ? <Complet/> : <Form/>}
                    </div>
                </div>
            </GridWrapper>
        </div>
  )
}
