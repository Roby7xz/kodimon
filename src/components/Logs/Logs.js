import React from 'react';
import { LogsStyle } from './LogsStyle.styled';

const Logs = () => {
    return (

        <LogsStyle>
            <h6>Logs</h6>
            <div className="battle-info">
                <p>Charmander attacked Charmander.</p>
                <p>Charmander attacked Charmander.</p>
                <p>Charmander attacked Charmander.</p>
            </div>
        </LogsStyle>

    );
}

export default Logs;