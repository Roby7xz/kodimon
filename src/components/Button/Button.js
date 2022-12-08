import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonStyle } from './ButtonStyle.styled'


const Button = ({ route, children, onClick, disabled }) => {


    return (
        <Link to={route}>
            <ButtonStyle disabled={disabled} onClick={onClick}>
                {children}
            </ButtonStyle>
        </Link>
    )
}

export default Button