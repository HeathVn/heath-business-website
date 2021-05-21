//import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Services from './pages/Services';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
      </Switch> 
    </Router>
  );
}

export default App;
