import styled from "styled-components";



export const HomePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #kodimon {
        width: 600px;
        height: 300px;
    }

    #kodimon_logo {
        width: 170px;
        height: 200px;
        position: relative;
        z-index: -1;
        transform: rotate(-30deg);
        top: 135px;
        right: 11px;
    }

`;