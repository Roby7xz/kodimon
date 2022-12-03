import React from 'react';
import Button from '../Button/Button';
import { MenuStyle } from './MenuStyle.styled';

const Menu = () => {
    return (
        <MenuStyle>
            <h6>Menu</h6>
            <div className="menu">
                <Button route="/">Home</Button>
                <Button route="/battle">New Game</Button>
                <Button route="/battle">New oponnent</Button>
            </div>
        </MenuStyle>
    );
}

export default Menu;