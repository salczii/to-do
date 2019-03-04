import { AppContext } from './AppProvider';
import React from 'react';

export const withAppContext = (Component) => {
    return (props) => {
        return (
            <AppContext.Consumer>
                {state => <Component {...props} context={state} />}
            </AppContext.Consumer>
        )
    }
}