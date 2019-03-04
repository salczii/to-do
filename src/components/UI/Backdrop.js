import React from 'react';
import Backdrop from '../../styled-components/Backdrop'

console.log('backdrop')

const backdrop = ({ show, clicked, withError }) => (
    show ? <Backdrop onClick={clicked} withError={withError}></Backdrop> : null
);

export default backdrop;