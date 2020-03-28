import React from 'react';
import TestClassComponent from './components/class/TestClassComponent';
import TestFComponent from './components/functional/TestFComponent';
import LoginComponent from './components/logincomponent/LoginComponent';
import PropsStateDemoComponent from './components//propsstatedemo/PropsStateDemoComponent'
import Timer from './components/propsstatedemo/Timer'
import Parent from './components/childtoparentdata/Parent'
import ErrorHandler from './components/errors/ErrorHandler'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container mx-auto bg-secondary border border-primary rounded" >

        <LoginComponent testParam= {'Test Param value'} />


    </div>
  );
}

export default App;
