import styled from "styled-components";

export const PokemonCardStyle = styled.div`
    width: 302px;
    margin: auto;
    font-family: Bellota;
    background-color: lightgrey;

    .pokemon {
        margin-top: 10px;
        text-align: center;
    }

    .pokemon-hp {
        margin: 0px;
    }

    .pokemon-img {
        height: 157px;
        width: 147px;
    }

    .pokemon-stats {
        margin-left: 15px;
    }

    h6 {
        font-size: 12px;
        margin-bottom: 3px;
        margin-left: 6px;
        margin-top: 0;
    }

    .pokemon-stats-box {
        height: 85px;
        width: 235px;
        background-color: #FFF7D6;
        border: solid 3px #FFCC00;
        border-radius: 10px;
    }

    .pokemon-stats-text {
        font-size: 10px;
        padding-bottom: 0px;
        margin-top: 3px;
        margin-bottom: 0px;
        margin-left: 10px;
    }
`;