import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth } from '../Auth';
import { Messenger } from '../Messenger';
import { PrivateRoute } from '../PrivateRoute'
import { Registration } from '../Registration';

interface AppState {
    isAuthenticated: boolean
    userId?: TUUID
}

export class App extends React.PureComponent<{}, AppState> {
    state = {
        isAuthenticated: false,
        userId: ''
    }

    authorize(userId: TUUID) {
        this.setState({
            isAuthenticated: true,
            userId
        })
    }

    render() {
        return (
            <Switch>
                <PrivateRoute
                    path="/chat"
                    isAuthenticated={this.state.isAuthenticated}
                    exact
                    component={Messenger} />}
                />
                <PrivateRoute
                    path="/chat/:chatId"
                    isAuthenticated={this.state.isAuthenticated}
                    exact
                    component={Messenger}
                />
                <Route
                    path="/auth"
                    exact
                    render={
                        props => <Auth {...props} submitCallback={this.authorize.bind(this)}  />
                    }
                />
                <Route
                    path="/registration"
                    exact
                    render={
                        props => <Registration {...props} submitCallback={this.authorize.bind(this)}  />
                    }
                />
                <Redirect to="/chat" />
            </Switch>
        )
    }
}