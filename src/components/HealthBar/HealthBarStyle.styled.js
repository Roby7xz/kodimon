import styled from "styled-components";

export const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.borderColor}
`;

export const InnerContainer = styled.div`
    width: 200px;
    height: 100%;
    background-color: lightgray;
    border-radius: 50px;
    border: 3px solid ${props => props.borderColor};
`;

export const HealthBarGreen = styled.div`
    
    width: ${props => props.width};
    height: 13px;
    border-radius: 20px;
    background-color: #62FF84;
`;

export const HealthBarOrange = styled.div`
    
    width: ${props => props.width};
    height: 13px;
    border-radius: 20px;
    background-color: #FF8300;
`;

export const HealthBarRed = styled.div`
    
    width: ${props => props.width};
    height: 13px;
    border-radius: 20px;
    background-color: #FF7575;
`;


