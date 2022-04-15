import React, {useEffect} from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 15px;
`

const Main = () => {

    const {cardList} = useSelector(state => ({
        cardList: state.cardReducer.cardList
    }))

    console.log(cardList)

    return (
        <MainContainer>
            {cardList.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </MainContainer>
    )
}

export default Main