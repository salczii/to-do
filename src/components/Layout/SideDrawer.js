import React from 'react';

import Backdrop from '../UI/Backdrop';
import Nav from '../Layout/Toolbar/Nav';
import SideDrawerDiv from '../../styled-components/SideDrawerDiv'

const sideDrawer = ({ open, closed }) => {
    return (
        <>
            <Backdrop show={open} clicked={closed} />
            <SideDrawerDiv className='' onClick={closed} show={open}>
                <Nav show={open} />
            </SideDrawerDiv>
        </>
    );
};

export default sideDrawer;