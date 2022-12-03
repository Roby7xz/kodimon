import React from 'react';
import Button from '../../components/Button/Button';
import { HomePageStyle } from './HomePageStyle.styled';
import kodimon from "../../assets/kodimon 1.png";
import kodimon_logo from "../../assets/Kodi-logo.svg";

const HomePage = () => {
    return (
        <>
            <HomePageStyle>
                <img id="kodimon_logo" src={kodimon_logo} alt="Kodimon Logo" />
                <img id="kodimon" src={kodimon} alt="Kodimon" />
                <Button route="/battle" className="grid-item">New Game</Button>
            </HomePageStyle>
        </>
    )
}

export default HomePage;