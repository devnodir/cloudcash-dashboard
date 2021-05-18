import React from 'react';
import App from './App';
import Error404 from './Error404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route component={Error404} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Routing;