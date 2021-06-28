import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Form from './components/Form/Form';
import './scss/main.scss';

class App extends Component {
  render() {
    return(
      <>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = "/registration">
          <Register />
        </Route>
        <Route path = "/logout">
          <Logout />
        </Route>
        <Route path = "/form">
          <Form />
        </Route>
      </>
    )
  }
}

export default App;
