import React from 'react'
import Backdrop from './Backdrop'

const Modal = ({ children }) => {
    return (
        <>
            <Backdrop show={this.props.show} clicked={props.modalClosed} />
            <div classname='modal'>
                {children}
            </div>
        </>
    )
}

export default Modal