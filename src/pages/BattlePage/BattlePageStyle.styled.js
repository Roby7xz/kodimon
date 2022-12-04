import styled from "styled-components";

export const BattlePageStyle = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 75px;

    .pokemon-battle {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
    }

    .pokemon-menu-logs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        margin-left: 100px;
        padding: 0px;
    }

    img {
        margin-bottom: 10px;
    }

    .attack-arrow {
        margin: 275px auto 0px;
        text-align: center;
        height: 54px;
        width: 189px;
    }
`;