import React , { Component } from 'react'
import {BrowserRouter as Router , Link , Route } from 'react-router-dom'

import Timer from '../propsstatedemo/Timer'
import Parent from '../childtoparentdata/Parent'
import PropsStateDemoComponent from '../propsstatedemo/PropsStateDemoComponent'
import UseStateHookDemo from '../hooks/UseStateHookDemo'

import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderRoutes extends Component{
constructor(){
super()
}

render(){

return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
           <ul className="navbar-nav mr-auto">
            <li className="navbar-brand active"> <Link className="nav-link" to="/timer">Timer</Link> </li>
            <li className="navbar-brand"> <Link className="nav-link" to="/parent">ParentChildDemo</Link> </li>
            <li className="navbar-brand"> <Link className="nav-link" to="/propsStateDemo">Props & State demo</Link> </li>
            <li className="navbar-brand"> <Link className="nav-link" to="/useStateHookDemo">UseState Demo</Link> </li>
          </ul>

        <span class="navbar-brand navbar-text text-light">
             <span className="text-dark"> Username: </span> {this.props.username}<br/>
             <span className="text-dark"> Role:  </span>    {this.props.role}
            </span>

        </div>
    </nav>

                <Route path="/timer" component={Timer}/>
                <Route path="/parent" component={Parent}/>
                <Route path="/propsStateDemo" component={PropsStateDemoComponent}/>
                <Route path="/useStateHookDemo" component={UseStateHookDemo}/>

    </Router>
    )

        }



}

export default HeaderRoutes;