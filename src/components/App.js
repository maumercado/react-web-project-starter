import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "../store";

import Welcome from "./Welcome";

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="container App">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
