import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { shuffleCards, cardReset, getCards } from "../../actions";
import { gameStart, gameStop, updateLeaderboard, resetScore } from "../../actions/gameState";

const MainContainer = styled.div`
    display: ${props => props.isVisible ? 'none' : 'grid'};
    height: calc(100vh - 200px);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
    justify-items: stretch;
    justify-content: space-between;
`
const MainBtn = styled.button`
    border: none;
    padding: 5px 10px;
    border-radius: 7px;
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #66FCF1;
    background-color: transparent;
    border: 1px solid #66FCF1;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || 'space-between'};
    margin-bottom: 25px;
`
const WrapperNotice = styled(Wrapper)`
    flex-direction: column;
    width: 35%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20%;
    border: 1px solid #66FCF1;
    border-radius: 7px;
    padding: 20px;
`

const Selector = styled.select`
    width: 250px;
    border-radius: 7px;
    padding: 5px 10px;
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    display: ${props => props.isVisible ? 'none' : 'block'};
    border: 1px solid #66FCF1;
    background-color: transparent;
    color: #66FCF1;
    outline: none;
`
const Text = styled.p`
    font-size: 22px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin: 0;
    margin-bottom: 35px;
    color: #66FCF1;
`

const Main = () => {

    const dispatch = useDispatch()
    const {cardList, gameStatus, cardMatched, leaderBoard, gameScore, userName} = useSelector(state => ({
        cardList: state.cardReducer.cardList,
        gameStatus: state.gameStateReducer.gameStatus,
        cardMatched: state.cardReducer.cardMatched,
        leaderBoard: state.gameStateReducer.leaderBoard,
        gameScore: state.gameStateReducer.gameScore,
        userName: state.userReducer.userName
    }))

    const [openCards, setOpenCards] = useState(false)

    const changeComplexity = (e) => {
        dispatch(getCards(+e.target.value))

    }

    const sortByField = (field) => {
        return (a, b) => {
            if(b == null) {
                return -1
            }
            if(a == null) {
                return 1
            }
            return b[field] > a[field] ? 1 : -1
        }
    }

    useEffect(() => {
        if(cardMatched == cardList.length) {
            let newLeaderboard = Object.assign([], leaderBoard)
            newLeaderboard.push({
                name: userName,
                score: gameScore
            })
            newLeaderboard.sort(sortByField('score'))
            newLeaderboard.length = 10
            localStorage.setItem('leaderBoard', JSON.stringify(newLeaderboard))
            dispatch(updateLeaderboard(newLeaderboard))
        }
    }, [cardMatched])

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

    const closeCardHandle = () => {
        dispatch(gameStart())
        setOpenCards(false)
    }

    const startStopGameHandler = () => {
        if(gameStatus) {
            dispatch(cardReset())
            dispatch(gameStop())
            dispatch(resetScore())
        } else {
            
            shuffleHandle(cardList)
            setTimeout(setOpenCards, 0, true)
            setTimeout(closeCardHandle, 3000)
        }
    }

    const resetGameHandler = () => {
        shuffleHandle(cardList)
        dispatch(cardReset())
        dispatch(resetScore())
        setTimeout(setOpenCards, 0, true)
        setTimeout(setOpenCards, 3000, false)
    }

    return (
        <>  
            <Wrapper>
                <MainBtn onClick={startStopGameHandler}>{!gameStatus ? 'Начать' : 'Завершить'}</MainBtn>
                <Selector isVisible={gameStatus} defaultValue='null' onChange={changeComplexity}>
                    <option value='null' hidden disabled>Выберите сложность</option>
                    <option value='8'>Simple</option>
                    <option value='12'>Medium</option>
                    <option value='16'>Hard</option>
                </Selector>
            </Wrapper>
            
            <MainContainer isVisible={cardMatched == cardList.length}>
                {cardList.map((item) => (
                    <Card item={item} key={item.id} openCards={openCards}/>
                ))}
            </MainContainer>

            {
                cardMatched == cardList.length && 
                <WrapperNotice>
                    <Text>Игра окончена. Хотите повторить?</Text>
                    <Wrapper justifyContent={'space-around'}>
                        <MainBtn onClick={resetGameHandler}>Повторить</MainBtn>
                        <MainBtn onClick={startStopGameHandler}>Завершить</MainBtn>
                    </Wrapper>
                </WrapperNotice>
            }
        </>
        
    )
}

export default Main