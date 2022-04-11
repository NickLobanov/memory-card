import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__user">username</div>
                <h1 className="header__logo">
                    <Link to='main'>MemoryCard</Link>
                </h1>
                <div className="header_btns">
                    <Link to='leaderboard'>Leaderboard</Link>
                    <Link to='settings'>Settings</Link>
                </div>
            </header>
            <Outlet />
        </>
        
    )
}

export default Header