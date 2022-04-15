import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const SettingsCont = styled.div`
    width: 80%;
    margin: 0 auto;
    height: calc(100vh - 20%);
    display: flex;
    flex-direction: column;
`
    
const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 100px;
`
const CardInput = styled.input`
    border-radius: 7px;
`
const InputWrap = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const SettingsLabel = styled.label`
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
`
const SettingsInput = styled(CardInput)`
    width: 100%;
`

const Settings = () => {

    return (
        <SettingsCont>
            {/* <CardWrap>
                <Card />
                <CardInput />
            </CardWrap>
            <InputWrap>
                <SettingsLabel>Введите новое имя</SettingsLabel>
                <SettingsInput />
            </InputWrap> */}
            
        </SettingsCont>
    )
}

export default Settings