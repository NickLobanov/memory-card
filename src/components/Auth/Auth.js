import React from "react";
import styled from "styled-components";
import { Form } from "../../styles/components/Form";

const Auth = () => {
    const Label = styled.label`
        color: white;
        font-size: 22px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        margin-bottom: 20px;
    `
    const Input = styled.input`
        border: none;
        border-radius: 7px;
        padding: 10px;
        margin-bottom: 50px;
        font-size: 16px;
    `
    const SaveBatton = styled.button`
        width: 40%;
        margin: 0 auto;
        border: none;
        border-radius: 7px;
        font-size: 18px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    `

    return (
        <Form>
            <Label>Введите имя пользователя</Label>
            <Input type='text' required />

            <SaveBatton>Сохранить</SaveBatton>
        </Form>
    )
}

export default Auth