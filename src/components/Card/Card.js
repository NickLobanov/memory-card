import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectCard, cardMatch, cardClose, addToSelectList, clearSelectedList, stopClickCard } from "../../actions";
import { increaseScore, decreaseScore } from "../../actions/gameState";


const CardWrap = styled.div`
    position: relative;
    visibility: ${props => props.isMatched ? 'hidden' : 'visible'};
`
const CardGeneral = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    transition: transform 0.6s linear;
`
const CardForward = styled(CardGeneral)`
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => !props.isOpen ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(180deg)'};
    object-fit: cover;
`
const CardBack = styled(CardGeneral)`
    object-fit: cover;
    transform: ${props => !props.isOpen ? 'perspective(1000px) rotateY(-180deg)' : 'perspective(1000px) rotateY(0deg)'} ;
`

const Card = ({item, openCards}) => {

    const dispatch = useDispatch()
    const {selectedCard, gameStatus, cardTheme, stopCardClick} = useSelector(state => ({
        selectedCard: state.cardReducer.selectedCard,
        gameStatus: state.gameStateReducer.gameStatus,
        cardTheme: state.cardReducer.cardTheme,
        stopCardClick: state.cardReducer.stopCardClick
    }))

    const checkCardIsEqual = (card) => {
        if (selectedCard.name == card.name) {
            dispatch(cardMatch(card.name))
            dispatch(increaseScore())
        } else {
            dispatch(decreaseScore())
        }
        dispatch(stopClickCard())
        dispatch(cardClose())
        dispatch(clearSelectedList())
    }

    const cardClickHandle = () => {
        if (gameStatus && !stopCardClick) {
            dispatch(selectCard(item))
            if(selectedCard == null) {
                dispatch(addToSelectList(item))
            } else {
                dispatch(stopClickCard())
                setTimeout(checkCardIsEqual, 1300, item)
            }
        }
    }
    
    return (
        <CardWrap onClick={cardClickHandle} isMatched={item.isMatched}>
            <CardForward as='img' src={cardTheme} isOpen={item.selected || openCards}/>
            <CardBack as='img' src={item.src} isOpen={item.selected || openCards}/>
        </CardWrap>
        
    )
}

export default Card