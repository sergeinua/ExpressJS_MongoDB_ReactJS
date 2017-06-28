import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home-page';
import MainPage from './pages/Main-page';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/map' component={MainPage} />
        </div>
    </Router>,
  document.getElementById('root')
);
