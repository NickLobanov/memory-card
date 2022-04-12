import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";


const Main = () => {

    const MainContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 15px;
    `

    return (
        <MainContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </MainContainer>
    )
}

export default Main