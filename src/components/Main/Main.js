import React, {useEffect} from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { shuffleCards, cardReset, getCards } from "../../actions";
import { gameStart, gameStop, updateLeaderboard } from "../../actions/gameState";

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 15%);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 20px;
    justify-items: stretch;
    justify-content: space-between;
`
const MainBtn = styled.button`
    border: none;
    padding: 10px 12px;
    border-radius: 7px;
    font-size: 18px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
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
`

const Selector = styled.select`
    width: 15%;
    border-radius: 7px;
    padding: 5px 10px;
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const Text = styled.p`
    font-size: 22px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin: 0;
    margin-bottom: 25px;
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

    const changeComplexity = (e) => {
        dispatch(getCards(+e.target.value))

    }

    const sortByField = (field) => {
        return (a, b) => b[field] > a[field] ? 1 : -1
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
            <Wrapper>
                <MainBtn onClick={startStopGameHandler}>{!gameStatus ? 'Начать' : 'Завершить'}</MainBtn>
                <Selector defaultValue='null' onChange={changeComplexity}>
                    <option value='null' hidden disabled>Выберите сложность</option>
                    <option value='8'>Simple</option>
                    <option value='12'>Medium</option>
                    <option value='16'>Hard</option>
                </Selector>
            </Wrapper>
            
            <MainContainer>
                {cardList.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </MainContainer>

            {
                cardMatched == cardList.length && 
                <WrapperNotice>
                    <Text>Игра окончена. Хотите повторить?</Text>
                    <Wrapper justifyContent={'space-around'}>
                        <MainBtn onClick={() => dispatch(cardReset())}>Повторить</MainBtn>
                        <MainBtn onClick={startStopGameHandler}>Завершить</MainBtn>
                    </Wrapper>
                </WrapperNotice>
            }
        </>
        
    )
}

export default Main