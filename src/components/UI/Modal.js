import React from 'react'
import Backdrop from './Backdrop'
import ModalComponent from '../../styled-components/ModalComponent'

const Modal = ({ children, modalClosed, showModal }) => {
    return (
        <>
            <Backdrop show={showModal} clicked={modalClosed} />
            <ModalComponent show={showModal}>
                {children}
            </ModalComponent>
        </>
    )
}

export default Modal