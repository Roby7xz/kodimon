import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonStyle } from './ButtonStyle.styled'


const Button = ({ route, children, onClick, disabled }) => {

    // Reusable button component that will navigate us through the app (route prop / connected to the react-router) 
    // and call some functions that are forwarded by onClick prop.
    return (
        <Link to={route}>
            <ButtonStyle disabled={disabled} onClick={onClick}>
                {children}
            </ButtonStyle>
        </Link>
    )
}

export default Button