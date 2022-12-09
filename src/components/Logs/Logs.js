import React from 'react';
import { useSelector } from 'react-redux';
import { LogsStyle } from './LogsStyle.styled';

const Logs = () => {
    const logs = useSelector((state) => state.pokemons.logs);
    const currentPokemonsHP = useSelector((state) => state.pokemons.pokemonsHP);

    const { firstPokemonHP, secondPokemonHP } = currentPokemonsHP;

    if (logs.length > 8) {
        logs.splice(1, 1);
    }

    return (
        <LogsStyle>
            <h6>Logs</h6>
            <div className="battle-info">
                {
                    logs.map((log, id) => {
                        if (log.isFirst) {
                            if (log.miss === 1) {
                                return <p key={id}>{`${log.firstPokemonName} missed ${log.secondPokemonName}`}</p>;
                            }

                            else if (log.hpDiff === 0 && secondPokemonHP === 0) {
                                return (
                                    <div key={id}>
                                        <p >{`${log.firstPokemonName} attacked ${log.secondPokemonName} for ${log.dmgDealt} dmg`}</p>
                                        <p >{`${log.secondPokemonName} died`}</p>
                                    </div>
                                );
                            }

                            else {
                                return <p key={id}>{`${log.firstPokemonName} attacked ${log.secondPokemonName} for ${log.dmgDealt} dmg`}</p>;
                            }

                        }

                        else if (log.isSecond) {
                            if (log.miss === 1) {
                                return <p key={id}>{`${log.secondPokemonName} missed ${log.firstPokemonName}`}</p>;
                            }

                            else if (log.hpDiff === 0 && firstPokemonHP === 0) {
                                return (
                                    <div key={id}>
                                        <p >{`${log.secondPokemonName} attacked ${log.firstPokemonName} for ${log.dmgDealt} dmg`}</p>
                                        <p >{`${log.firstPokemonName} died`}</p>
                                    </div>
                                );
                            }

                            else {
                                return <p key={id}>{`${log.secondPokemonName} attacked ${log.firstPokemonName} for ${log.dmgDealt} dmg`}</p>;
                            }
                        }

                        else {
                            return null;
                        }

                    })
                }
            </div>
        </LogsStyle>
    );
}

export default Logs;