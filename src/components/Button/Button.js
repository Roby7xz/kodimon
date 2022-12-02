import React from 'react'
import { ButtonStyle } from './ButtonStyle.styled'

const Button = ({ children, type, onClick }) => {
    return (
        <>
            <ButtonStyle onClick={onClick} type={type}>
                {children}
            </ButtonStyle>
        </>
    )
}

export default Button