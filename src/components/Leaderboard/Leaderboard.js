import React from "react";
import styled from "styled-components";

const LeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width:80%;
    height: calc(100vh - 15%);
    margin: 0 auto;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: rgba(0,0,0, 0.5);
`
const ItemWrap = styled.p`
    font-size: 32px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    border-bottom: 1px solid black;
`
const BoardTitle = styled.h2`
    font-size: 36px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin-bottom: 30px;
    text-align: center;
`

const Leaderboard = () => {

    let leaderBoardArr = JSON.parse(localStorage.getItem('leaderBoard'))     

    return (
        <LeaderContainer>
            <BoardTitle>Таблица Лидеров</BoardTitle>
            {leaderBoardArr.map((item, index) => (
                item ?
                <ItemWrap key={index}>{index + 1}. {item.name} {item.score}</ItemWrap> :
                <ItemWrap key={index}>{index + 1}. </ItemWrap>
            ))}
            
            
        </LeaderContainer>
    )
}

export default Leaderboard