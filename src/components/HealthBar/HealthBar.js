import React, { useEffect, useState } from 'react';
import { HealthBarGreen, HealthBarOrange, HealthBarRed, InnerContainer, OuterContainer } from './HealthBarStyle.styled';

const HealthBar = ({ hp, currentHP }) => {
    const [progress, setProgress] = useState(0);

    // Constants that calculates HP percentage and width.
    const currentHPPerc = ((currentHP / hp) * 100);
    const width = (currentHPPerc / 100) * 200;

    // useEffect that is used to track changes on progress bar.
    useEffect(() => {
        setProgress(width);
    }, [width, setProgress]);


    // If statements that will declare which type of healht bar will appear on the screen.
    if (currentHPPerc >= 50) {
        const borderColor = "#079325";
        return (
            <OuterContainer borderColor={borderColor}>
                <h4>{currentHPPerc.toFixed(2)} %</h4>
                <InnerContainer borderColor={borderColor}>
                    <HealthBarGreen width={`${progress}px`} />
                </InnerContainer>
            </OuterContainer>
        )
    }

    else if (currentHPPerc >= 30 && currentHPPerc < 50) {
        const borderColor = "#FF4500";
        return (
            <OuterContainer borderColor={borderColor}>
                <h4>{currentHPPerc.toFixed(2)} %</h4>
                <InnerContainer borderColor={borderColor}>
                    <HealthBarOrange width={`${progress}px`} />
                </InnerContainer>
            </OuterContainer>
        )
    }

    else {
        const borderColor = "#FF0000";
        return (
            <OuterContainer borderColor={borderColor}>
                <h4>{currentHPPerc.toFixed(2)} %</h4>
                <InnerContainer borderColor={borderColor}>
                    <HealthBarRed width={`${progress}px`} />
                </InnerContainer>
            </OuterContainer>
        )
    }

}





export default HealthBar;