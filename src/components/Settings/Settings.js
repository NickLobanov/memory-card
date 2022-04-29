import React, {useState} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putchUser } from "../../actions/user";
import { patchCardTheme } from "../../actions";

const SettingsCont = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const SettingsTitle = styled.h2`
    font-size: 22px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin: 0;
    margin-bottom: 20px;
    color: #66FCF1;
`
const CardsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
`
const CardExapmle = styled.img`
    width: 230px;
    height: 320px;
    box-shadow: ${props => props.bgImage && '0px 0px 10px 5px rgba(102,252,241, 0.2)'};
`
const SettingsInput = styled.input`
    width: 40%;
    border-radius: 7px;
    padding: 8px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-bottom: 60px;
    background-color: transparent;
    border: 1px solid #66FCF1;
    outline: none;
    color: #66FCF1;
`
const SubmitBtn = styled.button`
    font-size: 18px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    padding: 10px 12px;
    border-radius: 7px;
    background-color: transparent;
    width: 15%;
    border: 1px solid #66FCF1;
    color: #66FCF1;
`

const Settings = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const {bgImages, cardTheme, userName} = useSelector(state => ({
        bgImages: state.cardReducer.bgImages,
        cardTheme: state.cardReducer.cardTheme,
        userName: state.userReducer.userName
    }))

    const [inputValue, setInputValue] = useState(userName)
    const [selectedCardTheme, setCardTheme] = useState(cardTheme)

    const updateLeaderboardName = (newName) => {
        const prevName = localStorage.getItem('userName')
        console.log(prevName)
        console.log(newName)
        const leaderlist = JSON.parse(localStorage.getItem('leaderBoard'))
        console.log(leaderlist)
        const updatedList = leaderlist.map(item => {
            if(item != null && item.name == prevName) {
                return {...item, name: newName}
            } else {
                return item
            }
        })
        console.log(updatedList)
        localStorage.setItem('leaderBoard', JSON.stringify(updatedList))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (localStorage.getItem('userName') != inputValue) {
            updateLeaderboardName(inputValue)
            localStorage.setItem('userName', inputValue)
            dispatch(putchUser(inputValue))
        }
        dispatch(patchCardTheme(selectedCardTheme))
        navigate('/')
        
    }

    return (
        <SettingsCont onSubmit={handleFormSubmit}>
            <SettingsTitle>Выберите рубашку карт</SettingsTitle>
            <CardsWrap>
                {bgImages.map(item => (
                    <CardExapmle bgImage={selectedCardTheme == item.url && true}
                        src={item.url}
                        key={item.name}
                        onClick={() => setCardTheme(item.url)}/>
                ))}
            </CardsWrap>
            <SettingsTitle>Редактирование имени</SettingsTitle>
            <SettingsInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Введите новое имя"/>
            <SubmitBtn type="submit">Сохранить</SubmitBtn>
        </SettingsCont>
    )
}

export default Settings