import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer';
import { AppProvider } from '../AppProvider'

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <>
                <AppProvider>
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler} />
                    <Toolbar
                        drawerToggleClicked={this.sideDrawerToggleHandler} />
                    <main>{this.props.children}</main>
                </AppProvider>

            </>
        )
    }
}

export default Layout
