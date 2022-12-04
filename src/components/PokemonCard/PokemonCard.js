import React from 'react';
import { PokemonCardStyle } from './PokemonCardStyle.styled';

const PokemonCard = ({ name }) => {

    return (
        <PokemonCardStyle>
            <div className="pokemon">
                <div className="pokemon-hp-bar">
                    <h5 className="pokemon-hp">100%</h5>
                </div>
                <h5 className="pokemon-name">{name}</h5>
                <img className="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="Pokemon Name"></img>
            </div>
            <div className="pokemon-stats">
                <h6>Stats</h6>
                <div className="pokemon-stats-box">
                    <p className="pokemon-stats-text">HP: 100</p>
                    <p className="pokemon-stats-text">Attack: 100</p>
                    <p className="pokemon-stats-text">Defense: 100</p>
                    <p className="pokemon-stats-text">Speed: 100</p>
                </div>
            </div>
        </PokemonCardStyle>
    );
}

export default PokemonCard;