import React from 'react';
import {  Redirect ,Route, Switch } from 'react-router-dom';

import logo from '../../../../logo.svg';
import './wrapper.scss'


import SignIn from '../../../../components/SignIn/SignIn'
import SignUp from '../../../../components/SignUp/SignUp'
import Home from './Home'
import Aprender from "../../../Learn/Aprender";
import Collection from '../../../Collection/Collection'
import SyncTrash from '../../../AboutUs/SyncTrash'
import Us from '../../../AboutUs/Us'
import Contact from '../../../contact/Contact'

function Wrapper() {
  return (
    <div className="wrapper-container">
      <Route render={({location}) => (
        <Switch location={location}>
          <Route exact path="/">
              <Redirect to = "/SignIn"/>
          </Route>
          <Route exact path="/SignIn" component={SignIn}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Aprender" component={Aprender}/>
          <Route exact path="/Acopios" component={Collection}/>
          <Route exact path="/Contacto" component={Contact}/>
          <Route exact path="/SyncTrash" component={SyncTrash}/>
          <Route exact path="/Us" component={Us}/>
        </Switch>
      )}>
      </Route>
      
    </div>
  );
}

export default Wrapper;
