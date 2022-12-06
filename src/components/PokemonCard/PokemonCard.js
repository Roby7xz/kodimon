import React from 'react';
import { PokemonCardStyle } from './PokemonCardStyle.styled';

const PokemonCard = ({ name, currentHP, img, hp, attack, defense, speed }) => {

    return (
        <PokemonCardStyle>
            <div className="pokemon">
                <div className="pokemon-hp-bar">
                    <h5 className="pokemon-hp">{currentHP}</h5>
                </div>
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