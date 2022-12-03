import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ButtonStyle } from './ButtonStyle.styled'


const Button = ({ route, children, type, onClick }) => {

    return (
        <>
            <Link to={route}>
                <ButtonStyle onClick={onClick} type={type}>
                    {children}
                </ButtonStyle>
            </Link>
        </>
    )
}

export default Button