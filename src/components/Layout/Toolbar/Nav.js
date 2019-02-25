import React from 'react'
import NavList from '../../../styled-components/NavList'
const Nav = ({ show }) => {
    return (
        <nav className="nav">
            <NavList className='nav__list' show={show}>
                <li className='nav__list--item'>Your List</li>
                <li className='nav__list--item'>Important Tasks</li>
                <li className='nav__list--item'>Done Tasks</li>
                <li className='nav__list--item'>Settings</li>
            </NavList>
        </nav>
    )
}

export default Nav
