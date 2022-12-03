import React from 'react';
import Button from '../../components/Button/Button';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Menu from "../../components/Menu/Menu";
import Logs from "../../components/Logs/Logs";
import arrow from "../../assets/arrow.svg";
import { BattlePageStyle } from './BattlePageStyle.styled';

const BattlePage = () => {
    return (
        <BattlePageStyle>
            <div className="pokemon-battle">
                <PokemonCard />
                <div className="attack-arrow">
                    <img src={arrow} alt="Arrow" />
                    <Button>Attack!</Button>
                </div>
                <PokemonCard />
            </div>
            <div className="pokemon-menu-logs">
                <Menu />
                <Logs />
            </div>
        </BattlePageStyle>
    );
}

export default BattlePage;