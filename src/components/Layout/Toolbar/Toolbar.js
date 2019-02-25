import React from 'react';
import Nav from './Nav';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu.js';
import SearchBar from './SearchBar.js';
import LoginBtn from '../../UI/LoginBtn';

const Toolbar = ({ drawerToggleClicked }) => {
    return (
        <header className="header">
            <Logo />
            <Nav />
            <SearchBar />
            <LoginBtn />
            <BurgerMenu drawerToggleClicked={drawerToggleClicked} />
        </header>
    )
}

export default Toolbar
