import React from "react";
import styled from "styled-components";

const Card = ({item}) => {

    const CardWrap = styled.div`
        width: 200px;
        height: 200px;
        position: relative;
        border: 1px solid black;
    `
    const Card = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        overflow: hidden;
        transition: transform 0.6s linear;
    `
    const CardForward = styled(Card)`
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: perspective(1000px) rotateY(0deg);

        ${CardWrap}:hover & {
            transform: perspective(1000px) rotateY(180deg);
        }
    `
    const CardBack = styled(Card)`
        object-fit: fill;
        transform: perspective(1000px) rotateY(-180deg);

        ${CardWrap}:hover & {
            transform: perspective(1000px) rotateY(0deg);
        }
    `
    
    return (
        <CardWrap>
            <CardForward />
            <CardBack as='img' src={item.src}/>
        </CardWrap>
    )
}

export default Card