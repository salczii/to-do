import React, { Component } from 'react';
import Modal from './UI/Modal';

const ErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            const { error } = this.state
            return (
                <>
                    <Modal
                        show={error}
                        close={this.errorConfirmedHandler}
                        withError={error}>
                        >
                        {error ? error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} error={error} />
                </>
            );
        }
    }
}

export default ErrorHandler