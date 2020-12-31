import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path="/" >
          <App />
        </Route>

        <Route exact path="/:id" >
          <App />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
