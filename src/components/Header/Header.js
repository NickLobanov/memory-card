import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../styles/components/Wrapper";
import { HeaderWrap } from "../../styles/components/HeaderWrap";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../actions";

const LinkBtn = styled(Link)`
    color: black;
    text-decoration: none;
    margin-left: 15px;
    cursor: pointer;
`
const LogoLink = styled(LinkBtn)`
    font-family: 'Courgette', Arial, Helvetica, sans-serif;
    font-size: 42px;
`
const Nav = styled.div`
    width: 35%;
    min-height: 26px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const NavRight = styled(Nav)`
    justify-content: flex-end;
`

const Header = () => {

    const {userName} = useSelector(state => ({
        userName: state.userReducer.userName
    }))
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const exitHandle = () => {
        dispatch(deleteUser())
        localStorage.removeItem('userName')
        navigate('/login')
    }

    return (
        <Wrapper>  
            <HeaderWrap>
                <Nav>
                    <span>{userName}</span>
                    {userName && <span>Score: 0000</span>}
                    
                </Nav>
                <LogoLink to=''>
                    Memory Card
                </LogoLink>
                <NavRight>
                    
                    {userName && 
                    <>
                        <LinkBtn to='leaderboard'>Leaderboard</LinkBtn>
                        <LinkBtn to='settings'>Settings</LinkBtn>
                        <LinkBtn as='p' onClick={exitHandle}>Exit</LinkBtn>
                    </>
                    
                    }
                    
                </NavRight>
            </HeaderWrap>
            <Outlet />
        </Wrapper>
        
    )
}

export default Header