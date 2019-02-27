import React from 'react';
import { Nav } from './Nav';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu.js';

const Toolbar = ({ drawerToggleClicked }) => {
    return (
        <header className="header">
            <Logo />
            <Nav />
            <BurgerMenu drawerToggleClicked={drawerToggleClicked} />
        </header>
    )
}

export default Toolbar
