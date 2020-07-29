import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './containers/login'
import User from './containers/user'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <PrivateRoute path='/user'>
          <User />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
