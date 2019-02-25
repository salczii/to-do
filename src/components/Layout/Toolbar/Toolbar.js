import React from 'react';
import Nav from './Nav';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu.js';
import SearchBar from './SearchBar.js';

const Toolbar = ({ drawerToggleClicked }) => {
    return (
        <header className="header">
            <Logo />
            <SearchBar />
            <Nav />
            <BurgerMenu drawerToggleClicked={drawerToggleClicked} />
        </header>
    )
}

export default Toolbar
