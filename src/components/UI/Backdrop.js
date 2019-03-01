import React from 'react';
import Backdrop from '../../styled-components/Backdrop'
import { AppContext } from '../AppProvider';

const backdrop = () => (
    <AppContext.Consumer>
        {({ showModal, closeModal }) => showModal && <Backdrop onClick={closeModal}></Backdrop>}
    </AppContext.Consumer>
);

export default backdrop;