import React from 'react';
import {  BrowserRouter,Route, Switch} from 'react-router-dom'; 

import logo from '../../../../logo.svg';
import './wrapper.scss'


import SignIn from '../../../../components/SignIn/SignIn'

function Wrapper() {
  return (
    <div className="wrapper-container">
      <Route render={({location}) => (
        <Switch location={location}>
          <Route exact path="/SignIn" component={SignIn}/>
        </Switch>
      )}>
      </Route>
    </div>
  );
}

export default Wrapper;
