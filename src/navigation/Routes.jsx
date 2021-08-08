import React from 'react';
import Home from '../screens/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
