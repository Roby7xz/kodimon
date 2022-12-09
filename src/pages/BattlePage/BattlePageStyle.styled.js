import styled from "styled-components";

export const BattlePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 25px;
    

    .pokemon-battle {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    .pokemon-menu-logs {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 25px;
    }

    .menu-battle {
        margin-left: 115px;
        flex: 1;
    }

    .logs-battle {
        margin-right: 135px;
        flex: 1;
    }

    .logs-battle-finished {
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