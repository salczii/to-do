import React from 'react';
import NavList from '../../../styled-components/NavList';
import { ReactComponent as ThinIcon } from '../../../img/chevronthinright.svg';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppProvider';


const ControlLinkEle = styled.div`
    color: pink;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    ${props => props.current === 'true' && css`
    color: rgb(151, 76, 120);
    `}
`

const ThinIconStyled = styled(ThinIcon)`
    fill: ${props => props.current === 'true' ? 'rgb(151, 76, 120)' : 'transparent'};
    padding-top: 10px;
`

const ControlLink = ({ children, to, current, name }) => {
    return (
        <>
            <AppContext.Consumer>
                {({ page }) => <ThinIconStyled current={(page === name).toString()} />}
            </AppContext.Consumer>
            <AppContext.Consumer>
                {({ page, setPage }) => {
                    return (<ControlLinkEle
                        onClick={() => setPage(name)}
                        as={Link}
                        to={to}
                        current={(page === name).toString()}>
                        {children}
                    </ControlLinkEle >)
                }}
            </AppContext.Consumer>
        </>
    )
}

export const Nav = ({ show }) => {
    return (
        <nav className="nav">
            <NavList className='nav__list' show={show}>
                <li className='nav__list--item'><ControlLink to='/' name='/'>Your List</ControlLink></li>
                <li className='nav__list--item'><ControlLink to='/important' name='important'>Important Tasks</ControlLink></li>
                <li className='nav__list--item'><ControlLink to='/complete' name='complete'>Done Tasks</ControlLink></li>
                <li className='nav__list--item'><ControlLink to='/settings' name='settings'>Settings</ControlLink></li>
            </NavList>
        </nav>
    )
}
