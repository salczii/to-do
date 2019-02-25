import React from 'react'

const BurgerMenu = ({ drawerToggleClicked }) => {
    return (
        <div className="header__burger" onClick={drawerToggleClicked}>
            <span className="header__burger--block"></span>
            <span className="header__burger--block"></span>
            <span className="header__burger--block"></span>
        </div>
    )
}

export default BurgerMenu
