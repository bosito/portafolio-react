import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../screens/home/Home';
import Project from '../screens/Proyect';
import Error404 from '../screens/Error404';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/projects_datos' component={Project} />
                <Route path='*' component={Error404} />
            </Switch>
        </BrowserRouter>
    );
};