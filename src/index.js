import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
