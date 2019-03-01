import React from 'react'
import Backdrop from './Backdrop'
import ModalComponent from '../../styled-components/ModalComponent'
import { AppContext } from '../AppProvider';

const Modal = ({ children }) => {
    return (
        <>
            <Backdrop />
            <AppContext.Consumer>
                {({ showModal }) => <ModalComponent show={showModal}>
                    {children}
                </ModalComponent>}
            </AppContext.Consumer>

        </>
    )
}

export default Modal