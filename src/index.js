import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../src/index.css';

// import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from 'react-globally'

import LocationPage from './components/pages/location'
import QuestionsPage from './components/pages/questions'
import ResultsPage from './components/pages/results'
import SliderComponent from "./components/ui-components/input-slider";

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
                <Route exact path='/slider' render={props => <SliderComponent {...props}/>}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
