# MyReactRepository
# Beloware few usefull commands while working with react-redux & usefull imports

#creating brand new react app
npx create-react-app <app-name-in-lower-case>

#Adding bootstrap support for UI
npm install --save bootstrap
import 'bootstrap/dist/css/bootstrap.css';

#Adding redux
npm install redux
import createStore from 'redux'

#Adding react-redux library support
npm install react-redux

#enabling react router support
npm install react-router-dom
import {BrowserRouter as Router , Route , Link } from 'react-router-dom'

#installing redux thunk middleware
npm install redux thunk
import { applyMiddleware } from 'redux-thunk'
