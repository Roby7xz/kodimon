import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LogsStyle } from './LogsStyle.styled';

const Logs = () => {
    const logs = useSelector((state) => state.pokemons.logs);
    console.log(logs);

    useEffect(() => {
        if (logs.length > 9) {
            logs.splice(1, 1);
        }
    }, [logs]);

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

                            return <p key={id}>{`${log.firstPokemonName} attacked ${log.secondPokemonName} for ${log.dmgDealt} dmg`}</p>;
                        }

                        else if (log.isSecond) {
                            if (log.miss === 1) {
                                return <p key={id}>{`${log.secondPokemonName} missed ${log.firstPokemonName}`}</p>;
                            }

                            return <p key={id}>{`${log.secondPokemonName} attacked ${log.firstPokemonName} for ${log.dmgDealt} dmg`}</p>;
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