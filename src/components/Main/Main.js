import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { shuffleCards, cardReset } from "../../actions";
import { gameStart, gameStop } from "../../actions/gameState";

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
`
const MainBtn = styled.button`
    border: none;
    padding: 10px 12px;
    border-radius: 7px;
    margin-bottom: 25px;
    font-size: 18px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`

const Main = () => {

    const dispatch = useDispatch()
    const {cardList, gameStatus} = useSelector(state => ({
        cardList: state.cardReducer.cardList,
        gameStatus: state.gameStateReducer.gameStatus
    }))

    const shuffleHandle = (arr) => {
        let cards = Object.assign([], arr)
        let j, temp
        for (let i = cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            temp = cards[j]
            cards[j] = cards[i]
            cards[i] = temp
        }
        dispatch(shuffleCards(cards))
    }


    const startStopGameHandler = () => {
        if(gameStatus) {
            dispatch(cardReset())
            dispatch(gameStop())
        } else {
            dispatch(gameStart())
            shuffleHandle(cardList)
        }
    }



    return (
        <>
            <MainBtn onClick={startStopGameHandler}>{!gameStatus ? 'Начать' : 'Завершить'}</MainBtn>
            <MainContainer>
                {cardList.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </MainContainer>
        </>
        
    )
}

export default Main