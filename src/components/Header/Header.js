import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Wrapper } from "../../styles/components/Wrapper";
import { HeaderWrap } from "../../styles/components/HeaderWrap";
import styled from "styled-components";

const LinkBtn = styled(Link)`
    color: black;
    text-decoration: none;
    margin-left: 15px;
`
const LogoLink = styled(LinkBtn)`
    font-family: 'Courgette', Arial, Helvetica, sans-serif;
    font-size: 42px;
`
const Nav = styled.div`
    width: 35%;
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

    return (
        <Wrapper>  
            <HeaderWrap>
                <Nav>
                    <span>username</span>
                    <span>Score: 0000</span>
                </Nav>
                <LogoLink to=''>
                    Memory Card
                </LogoLink>
                <NavRight>
                    <LinkBtn to='leaderboard'>Leaderboard</LinkBtn>
                    <LinkBtn to='settings'>Settings</LinkBtn>
                </NavRight>
            </HeaderWrap>
            <Outlet />
        </Wrapper>
        
    )
}

export default Header