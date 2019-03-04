import React from 'react'
import Backdrop from './Backdrop'
import ModalComponent from '../../styled-components/ModalComponent'

class Modal extends React.Component {

    render() {
        const { children, show, close, withError } = this.props;

        return (
            <>
                <Backdrop show={show} clicked={close} withError={withError} />
                <ModalComponent show={show} withError={withError} onClick={withError ? close : null}>
                    {children}
                </ModalComponent>}
            </>
        )
    }
}

export default Modal