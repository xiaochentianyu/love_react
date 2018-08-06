import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from '../pages/index'

const Routers = () => (
    <Router>
        <Switch>
            <Route path="/:edi" component={ Index } />
            <Route path="/" component={ Index } />
        </Switch>
    </Router>
)

export default Routers;