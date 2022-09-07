import { useState } from "react";
import validateInfo from "../validate";
import AppContext from "./appContext";

export function AppState({children}){

    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardExpiration: '',
        cardSecurityCode: '',
        })
    
        const [errors, setErrors] = useState({})
    
        const handleChange = e => {
            const { name, value } = e.target
            setValues({
                ...values,
                [name]: value
            })
        }
        const handleChangeCardNumber = e => {
            const { name, value } = e.target
            setValues({
                ...values,
                [name]: value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
            })
        }
    
        const handleSubmit = e => {
            e.preventDefault()
            setErrors(validateInfo(values))
        };

        const handleOnClick = () =>{
            setValues({
                cardName: '',
                cardNumber: '',
                cardExpiration: '',
                cardSecurityCode: '',
            })
            errors.variant = "";
            errors.message = "";
        }

    return(
        <AppContext.Provider value={{values, handleChange, handleSubmit, errors, handleChangeCardNumber, handleOnClick}}>
            {children}
        </AppContext.Provider>
    )
}