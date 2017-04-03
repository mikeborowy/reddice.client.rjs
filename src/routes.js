import React from 'react';
import {Route, IndexRoute} from 'react-router';
//Components
import App from './components/App';
import HelloWorld from './components/helloWorld/HelloWorld';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HelloWorld}/>
    </Route>
);