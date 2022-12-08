import styled from "styled-components";


export const ButtonStyle = styled.button`
    width: 210px;
    height: 50px;
    font-family: Bellota;
    color: white;
    background-color: #0073BC;
    border-radius: 50px;
    border: 5px solid #73B9E5;
    cursor: pointer;
    opacity: ${(props) => props.disabled ? "30%" : "100%"};
`;