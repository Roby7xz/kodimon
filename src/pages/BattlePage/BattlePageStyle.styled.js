import styled from "styled-components";

export const BattlePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 75px;

    .pokemon-battle {
        display: flex;
        flex-direction: row;
    }

    .pokemon-menu-logs {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .menu-battle {
        display:flex;
        justify-content: center;
        margin-left: 115px;
    }

    .logs-battle {
        display:flex;
        justify-content: center;
        margin-right: 150px;
    }

    .center-logs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    img {
        margin-bottom: 10px;
    }

    .arrow-right {
        transform: rotate(180deg);
    }

    .arrow-left {
         transform: rotate(0deg);
    }
    
    .attack-arrow {
        margin: 275px auto 0px;
        text-align: center;
        height: 54px;
        width: 189px;
    }
`;