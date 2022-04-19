import React, {useState} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putchUser } from "../../actions/user";
import { patchCardTheme } from "../../actions";

const SettingsCont = styled.form`
    width: 80%;
    margin: 0 auto;
    height: calc(100vh - 20%);
    display: flex;
    flex-direction: column;
`
const SettingsTitle = styled.h2`
    font-size: 22px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin: 0;
    margin-bottom: 20px;
`
const CardsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
`
const CardExapmle = styled.img`
    width: 20%;
    height: 320px;
    box-shadow: ${props => props.bgImage && '0px 0px 10px 5px rgba(0, 255, 142, 0.2)'};
`
const SettingsInput = styled.input`
    width: 40%;
    border-radius: 7px;
    padding: 8px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-bottom: 60px;
`
const SubmitBtn = styled.button`
    font-size: 18px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    padding: 10px 12px;
    border-radius: 7px;
    background-color: transparent;
    width: 15%;
`

const Settings = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const {bgImages, cardTheme} = useSelector(state => ({
        bgImages: state.cardReducer.bgImages,
        cardTheme: state.cardReducer.cardTheme
    }))

    const [inputValue, setInputValue] = useState()
    const [selectedCardTheme, setCardTheme] = useState(cardTheme)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (localStorage.getItem('userName') != inputValue) {
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