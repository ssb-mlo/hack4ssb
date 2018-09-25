import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from 'react-globally'

import LocationPage from './components/pages/location'
import QuestionsPage from './components/pages/questions'
import ResultsPage from './components/pages/results'

const initialState = {
    questions: []
}

ReactDOM.render(
    <Provider globalState={initialState}>
        <Router>
            <Switch>
                <Route exact path='/' render={props => <LocationPage {...props}/>}/>
                <Route exact path='/questions' render={props => <QuestionsPage {...props}/>}/>
                <Route exact path='/results' render={props => <ResultsPage {...props}/>}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
