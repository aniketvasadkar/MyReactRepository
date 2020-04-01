import React from 'react';

import {BrowserRouter as Router , Route } from 'react-router-dom'

import LoginComponent from './components/logincomponent/LoginComponent'
import HomeComponent from './components/home/HomeComponent'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
     <Router>
        <Route exact path="/" component={LoginComponent}/>
        <Route exact path="/home/:user/:role" component={HomeComponent}/>
     </Router>

    </div>
  );
}

export default App;
