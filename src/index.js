import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'

// import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LocationPage from './components/pages/location'
import QuestionsPage from './components/pages/questions'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' render={props => <LocationPage {...props}/>}/>
            <Route exact path='/questions'  render={props => <QuestionsPage {...props}/>}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
