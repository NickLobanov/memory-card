import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectCard, cardMatch, cardDifferent, addToSelectList } from "../../actions";


const CardWrap = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px solid black;
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
`
const CardBack = styled(CardGeneral)`
    object-fit: fill;
    transform: ${props => !props.isOpen ? 'perspective(1000px) rotateY(-180deg)' : 'perspective(1000px) rotateY(0deg)'} ;
`

const Card = ({item}) => {

    const dispatch = useDispatch()
    const {selectedCard} = useSelector(state => ({
        selectedCard: state.cardReducer.selectedCard
    }))

    const checkCardIsEqual = (card) => {
        if (selectedCard.name == card.name) {
            dispatch(cardMatch({
                [card.name]: card.name
            }))
        } else {
            dispatch(cardDifferent())
        }
    }

    const cardClickHandle = () => {
        console.log(item)
        dispatch(selectCard(item))
        if(selectedCard == null) {
            dispatch(addToSelectList(item))
        } else {
            checkCardIsEqual(item) 
        }
        console.log(item)
    }
    
    return (
        <CardWrap onClick={cardClickHandle}>
            <CardForward isOpen={item.selected}/>
            <CardBack as='img' src={item.src} isOpen={item.selected}/>
        </CardWrap>
    )
}

export default Card