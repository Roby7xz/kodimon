import React from 'react';
import HealthBar from '../HealthBar/HealthBar';
import { PokemonCardStyle } from './PokemonCardStyle.styled';

const PokemonCard = ({ name, currentHP, img, hp, attack, defense, speed }) => {

    // PokemonCard component that display pokemon stats.
    return (
        <PokemonCardStyle>
            <div className="pokemon">
                <HealthBar currentHP={currentHP} hp={hp} />
                <h5 className="pokemon-name">{name}</h5>
                <img className="pokemon-img" src={img} alt="Pokemon Name"></img>
            </div>
            <div className="pokemon-stats">
                <h6>Stats</h6>
                <div className="pokemon-stats-box">
                    <p className="pokemon-stats-text">HP: {hp}</p>
                    <p className="pokemon-stats-text">Attack: {attack}</p>
                    <p className="pokemon-stats-text">Defense: {defense}</p>
                    <p className="pokemon-stats-text">Speed: {speed}</p>
                </div>
            </div>
        </PokemonCardStyle>
    );
}

export default PokemonCard;