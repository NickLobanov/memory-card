import React, {useState} from "react";
import styled from "styled-components";
import { Form } from "../../styles/components/Form";
import { createUser } from "../../actions/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Label = styled.label`
    color: #66FCF1;
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
    outline: none;
`
const SaveBatton = styled.button`
    width: 40%;
    margin: 0 auto;
    border: 1px solid #66FCF1;
    background-color: transparent;
    color: #66FCF1;
    border-radius: 7px;
    font-size: 18px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`

const Auth = () => {
    
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [userName, setUsername] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('userName', userName)
        dispatch(createUser(userName))
        navigate('/memory-card/', {replace: true})
    }

    return (
        <Form onSubmit={formSubmit}>
            <Label>Введите имя пользователя</Label>
            <Input type='text' required value={userName} onChange={(e) => setUsername(e.target.value)}/>

            <SaveBatton type="submit">Сохранить</SaveBatton>
        </Form>
    )
}

export default Auth