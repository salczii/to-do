import React from 'react';
import Backdrop from '../../styled-components/Backdrop'

const backdrop = ({ show, clicked }) => (
    show && <Backdrop onClick={clicked}></Backdrop>
);

export default backdrop;