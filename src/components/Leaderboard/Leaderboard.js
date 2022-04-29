import React from "react";
import styled from "styled-components";

const LeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width:80%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid #66FCF1;
    box-sizing: border-box;
    background-color: transparent;
`
const ItemWrap = styled.p`
    font-size: 32px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #66FCF1;
    color: #66FCF1;
`
const BoardTitle = styled.h2`
    font-size: 36px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin-bottom: 30px;
    text-align: center;
    color: #66FCF1;
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