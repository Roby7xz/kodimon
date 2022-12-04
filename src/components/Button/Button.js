import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonStyle } from './ButtonStyle.styled'


const Button = ({ route, children, type, onClick }) => {

    return (
        <Link onClick={onClick} to={route}>
            <ButtonStyle onClick={onClick} type={type}>
                {children}
            </ButtonStyle>
        </Link>
    )
}

export default Button